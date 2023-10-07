import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import AllIsValid from "./submission/use-all-valid";
import { useAllHandleSubmit } from "./submission/use-all-submit";

const SubmitCharacterSheet = (props) => {

  const {
    loading,
    error,
    data,
    handleSubmit
  } = useAllHandleSubmit(props.initialData);

  //Check if all sections re valid
  const { allIsValid } = AllIsValid();
  //purely for debugging
  const alwaysValid = true;


  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={PageFade}
      transition={{ duration: 0.2 }}
      className="mt-3"
    >
      <h1 className="font-bold text-left w-full text-2xl dark:text-white">
        Submit Character Sheet
      </h1>
      <div className="mt-12 flex gap-4 px-4 py-6 rounded-lg border border-blue-gray-100 max-h-[290px] max-w-[860px]">
        <p>
          The character sheet process is done. If all sections are finished, hit
          Submit. If not, button is greyed out.
        </p>
      </div>
      {/*{loading && <Spinner />}*/} {/* Some loading spinner component */}
      <div className="mt-10 flex justify-center">
        <Button
          disabled={!alwaysValid}
          color={alwaysValid ? "green" : "red"}
          onClick={handleSubmit}
        >
          Submit Character Sheet
        </Button>
      </div>
    </motion.div>
  );
};

export default SubmitCharacterSheet;
