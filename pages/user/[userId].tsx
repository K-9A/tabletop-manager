import DisplayBox from "@/components/layout/containers/display-box";
import Dashboard from "@/components/dashboard/dashboard";
import Head from "next/head";
import { UserStaticProps } from "@/components/types/dash-types";
import { Session } from "next-auth"; //For typescripting
import { GetServerSidePropsContext } from "next";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { getSession } from "next-auth/react";

function DashboardPage() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="flex justify-center items-start"
    >
            <Head>
        <title>Your Dashboard</title>
        <meta name="Dashboard" content="Tabletop Manager Dashboard Page" />
      </Head>
      <DisplayBox>
        <Dashboard />
      </DisplayBox>
    </motion.main>
  );
}

export default DashboardPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = (await getSession(context));


  if (!session) {
    // Redirect logged-in users to the homepage
    return {
      redirect: {
        destination: "/login", // redirect to login if user isn't logged in
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Props are returned as an empty object because they aren't necessary
  };
}
