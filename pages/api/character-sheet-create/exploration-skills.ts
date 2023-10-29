import { explorationSkillsSchema } from "@/components/validation-schema/character-sheet/explortation-skills-schema";
import { ValidationError } from "yup";

export const insertExplorationSkillsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    const transformedData = explorationSkillsSchema.validateSync(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    // Extract data
    const {
      acrobatics,
      animal,
      arcana,
      athletics,
      deception,
      history,
      insight,
      intimidation,
      investigation,
      medicine,
      nature,
      perception,
      performance,
      persuasion,
      religion,
      sleight,
      stealth,
      survival,
    } = transformedData;

    //Use the validator package to sanitize data for SQL querying
    const sanitizedData = {
      acrobatics: acrobatics,
      animal: animal,
      arcana: arcana,
      athletics: athletics,
      deception: deception,
      history: history,
      insight: insight,
      intimidation: intimidation,
      investigation: investigation,
      medicine: medicine,
      nature: nature,
      perception: perception,
      performance: performance,
      persuasion: persuasion,
      religion: religion,
      sleight: sleight,
      stealth: stealth,
      survival: survival,
    };

    await dbQuery(
      "INSERT INTO exploration_skills (character_id, acrobatics, animal, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleight, stealth, survival) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        characterId,
        sanitizedData.acrobatics,
        sanitizedData.animal,
        sanitizedData.arcana,
        sanitizedData.athletics,
        sanitizedData.deception,
        sanitizedData.history,
        sanitizedData.insight,
        sanitizedData.intimidation,
        sanitizedData.investigation,
        sanitizedData.medicine,
        sanitizedData.nature,
        sanitizedData.perception,
        sanitizedData.performance,
        sanitizedData.persuasion,
        sanitizedData.religion,
        sanitizedData.sleight,
        sanitizedData.stealth,
        sanitizedData.survival,
      ]
    );
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }
};
