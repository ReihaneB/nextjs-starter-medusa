import { HttpTypes } from "@medusajs/types"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import styles from "./FeaturedProducts.module.css"

export default async function FeaturedProducts({
  categories,
  region,
}: {
  categories: HttpTypes.StoreProductCategory[]
  region: HttpTypes.StoreRegion
}) {
  return (
    <div className={styles.root}>
      {categories.map((category) => (
        <li key={category.id}>
          <ProductRail collection={category} region={region} />
        </li>
      ))}
    </div>
  )
}
