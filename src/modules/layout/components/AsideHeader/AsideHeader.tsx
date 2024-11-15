// import Link from 'next/link';

import LogoLiome from 'styles/icons/logo/liome.svg';
// import XLogo from 'styles/icons/logo/x.svg';
// import InstagramLogo from 'styles/icons/logo/instagram.svg';
import LocalizedClientLink from '@modules/common/components/localized-client-link';

import styles from './AsideHeader.module.css';

async function AsideHeader({
  ...rest
}) {

  return (
    <aside
      className={styles.root}
      {...rest}
    >
      <LocalizedClientLink
        href="/"
        title="Accéder à la page d'accueil de Liome"
      >
        <LogoLiome
          className={styles.logo}
        />
      </LocalizedClientLink>
      <div>
        <div className={styles.socialMedia}>
          <div className={styles.copyright}>
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Liome. Tous droits réservés.
          </div>
          {/* TODO: Add social icons when available */}
          {/* <div className={styles.socialIcons}>
            <Link
              href="https://www.x.com/liome.fr"
              title="Accéder au compte X de Liome"
              target="_blank"
              rel="noopener"
            >
              <XLogo className={styles.socialIcon} />
            </Link>
            <Link
              href="https://www.instagram.com/liome.fr/"
              title="Accéder au compte Instagram de Liome"
              target="_blank"
              rel="noopener"
            >
              <InstagramLogo className={styles.socialIcon} />
            </Link>
          </div> */}
        </div>
      </div>
    </aside>
  );
}

export default AsideHeader;
