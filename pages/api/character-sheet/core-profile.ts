import validator from "validator";
import { coreProfileSchema } from "@/components/validation-schema/character-sheet/core-profile-schema";
import { ValidationError } from "yup";


export const insertCoreProfileData = async (data, characterId, dbQuery: Function) => {
  const {
    name,
    char_class,
    race,
    proficiency,
    char_level,
    experience,
    next_level,
    affinity,
  } = data;

  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    await coreProfileSchema.validate(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }

  //Use the validator package to sanitize data for SQL querying
  const sanitizedData = {
    name: validator.escape(name),
    char_class: validator.escape(char_class),
    race: validator.escape(race),
    proficiency: validator.escape(proficiency),
    char_level: validator.escape(char_level),
    experience: validator.escape(experience),
    next_level: validator.escape(next_level),
    affinity: validator.escape(affinity),
  };

  await dbQuery(
    "INSERT INTO core_profile (character_id, character_name, race, class, affinity, proficiency, char_level, current_exp, next_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      characterId,
      sanitizedData.name,
      sanitizedData.race,
      sanitizedData.char_class,
      sanitizedData.affinity,
      sanitizedData.proficiency,
      sanitizedData.char_level,
      sanitizedData.experience,
      sanitizedData.next_level,
    ]
  );
};
