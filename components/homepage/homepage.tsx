import Hero from "@/components/homepage/hero";
import HomeButton from "@/components/homepage/home-button";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMemoizedAlert } from "../layout/alert";
import { useSession } from "next-auth/react";

function HomePage() {
  const { data: session } = useSession();
  const addAlertMemo = useMemoizedAlert();
  const router = useRouter();


  useEffect(() => {
    console.log("Checking logout status:", router.query.loggedOut);

    if (router.query.loggedOut) {
      console.log("Logged out detected");
      addAlertMemo("You have successfully logged out.", "info");
      // Clean up the query string
      router.replace(router.pathname);
    }
  }, [router.query.loggedOut, session]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <div className="py-4">
        <Hero />
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
        {!session ? (
          <>
            <HomeButton text="Login" linkPath="/login" />
            <HomeButton text="Register" linkPath="/register" />
          </>
        ) : (
          <></>
        )}
        <HomeButton text="About" linkPath="/about" />
        <HomeButton text="Test Sheet" linkPath="/character" />
        <HomeButton text="Test Chat" linkPath="/chat" />
      </div>
    </main>
  );
}

export default HomePage;
