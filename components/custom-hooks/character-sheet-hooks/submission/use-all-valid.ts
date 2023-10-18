import { useSelector } from "react-redux";
import { RootState } from "@/store";

//This helper file checks if all subsectons in character sheet create are valid
const AllIsValid = () => {
  //Grab all isValid from each subsection's slice
  const coreProfileIsValid = useSelector(
    (state: RootState) => state.coreProfileCreate.isValid
  );
  const featsTraitsIsValid = useSelector(
    (state: RootState) => state.featsTraitsCreate.isValid
  );
  const backgroundIsValid = useSelector(
    (state: RootState) => state.backgroundCreate.isValid
  );
  const abilityScoresIsValid = useSelector(
    (state: RootState) => state.abilityScoresCreate.isValid
  );
  const combatStatsIsValid = useSelector(
    (state: RootState) => state.combatStatsCreate.isValid
  );
  const explorationSkillsIsValid = useSelector(
    (state: RootState) => state.explorationSkillsCreate.isValid
  );
  const skillsIsValid = useSelector(
    (state: RootState) => state.skillsCreate.isValid
  );
  const spellsIsValid = useSelector(
    (state: RootState) => state.spellsCreate.isValid
  );
  const spellSlotsIsValid = useSelector(
    (state: RootState) => state.spellSlotsCreate.isValid
  );
  const equipmentIsValid = useSelector(
    (state: RootState) => state.equipmentCreate.isValid
  );
  const itemsIsValid = useSelector(
    (state: RootState) => state.itemsCreate.isValid
  );

  //Combine all the isValid statements into one true or false variable.
  const allSectionsValid =
    coreProfileIsValid &&
    featsTraitsIsValid &&
    backgroundIsValid &&
    abilityScoresIsValid &&
    combatStatsIsValid &&
    explorationSkillsIsValid &&
    skillsIsValid &&
    spellsIsValid &&
    spellSlotsIsValid &&
    equipmentIsValid &&
    itemsIsValid;

  return { allIsValid: allSectionsValid };
};

export default AllIsValid;
