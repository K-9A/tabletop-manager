import { useSelector } from "react-redux";
import { RootState } from "@/store";
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

export const useAllHandleSubmit = () => {
    
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
  const skillsRawData = useSelector(
    (state: RootState) => state.skillsCreate
  );
  const spellsRawData = useSelector(
    (state: RootState) => state.spellsCreate
  );
  const spellSlotsRawData = useSelector(
    (state: RootState) => state.spellSlotsCreate
  );
  const equipmentRawData = useSelector(
    (state: RootState) => state.equipmentCreate
  );
  const itemsRawData = useSelector(
    (state: RootState) => state.itemsCreate
  );


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
  }

}

