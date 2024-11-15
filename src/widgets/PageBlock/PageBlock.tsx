import styles from './PageBlock.module.css';
import type { PageBlockProps } from './PageBlock.d';

function PageBlock({
  title,
  layout = undefined,
  content,
  ...rest
}: PageBlockProps) {
  const renderCards = () => {
    switch (layout) {
      case '2-left-1-right':
        return (
          <div
            className={styles.twoLeftOneRight}
          >
            {content[0]}
            {content[1]}
          </div>
        );
      case '1-left-2-right':
        return (
          <div
            className={styles.oneLeftTwoRight}
          >
            {content[0]}
            {content[1]}
          </div>
        );
      case '50-50':
        return (
          <div
            className={styles.fiftyFifty}
          >
            {content[0]}
            {content[1]}
          </div>
        );
      case '4':
        return (
          <div
            className={styles.four}
          >
            {content}
          </div>
        );
      default:
        return (
          <div
            className={styles.default}
          >
            {content}
          </div>
        );
    }
  };

  return (
    <section
      className={styles.root}
      {...rest}
    >
      <div
        className={styles.heading}
      >
        <h1>
          {title}
        </h1>
      </div>
      {renderCards()}
    </section>
  );
}

export default PageBlock;
