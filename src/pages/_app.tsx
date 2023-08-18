import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import '../styles/globals.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          primaryColor: 'main',
          primaryShade: 3,
          colors: {
            main: [
              "#FFE1D1",
              "#FFA97F",
              "#F58351",
              "#DA6836",
              "#CE470B",
              "#BC2F00",
              "#A02200",
              "#801B00",
              "#661600",
              "#521200"
            ]
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}