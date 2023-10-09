import CreateSheetForm from "@/components/layout/containers/create-sheet-box";
import CharacterSheetCreate from "@/components/character-sheet/create/character-sheet-create";
import { GetServerSidePropsContext } from "next";
import { getSession } from 'next-auth/react';
import { motion } from "framer-motion";

interface CreateCharacterPageProps {
  session: any; // You can replace 'any' with the appropriate type for your session object
}

const CreateCharacterPage: React.FC<CreateCharacterPageProps> = ({ session }) => {
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
