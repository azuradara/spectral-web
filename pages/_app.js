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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta charset="utf-8" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@azuradara" />
        <meta name="theme-color" content="#1B1A16" />
        <meta
          property="twitter:image"
          content="https://spectral-web.vercel.app/images/changelog/2021-07-21.png"
        />
        <meta
          name="twitter:title"
          content="Spectral - A productivity-first approach to your browser experience."
        />
        <meta
          name="og:title"
          content="Spectral - A productivity-first approach to your browser experience."
        />
        <meta
          name="description"
          content="Spectral keeps all of your data in one place. Bookmarks, tasks, emails, and calendar - all available in one too."
        />
        <meta
          name="twitter:description"
          content="Spectral keeps all of your data in one place. Bookmarks, tasks, emails, and calendar - all available in one too."
        />
        <meta
          name="og:description"
          content="Spectral keeps all of your data in one place. Bookmarks, tasks, emails, and calendar - all available in one too."
        />
        <meta name="og:url" content="https://spectral-web.vercel.app/" />
        <meta name="og:site_name" content="Spectral" />
        <meta name="og:type" content="website" />
        <meta
          property="og:image"
          content="https://spectral-web.vercel.app/images/changelog/2021-07-21.png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
