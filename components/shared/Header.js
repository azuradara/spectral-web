/* eslint-disable */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

import logoText from 'assets/svg/logo_text.svg';
import logoIcon from 'assets/svg/logo_ico.svg';
import menuIcon from 'assets/svg/menu_ico.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const watchScroll = () => {
      if (window.scrollY >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', watchScroll);

    return function unMount() {
      window.removeEventListener('scroll', watchScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className={`nav ${scrolled && !mobileMenu ? 'navScroll' : ''}`}>
      {/* LOGO */}
      <div className="contentContainer">
        <Link href="/">
          <div className="logo">
            <Image src={logoIcon} height={24} width={24} />
            <Image src={logoText} height={20} width="100%" />
          </div>
        </Link>

        {/* DEKSTOP NAVIGATION */}
        <div className="desktop">
          <div className="navigation">
            <div className="content">
              <Link className="secondary" href="/download">
                Download
              </Link>
              <Link className="secondary" href="/changelog">
                Changelog
              </Link>
            </div>
          </div>
        </div>

        {/* SPACER FOR MOBILE */}
        <div className="mobile spacer"></div>

        {/* AUTH ROW */}
        <div className="authRow">
          <Link className="signUp" href="/signup">
            Sign up
          </Link>
          <button
            onClick={() => router.push('/download')}
            className="appBtn_Btn"
            type="submit"
          >
            Spectral -{'>'}
          </button>
        </div>

        <div onClick={() => toggleMobileMenu()} className="mobile menuToggle">
          <Image src={menuIcon} height={20} width={20} />
        </div>
      </div>

      {Boolean(mobileMenu) && (
        <div className="mobile mobileMenu">
          <div className="navigation">
            <div className="content">
              <Link className="secondary" href="/changelog">
                Changelog
              </Link>
              <Link className="secondary" href="/about">
                About us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
