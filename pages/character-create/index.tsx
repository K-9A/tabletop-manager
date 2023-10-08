import CreateSheetForm from "@/components/layout/containers/create-sheet-box";
import CharacterSheetCreate from "@/components/character-sheet/create/character-sheet-create";
import { GetServerSidePropsContext } from "next";
import { getSession } from 'next-auth/react';
import { motion } from "framer-motion";

function CreateCharacterPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-3"
    >
      <CreateSheetForm>
        <CharacterSheetCreate />
      </CreateSheetForm>
    </motion.main>
  );
}

export default CreateCharacterPage;

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
