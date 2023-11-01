import CharacterSheet from "@/components/character-sheet/view-sheet/character-sheet-view";
import SheetForm from "@/components/layout/containers/sheet-box";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

interface CharacterViewPageProps {
  characterId: string;
}

const CharacterViewPage: React.FC<CharacterViewPageProps> = ({ characterId }) => {
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
        <title>Character List</title>
        <meta name="Campaign List" content="Tabletop Manager Campaign View" />
      </Head>
      <SheetForm>
        <CharacterSheet characterId={characterId} />
      </SheetForm>
    </motion.main>
  );
};


export default CharacterViewPage;

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

  const characterId = context.params?.characterId as string;

  return {
    props: { characterId },
  };
}
