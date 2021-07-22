import Layout from 'components/shared/Layout';
import 'assets/scss/main.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="xfu43kwf7sgbE96KISAuyPxuXMe1Rd_Tl703JL81b00"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
