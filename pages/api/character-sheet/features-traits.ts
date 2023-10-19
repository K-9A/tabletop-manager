import { featsTraitsSchema } from "@/components/validation-schema/character-sheet/feats-traits-schema";
import validator from "validator";
import { ValidationError } from "yup";

export const insertFeatsTraitsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    await featsTraitsSchema.validate(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }

  // Extract data
  const {
    weapon_proficiency,
    armor_proficiency,
    feats_traits,
    buffs,
    debuffs,
    other_proficiency,
  } = data;

  //Use the validator package to sanitize data for SQL querying
  const sanitizedData = {
    weapon_proficiency: validator.escape(weapon_proficiency),
    armor_proficiency: validator.escape(armor_proficiency),
    feats_traits: validator.escape(feats_traits),
    buffs: validator.escape(buffs),
    debuffs: validator.escape(debuffs),
    other_proficiency: validator.escape(other_proficiency),
  };

  await dbQuery(
    "INSERT INTO feats_traits (character_id, weapon_proficiency, armor_proficiency, features_traits, buffs, debuffs, other_proficiency) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      characterId,
      sanitizedData.weapon_proficiency,
      sanitizedData.armor_proficiency,
      sanitizedData.feats_traits,
      sanitizedData.buffs,
      sanitizedData.debuffs,
      sanitizedData.other_proficiency,
    ]
  );
};
