import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import DisplayForm from "@/components/layout/containers/display-box";
import About from "@/components/about/about";
import Head from "next/head";

function AboutPage() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
    >
      <Head>
        <title>About</title>
        <meta name="About Page" content="Tabletop Manager About Page" />
      </Head>
      <DisplayForm>
        <About />
      </DisplayForm>
    </motion.main>
  );
}

export default AboutPage;
