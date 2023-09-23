import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";

function AboutPage() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
    >
      <h1> About Page</h1>
    </motion.main>
  );
}

export default AboutPage;
