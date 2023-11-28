import { Fragment } from "react";
import Hero from "@/components/homepage/hero";
import HomeButton from "@/components/homepage/home-button";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMemoizedAlert } from "../layout/alert";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";


function HomePage() {
  const { data: session } = useSession();
  const addAlertMemo = useMemoizedAlert();
  const router = useRouter();

  useEffect(() => {
    if (router.query.loggedOut) {
      console.log("Logged out detected");
      addAlertMemo("You have successfully logged out.", "info");
      // Clean up the query string
      router.replace(router.pathname);
    }
  }, [router.query.loggedOut, session]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4">
        <Hero />
      </div>
      <HomeButton text="About" linkPath="/about" />
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
        {!session ? (
          <Fragment>
            <HomeButton text="Login" linkPath="/login" />
            <HomeButton text="Register" linkPath="/register" />
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
      {/* <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
        <HomeButton text="Test Chat" linkPath="/chat" />
      </div> */}
    </motion.main>
  );
}

export default HomePage;
