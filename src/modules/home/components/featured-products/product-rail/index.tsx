import { HttpTypes } from "@medusajs/types"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreProductCategory
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  console.log("collection", collection)

  if (!products) {
    return null
  }

  return (
    <div>
      <div className="flex justify-between mb-8">
        <h2>{collection.name}</h2>
        <InteractiveLink href={`/categories/${collection.handle}`}>
          Voir tout
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-6">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
