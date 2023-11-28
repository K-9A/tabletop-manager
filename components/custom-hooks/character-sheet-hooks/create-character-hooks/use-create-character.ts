import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getSession } from "next-auth/react";
import { useMemoizedAlert } from "@/components/layout/alert";
import axios from "axios";

//Functions to destructure the data, taking out the unnecessary bits from each subscetion while keeping the necessary fields.
function extractData(obj: any) {

  if (Array.isArray(obj)) {
    return obj;
  } else {
    const { isLoading, isValid, error, ...rest } = obj;

    const hasNestedObjects = Object.values(rest).some(
      (item) => typeof item === "object" && item !== null
    );

    if (hasNestedObjects) {
      const filtered = Object.values(rest).filter(
        (item) => typeof item === "object"
      );

      return filtered;
    } else {
      return rest;
    }
  }
}

//conver the raw list of object to ojbect array needed to split the data up into submission.
//Not all Store data collection will need this, but those that are a collection of things a user can add,
//like skills, spells, items and equipment, will need additional prep before being shipped off to API
function convertRawObjToObjectArray(skillsObj: any): any[] {
  // Extract all the skill objects from the skillsObj
  const dataArray = Object.values(skillsObj).filter(
    (item) => typeof item === "object"
  );

  return dataArray;
}

export const useHandleSubmitAll = (initialData) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  //For the user alert messages
  const addAlertMemo = useMemoizedAlert();

  //Grab all the data from each subsection's slice

  const campaignIdData = useSelector(
    (state: RootState) => state.linkCampaign
  );

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

  //Extract the useful data while ommiting stuff like isLoading and isValid
  const coreProfileData = extractData(coreProfileRawData);
  const featsTraitsData = extractData(featsTraitsRawData);
  const backgroundData = extractData(backgroundRawData);
  const abilityScoresData = extractData(abilityScoresRawData);
  const combatStatsData = extractData(combatStatsRawData);
  const explorationSkillsData = extractData(explorationSkillsRawData);

  const skillsObject = extractData(skillsRawData.skills); //Extract useful data
  const skillsArray = convertRawObjToObjectArray(skillsObject); //Convert Object to Erray

  const spellsObject = extractData(spellsRawData.spells); //Extract useful data
  const spellsArray = convertRawObjToObjectArray(spellsObject); //Convert Object to Erray

  const spellSlotsData = extractData(spellSlotsRawData);

  const equipmentObject = extractData(equipmentRawData.equipment); //Extract useful data
  const equipmentArray = convertRawObjToObjectArray(equipmentObject); //Convert Object to Erray

  const itemsObject = extractData(itemsRawData.items); //Extract useful data
  const itemsArray = convertRawObjToObjectArray(itemsObject); //Convert Object to Erray

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const session: any = await getSession();
    //Grab user id from getSession
    const userId = session.user.id;

    //Submission will be done sequentially by using Database Transactions, meaning that if one thing doesn't go through
    //The rest of the data isn't submitted either and appropriate rollbacks happen
    try {
      const responseCreateCharacterSheet = await axios.post(
        "api/character-create",
        {
          userId: userId,
          campaignId: campaignIdData.campaignId,
          coreProfile: coreProfileData,
          featsTraits: featsTraitsData,
          background: backgroundData,
          abilityScores: abilityScoresData,
          combatStats: combatStatsData,
          explorationSkills: explorationSkillsData,
          skills: skillsArray,
          spells: spellsArray,
          spellSlots: spellSlotsData,
          equipment: equipmentArray,
          items: itemsArray,
        }
      );
      if (!responseCreateCharacterSheet.data.success)
        throw new Error(responseCreateCharacterSheet.data.error);
      addAlertMemo("Character created successfully!", "success");
      return responseCreateCharacterSheet.data;
    } catch (error) {
      setError(error.message);
      // Handle network or other errors

      addAlertMemo(
        "Something went wrong with Character Sheet submission. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    handleSubmit,
  };
};
