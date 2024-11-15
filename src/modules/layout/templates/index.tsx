import React from "react"

import AsideHeader from '../components/AsideHeader/AsideHeader';

import Nav from "@modules/layout/templates/nav"
import styles from './Layout.module.css';

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
 <div className={styles.root}>
    <div className={styles.aside}>
      <AsideHeader />
    </div>
    <div className={styles.main}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  </div>
  )
}

export default Layout
