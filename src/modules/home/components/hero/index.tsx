import InteractiveLink from "@modules/common/components/interactive-link";
import ProductImageStar from 'styles/product/star-landscape.jpg';
import ProductImageEclipse from 'styles/product/eclipse-landscape.jpg';
import ProductImageInfinity from 'styles/product/infinity-landscape.jpg';
import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, categories: 'Anneau', name: 'Infinity', image: ProductImageInfinity, link: '/products/infinity' },
  { id: 2, categories: 'Anneau', name: 'Eclipse', image: ProductImageEclipse, link: '/products/eclipse' },
  { id: 3, categories: 'Bague', name: 'Star', image: ProductImageStar, link: '/products/star' },
];

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.root}>
    <div className={styles.leftSide}>
      <h1
        className={styles.title}
      >
        Les
        <br />
        essentiels
      </h1>
      <InteractiveLink href="/collections/essentials">Découvrir la collection</InteractiveLink>
    </div>
    <div className={styles.rightSide}>
      {products.map(product => (
        <Link href={product.link} key={product.id} className={styles.card}>
          <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-xl" />
          <div className={styles.cardText}>
            {product.categories && (
            <h2
              data-testid="product-type"
            >
              {product.categories}
            </h2>
            )}
            <h1
              data-testid="product-title"
            >
              {product.name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  </section>
  )
}

export default Hero
