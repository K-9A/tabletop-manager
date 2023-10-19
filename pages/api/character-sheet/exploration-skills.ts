import { explorationSkillsSchema } from "@/components/validation-schema/character-sheet/explortation-skills-schema";
import validator from "validator";
import { ValidationError } from "yup";

export const insertExplorationSkillsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    await explorationSkillsSchema.validate(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }

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
  } = data;

  //Use the validator package to sanitize data for SQL querying
  const sanitizedData = {
    acrobatics: validator.escape(acrobatics),
    animal: validator.escape(animal),
    arcana: validator.escape(arcana),
    athletics: validator.escape(athletics),
    deception: validator.escape(deception),
    history: validator.escape(history),
    insight: validator.escape(insight),
    intimidation: validator.escape(intimidation),
    investigation: validator.escape(investigation),
    medicine: validator.escape(medicine),
    nature: validator.escape(nature),
    perception: validator.escape(perception),
    performance: validator.escape(performance),
    persuasion: validator.escape(persuasion),
    religion: validator.escape(religion),
    sleight: validator.escape(sleight),
    stealth: validator.escape(stealth),
    survival: validator.escape(survival),
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
};
