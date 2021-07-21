import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import styles from 'styles/shared/Layout.module.scss'

import logoIcon from 'assets/svg/logo_ico.svg'
import logoText from 'assets/svg/logo_text.svg'

const Layout = ({ children }) => {

  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const watchScroll = () => {
      if (window.scrollY >= 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', watchScroll)

    return function unMount() {
      window.removeEventListener('scroll', watchScroll)
    }
  }, [])


  return (
    <div className={styles.container}>

      <header className={`${styles.header} ${scrolled ? styles.headerScroll : ''}`}>
        {/* LOGO */}
        <div className={styles.contentContainer}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src={logoIcon} height={32} width={32} />
              <Image src={logoText} height={22} width="100%" />
            </div>
          </Link>


          {/* DEKSTOP NAVIGATION */}
          <div className={styles.desktop}>
            <div className={styles.navigation}>
              <div className={styles.content}>
                <Link className={styles.secondary} href="/changelog">Changelog</Link>
                <Link className={styles.secondary} href="/about">About us</Link>
              </div>
            </div>
          </div>

          {/* AUTH ROW */}
          <div className={styles.authRow}>
            <a className={styles.signUp} href="/signup">Sign up</a>
            <button className={styles.appBtn_Btn} type="submit">App --</button>
          </div>
        </div>
      </header>


      {children}
    </div >
  )
}

export default Layout