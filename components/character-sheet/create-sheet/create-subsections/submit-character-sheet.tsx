import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import AllIsValid from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-all-valid";
import { useHandleSubmitAll } from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-create-character";
import { useAbilityScores } from "../../../custom-hooks/character-sheet-hooks/use-ability-scores";
import { useBackground } from "@/components/custom-hooks/character-sheet-hooks/use-background";
import { useCombatStats } from "@/components/custom-hooks/character-sheet-hooks/use-combat-stats";
import { useCoreProfile } from "@/components/custom-hooks/character-sheet-hooks/use-core-profile";
import { useEquipmentCreate } from "@/components/custom-hooks/character-sheet-hooks/create-character-hooks/use-equipment-create";
import { useExplorationSkills } from "@/components/custom-hooks/character-sheet-hooks/use-exploration-skills";
import { useFeatsTraits } from "@/components/custom-hooks/character-sheet-hooks/use-feats-traits";
import { useItemsCreate } from "@/components/custom-hooks/character-sheet-hooks/create-character-hooks/use-items-create";
import { useSkillsCreate } from "@/components/custom-hooks/character-sheet-hooks/create-character-hooks/use-skills-create";
import { useSpellSlots } from "@/components/custom-hooks/character-sheet-hooks/use-spell-slots";
import { useSpellsCreate } from "@/components/custom-hooks/character-sheet-hooks/create-character-hooks/use-spells-create";


const SubmitCharacterSheet = (props) => {

  const {
    resetAbilityScores
  } = useAbilityScores('create',props.initialData);

  const {
    resetBackground
  } = useBackground('create',props.initialData);

  const {
    resetCombatStats
  } = useCombatStats('create',props.initialData);

  const {
    resetCoreProfile
  } = useCoreProfile('create',props.initialData);

  const {
    resetEquipment
  } = useEquipmentCreate(props.initialData);

  const {
    resetExplorationSkills
  } = useExplorationSkills('create',props.initialData);

  const {
    resetFeatsTraits
  } = useFeatsTraits('create',props.initialData);

  const {
    resetItems
  } = useItemsCreate(props.initialData);

  const {
    resetSkills
  } = useSkillsCreate(props.initialData);

  const {
    resetSpellSlots
  } = useSpellSlots('create',props.initialData);

  const {
    resetSpells
  } = useSpellsCreate(props.initialData);


  const { loading, error, handleSubmit } = useHandleSubmitAll(
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
