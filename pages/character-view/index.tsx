import ListCard from "@/components/layout/containers/list-card";
import CharacterList from "@/components/character-sheet/view/character-sheet-list";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

interface CharacterListPageProps {
  session: any;
}

const CharacterListPage: React.FC<CharacterListPageProps> = ({ session }) => {
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
        <meta
          name="Character List"
          content="Tabletop Manager Character List Page"
        />
      </Head>
      <ListCard>
        <CharacterList />
      </ListCard>
    </motion.main>
  );
};

export default CharacterListPage;

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
