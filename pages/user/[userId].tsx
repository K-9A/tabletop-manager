import DisplayBox from "@/components/layout/containers/display-box";
import Dashboard from "@/components/dashboard/dashboard";
import { UserStaticProps } from "@/components/types/dash-types";
import axios from "axios";
import { Session } from "next-auth"; //For typescripting
import { GetServerSidePropsContext } from "next";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

type MySession = Session & {
  user: UserStaticProps["user"];
};

function DashboardPage({ user }: UserStaticProps) {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="flex justify-center items-start mt-6"
    >
      <DisplayBox>
        <Dashboard user={user} />
      </DisplayBox>
    </motion.main>
  );
}

export default DashboardPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = (await getSession(context)) as MySession;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // If the user is NOT logged in, redirect to the homepage or login page
  if (!session || !session.user || !session.user.id) {
    return {
      redirect: {
        destination: "/login", // redirect to login if user isn't logged in
        permanent: false,
      },
    };
  }

  // For logged-in users, fetch their data
  const userId = session.user.id;
  const { data: user } = await axios.get(`${apiUrl}/api/user/${userId}`);

  return {
    props: {
      user,
    },
  };
}
