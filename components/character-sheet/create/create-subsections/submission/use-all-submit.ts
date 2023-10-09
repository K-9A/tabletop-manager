import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getSession } from "next-auth/react";
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
  const combinedData = {
    ...coreProfileData,
    ...featsTraitsData,
    ...backgroundData,
    ...abilityScoresData,
    ...combatStatsData,
    ...explorationSkillsData,
    ...skillsData,
    ...spellsData,
    ...spellSlotsData,
    ...equipmentData,
    ...itemsData,
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const session = await getSession();
    //Grab user id from getSession
    const userId = session.user.id;
    //Send it as a header to the APIs
    const userIdHeader = { headers: { 'x-user-id': userId}};



    //Submission will be done sequentially
    try {
      const responseCoreProfileCreate = await axios.post(
        "api/character-sheet-create/core-profile-create",
        coreProfileData, userIdHeader
      );
      if (!responseCoreProfileCreate.data.success)
        throw new Error(responseCoreProfileCreate.data.error);

      //const responseCoreProfileCreate = await axios.post('/api/character-sheet-create/create', combinedData);
      //if (!responseCoreProfileCreate.data.success) throw new Error(responseCoreProfileCreate.data.error);

      setData(responseCoreProfileCreate);
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
