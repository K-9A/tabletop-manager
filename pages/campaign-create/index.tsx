import CreateSheetForm from "@/components/layout/containers/create-sheet-box";
import CampaignCreate from "@/components/campaign/create-campaign/create-campaign-form";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { motion } from "framer-motion";

interface CreateCampaignPageProps {
  session: any;
}

const CreateCampaignPage: React.FC<CreateCampaignPageProps> = ({ session }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-3"
    >
      <Head>
        <title>Create Campaign</title>
        <meta
          name="Create Campaign"
          content="Tabletop Manager Create Campaign Page"
        />
      </Head>
      <CreateSheetForm>
        <CampaignCreate />
      </CreateSheetForm>
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
