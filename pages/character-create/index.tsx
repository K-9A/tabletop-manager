import CreateSheetForm from "@/components/layout/containers/create-sheet-box";
import CharacterSheetCreate from "@/components/character-sheet/create/character-sheet-create";
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
