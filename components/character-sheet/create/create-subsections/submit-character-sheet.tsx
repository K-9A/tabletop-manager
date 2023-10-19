import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import AllIsValid from "../../../custom-hooks/character-sheet-hooks/submission/use-all-valid";
import { useAllHandleSubmit } from "../../../custom-hooks/character-sheet-hooks/submission/use-all-submit";

const SubmitCharacterSheet = (props) => {
  const { loading, error, handleSubmit } = useAllHandleSubmit(
    props.initialData
  );

  //Check if all sections re valid
  const { allIsValid } = AllIsValid();

  const router = useRouter();

  const handleSubmission = async () => {
    try {
        await handleSubmit();
        router.push('/character-view');
    } catch (err) {
        // handle the error, maybe show a message to the user
    }
};

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
            disabled={!allIsValid}
            color={allIsValid ? "green" : "red"}
            onClick={handleSubmission}
          >
            Submit Character Sheet
          </Button>
      </div>
    </motion.div>
  );
};

export default SubmitCharacterSheet;
