import type { AppProps } from "next/app";

//Redux imports
import { Provider } from "react-redux";
import store from "@/store/index";

//Wrapper imports
import { ThemeProvider } from "@material-tailwind/react";
import Background from "@/components/layout/containers/background";
import Layout from "@/components/layout/layout";

import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <Provider store={store}>
      {/* Redux store provider */}

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeProvider>
        {/* Theme provider for Material UI */}

        <Background>
          {/* Wrapper for website background */}

          <Layout>
            {/* Layout component with NavBar */}

            <Component {...pageProps} />
            
          </Layout>
        </Background>
      </ThemeProvider>
    </Provider>
  );
}
