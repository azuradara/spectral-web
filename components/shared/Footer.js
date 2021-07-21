import Image from 'next/image';
import Link from 'next/link';

import logoIcon from 'assets/svg/logo_ico.svg';

const Footer = () => {
  return (
    <footer>
      <div className="contentContainer">
        <div className="footerLogo">
          <Image src={logoIcon} width={16} height={16} />
          <p>Spectral - Built with no sleep</p>
        </div>

        <div className="stretch" />

        <Link href="https://github.com/azuradara">Github</Link>
        <Link href="https://twitter.com/azuradara">Twitter</Link>
        <Link href="mailto:dara-@outlook.jp">Contact Us</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
