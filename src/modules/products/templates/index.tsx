import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"
import styles from './ProductTemplate.module.css';
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import LiomeLogo from 'styles/icons/logo/liome.svg';
import Carousel from '../components/Carousel/Carousel';

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

function Header() {
  return (
    <header className={styles.header}>
      <LocalizedClientLink href="/">
        <LiomeLogo
          className={styles.logo}
        />
      </LocalizedClientLink>
    </header>
  );
}


const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  ...rest
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div
      className={styles.root}
      data-testid="product-container"
      {...rest}
    >
      <div className={styles.leftSide}>
        <Header />
        <div className={styles.productInfo}>
          <div className={styles.productActions}>
            <ProductInfo product={product} />
            <ProductTabs product={product} />
          </div>
        </div>
        <ProductActionsWrapper id={product.id} region={region} />
      </div>
      <div className={styles.rightSide}>
        <Carousel images={product?.images || []} />
      </div>
    </div>
  )
}

export default ProductTemplate
