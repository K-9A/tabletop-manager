import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import { Spinner } from "@material-tailwind/react";
import AllIsValid from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-all-valid";

import { useHandleSubmitAll } from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-create-character";
import { useAbilityScores } from "../../../custom-hooks/character-sheet-hooks/use-ability-scores";
import { useBackground } from "@/components/custom-hooks/character-sheet-hooks/use-background";
import { useCombatStats } from "@/components/custom-hooks/character-sheet-hooks/use-combat-stats";
import { useCoreProfile } from "@/components/custom-hooks/character-sheet-hooks/use-core-profile";
import { useEquipment } from "@/components/custom-hooks/character-sheet-hooks/use-equipment";
import { useExplorationSkills } from "@/components/custom-hooks/character-sheet-hooks/use-exploration-skills";
import { useFeatsTraits } from "@/components/custom-hooks/character-sheet-hooks/use-feats-traits";
import { useItems } from "@/components/custom-hooks/character-sheet-hooks/use-items";
import { useSkills } from "@/components/custom-hooks/character-sheet-hooks/use-skills";
import { useSpellSlots } from "@/components/custom-hooks/character-sheet-hooks/use-spell-slots";
import { useSpells } from "@/components/custom-hooks/character-sheet-hooks/use-spells";

import LinkCampaign from "./link-campaign";


const SubmitCharacterSheet = (props) => {
  const { resetAbilityScores } = useAbilityScores("create", props.initialData);
  const { resetBackground } = useBackground("create", props.initialData);
  const { resetCombatStats } = useCombatStats("create", props.initialData);
  const { resetCoreProfile } = useCoreProfile("create", props.initialData);
  const { resetEquipment } = useEquipment("create", props.initialData);
  const { resetExplorationSkills } = useExplorationSkills(
    "create",
    props.initialData
  );

  const { resetFeatsTraits } = useFeatsTraits("create", props.initialData);
  const { resetItems } = useItems("create", props.initialData);
  const { resetSkills } = useSkills("create", props.initialData);
  const { resetSpellSlots } = useSpellSlots("create", props.initialData);
  const { resetSpells } = useSpells("create", props.initialData);
  const { isLoading, error, handleSubmit } = useHandleSubmitAll(
    props.initialData
  );

  //Check if all sections are valid
  const { allIsValid } = AllIsValid();

  const router = useRouter();

  const handleSubmission = async () => {
    try {
      // Wait for handleSubmit to run and check for its success
      const submitResult = await handleSubmit();
      // Assuming handleSubmit returns a truthy value on success
      if (submitResult) {
        // Reset all the formik data and redux slice data

        resetAbilityScores();
        resetBackground();
        resetCombatStats();
        resetCoreProfile();
        resetEquipment();
        resetExplorationSkills();
        resetFeatsTraits();
        resetItems();
        resetSkills();
        resetSpellSlots();
        resetSpells();

        // Programmatically reroute user to character view list
        router.push("/character-view");
      }
    } catch (err) {
      // Handle the error, maybe show a message to the user
      console.error("Submission failed:", err);
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
      <div className="mt-8 gap-4 px-4 py-6 rounded-lg border border-blue-gray-100">
        <LinkCampaign />
      </div>
      <div className="mt-8 flex gap-4 px-4 py-6 rounded-lg border border-blue-gray-100 dark:text-gray-200">
        <p>
          The character sheet process is done. If all sections are finished, the 
          button will turn form red to green and you may submit your sheet.
        </p>
      </div>
      {/*{loading && <Spinner />}*/} {/* Some loading spinner component */}
      <div className="mt-5 flex justify-center">
        <Button
          disabled={!allIsValid || isLoading}
          color={allIsValid ? "green" : "red"}
          onClick={handleSubmission}
        >
          {isLoading ? "Submitting Sheet...": "Submit Character Sheet"}
          Submit Character Sheet
        </Button>
      </div>
    </motion.div>
  );
};

export default SubmitCharacterSheet;
