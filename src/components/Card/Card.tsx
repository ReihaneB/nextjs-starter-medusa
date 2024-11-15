import { clx } from '@medusajs/ui';

import styles from './Card.module.css';
import type { CardProps } from './Card.d';

function Card({
  title = '',
  children = undefined,
  backgroundColor = 'light',
  contentStyle = undefined,
  ...rest
}: CardProps) {
  return (
    <div
      className={clx(
        styles.root,
        backgroundColor === 'dark' && styles.dark
      )}
      data-testid="card"
      {...rest}
    >
      {(title) && (
        <div
          className={styles.header}
          data-testid="card-header"
        >
          <div
            className={styles.title}
          >
            {title && (
              <h3
                data-testid="card-title"
              >
                {title}
              </h3>
            )}
          </div>
        </div>
      )}
      <div
        data-testid="card-content"
        className={contentStyle}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
