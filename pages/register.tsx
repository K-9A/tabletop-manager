import Register from "@/components/register";
import DisplayBox from "@/components/layout/containers/display-box";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

function RegisterPage() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="flex justify-center items-start mt-10"
    >
      <DisplayBox>
      <Head>
        <title>Register</title>
        <meta
          name="Register Page"
          content="Tabletop Manager Register Page"
        />
      </Head>
        <Register />
      </DisplayBox>
    </motion.main>
  );
}

export default RegisterPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    // Redirect logged-in users to the homepage
    return {
      redirect: {
        destination: "/", // Adjust to your desired path
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Props are returned as an empty object because they aren't necessary
  };
}
