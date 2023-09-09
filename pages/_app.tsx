import "@/styles/globals.css";
import type { AppProps } from "next/app";

//Wrapper for material Tailwind
import { ThemeProvider } from "@material-tailwind/react";

//Background wrapper for site
import Background from "@/components/layout/containers/background";

import Layout from "@/components/layout/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Background>
        <Layout>
          <Head>
            <meta name="viewport" />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </Background>
    </ThemeProvider>
  );
}
