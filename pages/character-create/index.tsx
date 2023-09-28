import SheetForm from "@/components/layout/containers/sheet-box";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";



function CreateCharacterPage() {
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
        <h1>Create Sheet</h1>
      </SheetForm>
    </motion.main>
  );
}

export default CreateCharacterPage;
