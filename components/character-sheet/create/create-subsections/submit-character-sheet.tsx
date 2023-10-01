import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

const SubmitCharacterSheet = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="mt-3"
    >
      <Button>Submit Character Sheet</Button>
    </motion.div>
  );
};

export default SubmitCharacterSheet;
