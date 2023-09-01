import "@/styles/globals.css";
import type { AppProps } from "next/app";

//Wrapper for material Tailwind
import { ThemeProvider } from "@material-tailwind/react";

import Layout from "@/components/layout/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
