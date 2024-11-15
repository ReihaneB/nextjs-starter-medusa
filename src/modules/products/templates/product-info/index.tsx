import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import styles from './ProductInfo.module.css';

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div
      className={styles.root}
      id="product-info"
    >
      {product.collection && (
      <LocalizedClientLink
        className={styles.collection}
        href={`/collections/${product.collection.handle}`}
      >
        {product.collection.title}
      </LocalizedClientLink>
      )}
      {product.categories && (
      <h2
        className={styles.type}
        data-testid="product-type"
      >
        {product.categories.map(category => category.name).join(', ')}
      </h2>
      )}
      <h1
        className={styles.title}
        data-testid="product-title"
      >
        {product.title}
      </h1>
      <p
        className={styles.description}
        data-testid="product-description"
      >
        {product.description}
      </p>
    </div>
  )
}

export default ProductInfo
