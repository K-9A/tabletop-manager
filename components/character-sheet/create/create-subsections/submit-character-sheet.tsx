import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PageFade } from "@/components/animations/page-fade";
import AllIsValid from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-all-valid";
import { useHandleSubmitAll } from "../../../custom-hooks/character-sheet-hooks/create-character-hooks/use-create-character";
import { useAbilityScoresCreate } from "../../../custom-hooks/character-sheet-hooks/use-ability-scores-create";
import { useBackgroundCreate } from "@/components/custom-hooks/character-sheet-hooks/use-background-create";
import { useCombatStatsCreate } from "@/components/custom-hooks/character-sheet-hooks/use-combat-stats-create";
import { useCoreProfileCreate } from "@/components/custom-hooks/character-sheet-hooks/use-core-profile-create";
import { useEquipmentCreate } from "@/components/custom-hooks/character-sheet-hooks/use-equipment-create";
import { useExplorationSkillsCreate } from "@/components/custom-hooks/character-sheet-hooks/use-exploration-skills-create";
import { useFeatsTraitsCreate } from "@/components/custom-hooks/character-sheet-hooks/use-feats-traits-create";
import { useItemsCreate } from "@/components/custom-hooks/character-sheet-hooks/use-items-create";
import { useSkillsCreate } from "@/components/custom-hooks/character-sheet-hooks/use-skills-create";
import { useSpellSlotsCreate } from "@/components/custom-hooks/character-sheet-hooks/use-spell-slots-create";
import { useSpellsCreate } from "@/components/custom-hooks/character-sheet-hooks/use-spells-create";


const SubmitCharacterSheet = (props) => {

  const {
    resetAbilityScores
  } = useAbilityScoresCreate(props.initialData);

  const {
    resetBackground
  } = useBackgroundCreate(props.initialData);

  const {
    resetCombatStats
  } = useCombatStatsCreate(props.initialData);

  const {
    resetCoreProfile
  } = useCoreProfileCreate(props.initialData);

  const {
    resetEquipment
  } = useEquipmentCreate(props.initialData);

  const {
    resetExplorationSkills
  } = useExplorationSkillsCreate(props.initialData);

  const {
    resetFeatsTraits
  } = useFeatsTraitsCreate(props.initialData);

  const {
    resetItems
  } = useItemsCreate(props.initialData);

  const {
    resetSkills
  } = useSkillsCreate(props.initialData);

  const {
    resetSpellSlots
  } = useSpellSlotsCreate(props.initialData);

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
      //Wait for handle submit to run
      await handleSubmit();
      //Programatically reroute user to character view list while also
      //reseting all the formik data and redux slice data
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
      router.push("/character-view");

    } catch (err) {
      // handle the error, maybe show a message to the user
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
