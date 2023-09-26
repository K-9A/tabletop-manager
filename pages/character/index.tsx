import CharacterSheet from "@/components/character-sheet/character-sheet";
import SheetForm from "@/components/layout/containers/sheet-box";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

function CharacterPage() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="flex justify-center items-start mt-10"
    >
      <SheetForm>
        <CharacterSheet />
      </SheetForm>
    </motion.main>
  );
}

export default CharacterPage;
