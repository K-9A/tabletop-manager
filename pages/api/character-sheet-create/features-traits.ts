import { featsTraitsSchema } from "@/components/validation-schema/character-sheet/feats-traits-schema";
import { ValidationError } from "yup";

export const insertFeatsTraitsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    const transformedData = featsTraitsSchema.validateSync(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    const {
      weapon_proficiency,
      armor_proficiency,
      feats_traits,
      buffs,
      debuffs,
      other_proficiency,
    } = transformedData;
    //Use the validator package to sanitize data for SQL querying
    const sanitizedData = {
      weapon_proficiency: weapon_proficiency,
      armor_proficiency: armor_proficiency,
      feats_traits: feats_traits,
      buffs: buffs,
      debuffs: debuffs,
      other_proficiency: other_proficiency,
    };

    await dbQuery(
      "INSERT INTO feats_traits (character_id, weapon_proficiency, armor_proficiency, feats_traits, buffs, debuffs, other_proficiency) VALUES (?, ?, ?, ?, ?, ?, ?)",
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
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error;
  }
};
