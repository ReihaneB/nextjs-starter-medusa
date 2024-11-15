import { sdk } from "@lib/config"
import { cache } from "react"
import { getProductsList } from "./products"
import { HttpTypes } from "@medusajs/types"
import { ProductCategory } from "@medusajs/js-sdk/dist/admin/product-category"

export const retrieveCollection = cache(async function (id: string) {
  return sdk.store.collection
    .retrieve(id, {}, { next: { tags: ["collections"] } })
    .then(({ collection }) => collection)
})

export const getCollectionsList = cache(async function (
  offset: number = 0,
  limit: number = 100
): Promise<{ collections: HttpTypes.StoreCollection[]; count: number }> {
  return sdk.store.collection
    .list({ limit, offset: 0 }, { next: { tags: ["collections"] } })
    .then(({ collections }) => ({ collections, count: collections.length }))
})

export const getCollectionByHandle = cache(async function (
  handle: string
): Promise<HttpTypes.StoreCollection> {
  return sdk.store.collection
    .list({ handle }, { next: { tags: ["collections"] } })
    .then(({ collections }) => collections[0])
})

export const getCollectionsWithProducts = cache(
  async (countryCode: string): Promise<HttpTypes.StoreCollection[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections
      .map((collection) => collection.id)
      .filter(Boolean) as string[]

    const { response } = await getProductsList({
      queryParams: { collection_id: collectionIds },
      countryCode,
    })

    response.products.forEach((product) => {
      const collection = collections.find(
        (collection) => collection.id === product.collection_id
      )

      if (collection) {
        if (!collection.products) {
          collection.products = []
        }

        collection.products.push(product as any)
      }
    })

    return collections as unknown as HttpTypes.StoreCollection[]
  }
)


export const getCategoriesList = cache(async function (
  offset: number = 0,
  limit: number = 100
): Promise<{ product_categories: HttpTypes.StoreProductCategory[]; count: number }> {
  return sdk.store.category
    .list({ limit, offset: 0 }, { next: { tags: ["categories"] } })
    .then(({ product_categories }) => ({ product_categories, count: product_categories.length }))
})

export const getCategoriesWithProducts = cache(
  async (
    countryCode: string
  ): Promise<HttpTypes.StoreProductCategory[] | null> => {
    const { product_categories: categories } = await getCategoriesList(0, 3);

    if (!categories) {
      return null;
    }

    const categoriesIds = categories.map(categories => categories.id);

    await Promise.all(
      categoriesIds.map(id => getProductsList({
        queryParams: { category_id: [id] },
        countryCode,
      }))
    ).then(responses => responses.forEach(({ response, queryParams }) => {
      let category;

      if (categories) {
        category = categories.find(
          category => category.id === queryParams?.category_id?.[0]
        );
      }

      if (!category) {
        return;
      }

      category.products = response.products;
    }));

    return categories as unknown as HttpTypes.StoreProductCategory[];
  }
);
