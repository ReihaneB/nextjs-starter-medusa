import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
    >
      <div
        data-testid="product-wrapper"
        className="flex flex-col gap-y-4 p-4 bg-[#303134] rounded-lg"
      >
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          isFeatured={isFeatured}
          size="square"
        />
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-1">
            <span
              className="text-[var(--white-medium)]"
              data-testid="product-category"
            >
              {product.categories?.map(category => category.name).join(', ')}
            </span>
            <span
              className="text-[var(--white-light)] font-bold"
              data-testid="product-title"
            >
              {product.title}
            </span>
          </div>
          <div>
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
