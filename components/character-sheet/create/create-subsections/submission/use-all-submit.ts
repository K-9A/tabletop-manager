import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getSession } from "next-auth/react";
import preparePayload from "@/components/helper/prepare-payload";
import axios from "axios";

//Functions to destructure the data, taking out the unnecessary bits from each subscetion while keeping the necessary fields.
function extractData(obj: any) {
  if (Array.isArray(obj)) {
    // If the passed object is an array, return it directly
    return obj;
  } else {
    // If the passed object is not an array, destructure and exclude unwanted properties
    const { loading, isValid, error, ...rest } = obj;
    return rest;
  }
}

export const useAllHandleSubmit = (initialData) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  //Grab all the data from each subsection's slice
  const coreProfileRawData = useSelector(
    (state: RootState) => state.coreProfileCreate
  );
  const featsTraitsRawData = useSelector(
    (state: RootState) => state.featsTraitsCreate
  );
  const backgroundRawData = useSelector(
    (state: RootState) => state.backgroundCreate
  );
  const abilityScoresRawData = useSelector(
    (state: RootState) => state.abilityScoresCreate
  );
  const combatStatsRawData = useSelector(
    (state: RootState) => state.combatStatsCreate
  );
  const explorationSkillsRawData = useSelector(
    (state: RootState) => state.explorationSkillsCreate
  );
  const skillsRawData = useSelector((state: RootState) => state.skillsCreate);
  const spellsRawData = useSelector((state: RootState) => state.spellsCreate);
  const spellSlotsRawData = useSelector(
    (state: RootState) => state.spellSlotsCreate
  );
  const equipmentRawData = useSelector(
    (state: RootState) => state.equipmentCreate
  );
  const itemsRawData = useSelector((state: RootState) => state.itemsCreate);

  //Extract the useful data
  const coreProfileData = extractData(coreProfileRawData);
  const featsTraitsData = extractData(featsTraitsRawData);
  const backgroundData = extractData(backgroundRawData);
  const abilityScoresData = extractData(abilityScoresRawData);
  const combatStatsData = extractData(combatStatsRawData);
  const explorationSkillsData = extractData(explorationSkillsRawData);
  const skillsData = extractData(skillsRawData.skills);
  const spellsData = extractData(spellsRawData.spells);
  const spellSlotsData = extractData(spellSlotsRawData);
  const equipmentData = extractData(equipmentRawData.equipment);
  const itemsData = extractData(itemsRawData.items);

  //Bundle all the data.
  // const combinedData = {
  //   ...coreProfileData,
  //   ...featsTraitsData,
  //   ...backgroundData,
  //   ...abilityScoresData,
  //   ...combatStatsData,
  //   ...explorationSkillsData,
  //   ...skillsData,
  //   ...spellsData,
  //   ...spellSlotsData,
  //   ...equipmentData,
  //   ...itemsData,
  // };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const session = await getSession();
    //Grab user id from getSession
    const userId = session.user.id;

    //Submission will be done sequentially
    try {
      //First create a parent table to house all the subsection table and create their links:

      // const responseCreateCharacterSheet = await axios.post(
      //   "api/character-sheet/parent-sheet",
      //   { userId: userId }
      // );
      // if (!responseCreateCharacterSheet.data.success)
      //   throw new Error(responseCreateCharacterSheet.data.error);

      // After the parent table data is created a new character sheet ID is made via auto increment, grab said
      // Id for the subsequent API insertions for the subsections

      //const characterId = responseCreateCharacterSheet.data.characterId;
      const characterId = 2;

      const coreProfilePayload = preparePayload(coreProfileData, characterId);
      const featsTraitsPayload = preparePayload(featsTraitsData, characterId);
      const backgroundPayload = preparePayload(backgroundData, characterId);
      const abilityScoresPayload = preparePayload(
        abilityScoresData,
        characterId
      );
      const combatStatsPayload = preparePayload(combatStatsData, characterId);
      const explorationSkillsPayload = preparePayload(
        explorationSkillsData,
        characterId
      );
      const skillsPayload = preparePayload(skillsData, characterId);

      //This is for the subsection submissions themselves

      // const responseCoreProfileCreate = await axios.post(
      //   "api/character-sheet/core-profile",
      //   coreProfilePayload
      // );
      // if (!responseCoreProfileCreate.data.success)
      //   throw new Error(responseCoreProfileCreate.data.error);

      // const responseFeatsTraitsCreate = await axios.post(
      //   "api/character-sheet/features-traits",
      //   featsTraitsPayload
      // );
      // if (!responseFeatsTraitsCreate.data.success)
      //   throw new Error(responseFeatsTraitsCreate.data.error);

      // const responseBackgroundCreate = await axios.post(
      //   "api/character-sheet/background",
      //   backgroundPayload
      // );
      // if (!responseBackgroundCreate.data.success)
      //   throw new Error(responseBackgroundCreate.data.error);

      // const responseAbilityScoresCreate = await axios.post(
      //   "api/character-sheet/ability-scores",
      //   abilityScoresPayload
      // );
      // if (!responseAbilityScoresCreate.data.success)
      //   throw new Error(responseAbilityScoresCreate.data.error);

      // const responseCombatStatsCreate = await axios.post(
      //   "api/character-sheet/combat-stats",
      //   combatStatsPayload
      // );
      // if (!responseCombatStatsCreate.data.success)
      //   throw new Error(responseCombatStatsCreate.data.error);

      // const responseExplorationSkillsCreate = await axios.post(
      //   "api/character-sheet/exploration-skills",
      //   explorationSkillsPayload
      // );
      // if (!responseExplorationSkillsCreate.data.success)
      //   throw new Error(responseExplorationSkillsCreate.data.error);


      const responseSkillsCreate = await axios.post(
        "api/character-sheet/exploration-skills",
        skillsPayload
      );
      if (!responseSkillsCreate.data.success)
        throw new Error(responseSkillsCreate.data.error);

        
      //setData(combinedData);
    } catch (error) {
      setError(error.message);
      // Handle network or other errors
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    handleSubmit,
  };
};
