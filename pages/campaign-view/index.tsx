import ListCard from "@/components/layout/containers/list-card";
import CampaignList from "@/components/campaign/view-campaign/campaign-list";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

interface CampaignListPageProps {
  session: any;
}

const CampaignListPage: React.FC<CampaignListPageProps> = ({ session }) => {
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
      <ListCard>
        <CampaignList />
        </ListCard>
    </motion.main>
  );
};

export default CampaignListPage;

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
