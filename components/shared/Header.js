import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logoText from 'assets/svg/logo_text.svg';
import logoIcon from 'assets/svg/logo_ico.svg';
import menuIcon from 'assets/svg/menu_ico.svg';
import angleRIcon from 'assets/svg/angle-r_ico.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <header
      className={`header ${scrolled && !mobileMenu ? 'headerScroll' : ''}`}
    >
      {/* LOGO */}
      <div className="contentContainer">
        <Link href="/">
          <div className="logo">
            <Image src={logoIcon} height={32} width={32} />
            <Image src={logoText} height={22} width="100%" />
          </div>
        </Link>

        {/* DEKSTOP NAVIGATION */}
        <div className="desktop">
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

        {/* SPACER FOR MOBILE */}
        <div className="mobile spacer"></div>

        {/* AUTH ROW */}
        <div className="authRow">
          <a className="signUp" href="/signup">
            Sign up
          </a>
          <button className="appBtn_Btn" type="submit">
            <p>App</p>
            <Image src={angleRIcon} height={14} width={14} />
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
