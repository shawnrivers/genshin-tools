import 'app/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from 'app/utils/types';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
