import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="Layout__Content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
