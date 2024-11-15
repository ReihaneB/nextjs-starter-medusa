import Link from 'next/link';

import Card from 'components/Card/Card';
import PageBlock from 'widgets/PageBlock/PageBlock';

import type { LegalContentProps } from './LegalContent.d';
import styles from './LegalContent.module.css';

function LegalContent({
  title,
  content,
}: LegalContentProps) {
  return (
    <PageBlock
      title={title}
      layout="1-left-2-right"
      content={[
        <div
          className={styles.summary}
        >
          <Card
            key="summary"
            title="Sommaire"
          >
            <ul
              className={styles.list}
            >
              {content.map(({ name }) => (
                <li key={name}>
                  <Link
                    href={`#${name}`}
                    passHref
                    className={styles.link}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </div>,
        <Card
          key="details"
          contentStyle={styles.section}
        >
          {content.map(({ name, section }) => (
            <div key={name}>
              <h2
                id={name}
                className={styles.sectionTitle}
              >
                {name}
              </h2>
              <div>{section}</div>
            </div>
          ))}
        </Card>,
      ]}
    />
  );
}

export default LegalContent;
