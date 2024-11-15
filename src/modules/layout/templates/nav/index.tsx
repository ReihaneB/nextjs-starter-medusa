'use client';


/* eslint-disable react/no-array-index-key */
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import Cart from 'styles/icons/meta/cart.svg';
import Home from 'styles/icons/meta/home.svg';
import User from 'styles/icons/meta/user.svg';
import Store from 'styles/icons/meta/store.svg';

import styles from './NavBar.module.css';

const Link = [
  {
    name: 'Accueil',
    href: '/',
    icon: Home,
  },
  {
    name: 'Produits',
    href: '/store',
    icon: Store,
  },
  {
    name: 'Compte',
    href: '/account',
    icon: User,
  },
  {
    name: 'Panier',
    href: '/cart',
    icon: Cart,
  },
];

export default function Nav() {
  return (
    <nav className={styles.root}>
      {Link.map(({icon: Icon, href, name}, index) => (
        <span key={index} className={styles.link}>
          <LocalizedClientLink
            href={href}
            data-testid={`nav-${name.toLowerCase()}-link`}
          >
            <Icon
              className={styles.icon}
              color="white"
            />
            <span className={styles.text}>{name}</span>
          </LocalizedClientLink>
        </span>
      ))}
    </nav>
  );
}
