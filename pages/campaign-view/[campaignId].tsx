import CreateSheetForm from "@/components/layout/containers/create-sheet-box";
import CampaignView from "@/components/campaign/view-campaign/campaign-view";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

interface CampaignViewPageProps {
  campaignId: string;
}

const CampaignViewPage: React.FC<CampaignViewPageProps> = ({ campaignId }) => {
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
        <meta name="Campaign List" content="Tabletop Manager Campaign View" />
      </Head>
      <CreateSheetForm>
        <CampaignView campaignId={campaignId} />
      </CreateSheetForm>
    </motion.main>
  );
};

export default CampaignViewPage;

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

  const campaignId = context.params?.campaignId as string;

  console.log(campaignId)

  return {
    props: { campaignId },
  };
}
