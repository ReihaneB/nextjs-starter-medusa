/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import { Image as MedusaImage } from '@medusajs/medusa';
import Image from 'next/image';

import ArrowLeftIcon from 'styles/icons/arrows/arrow-left.svg';
import ArrowRightIcon from 'styles/icons/arrows/arrow-right.svg';

import styles from './Carousel.module.css';

type ImageGalleryProps = {
  images: MedusaImage[]
}

function Carousel({ images }: ImageGalleryProps) {
  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles.carousel} ${styles.carouselTranslate}`}>
        {images.map((_, index) => (
          <input
            key={index}
            className={styles.carouselActivator}
            type="radio"
            name="carousel"
            id={`carousel-${index}`}
            defaultChecked={index === 0}
          />
        ))}
        {images.map((_, index) => (
          <div key={`control-${index}`} className={styles.carouselControls}>
            <label
              className={`${styles.carouselControl} ${styles.carouselControlBackward}`}
              htmlFor={`carousel-${(index - 1 + images.length) % images.length}`}
            >
              <ArrowLeftIcon
                className={styles.carouselControlIcon}
                width={16}
                height={16}
              />
            </label>
            <label
              className={`${styles.carouselControl} ${styles.carouselControlForward}`}
              htmlFor={`carousel-${(index + 1) % images.length}`}
            >
              <ArrowRightIcon
                className={styles.carouselControlIcon}
                width={16}
                height={16}
              />
            </label>
          </div>
        ))}
        <div className={styles.carouselTrack}>
          {images.map((image, index) => (
            <div key={image.url} className={styles.carouselSlide}>
              <Image
                className={styles.carouselImage}
                draggable={false}
                src={image.url}
                priority={index <= 1}
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
        <div className={styles.carouselIndicators}>
          {images.map((_, index) => (
            <label
              key={`indicator-${index}`}
              className={styles.carouselIndicator}
              htmlFor={`carousel-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
