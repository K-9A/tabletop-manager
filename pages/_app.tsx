import type { AppProps } from "next/app";

//Provider imports
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import store from "@/store/index";

//Wrapper imports
import { ThemeProvider } from "@material-tailwind/react";
import Background from "@/components/layout/containers/background";
import Layout from "@/components/layout/layout";
import { AlertProvider } from "@/components/layout/alert/alert-context";
import AlertBox from "@/components/layout/alert/alert-box";
import { AnimatePresence } from "framer-motion";

import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* NextAuth provider */}

      <Provider store={store}>
        {/* Redux store provider */}

        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <AnimatePresence>
          <ThemeProvider>
            {/* Theme provider for Material UI */}

            <Background>
              {/* Wrapper for website background */}

              <AlertProvider>
                {/* Wrapper for site alerts */}
                <Layout>
                  {/* Layout component with NavBar */}

                    <Component {...pageProps} />

                  <AlertBox />
                </Layout>
              </AlertProvider>
            </Background>
          </ThemeProvider>
        </AnimatePresence>
      </Provider>
    </SessionProvider>
  );
}

{/* <div className="absolute top-24 left-0 w-full">
<Component {...pageProps} />
</div> */}