import DisplayBox from "@/components/layout/containers/display-box";
import CampaignList from "@/components/campaign/view-campaign/campaign-list";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

interface CreateCampaignPageProps {
  session: any;
}

const CreateCampaignPage: React.FC<CreateCampaignPageProps> = ({ session }) => {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="flex justify-center items-start mt-6"
    >
      <Head>
        <title>Campaign List</title>
        <meta
          name="Campaign List"
          content="Tabletop Manager Campaign List Page"
        />
      </Head>
      <DisplayBox>
        <CampaignList />
      </DisplayBox>
    </motion.main>
  );
};

export default CreateCampaignPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  if (!session) {
    // Redirect logged-in users to the homepage
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
