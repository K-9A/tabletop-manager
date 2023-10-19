import { abilityScoresSchema } from "@/components/validation-schema/character-sheet/ability-scores-schema";
import validator from "validator";
import { ValidationError } from "yup";

export const insertAbilityScoresData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    await abilityScoresSchema.validate(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }

  const {
    str_score,
    dex_score,
    con_score,
    int_score,
    wis_score,
    chr_score,
    str_mod,
    dex_mod,
    con_mod,
    int_mod,
    wis_mod,
    chr_mod,
    str_save,
    dex_save,
    con_save,
    int_save,
    wis_save,
    chr_save,
    passive_perception,
  } = data;

  //Use the validator package to sanitize data for SQL querying
  const sanitizedData = {
    str_score: validator.escape(str_score),
    dex_score: validator.escape(dex_score),
    con_score: validator.escape(con_score),
    int_score: validator.escape(int_score),
    wis_score: validator.escape(wis_score),
    chr_score: validator.escape(chr_score),
    str_mod: validator.escape(str_mod),
    dex_mod: validator.escape(dex_mod),
    con_mod: validator.escape(con_mod),
    int_mod: validator.escape(int_mod),
    wis_mod: validator.escape(wis_mod),
    chr_mod: validator.escape(chr_mod),
    str_save: validator.escape(str_save),
    dex_save: validator.escape(dex_save),
    con_save: validator.escape(con_save),
    int_save: validator.escape(int_save),
    wis_save: validator.escape(wis_save),
    chr_save: validator.escape(chr_save),
    passive_perception: validator.escape(passive_perception),
  };

  await dbQuery(
    "INSERT INTO ability_scores (character_id, str_score, dex_score, con_score, int_score, wis_score, chr_score, str_mod, dex_mod, con_mod, int_mod, wis_mod, chr_mod, str_save, dex_save, con_save, int_save, wis_save, chr_save, passive_perception) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      characterId,
      sanitizedData.str_score,
      sanitizedData.dex_score,
      sanitizedData.con_score,
      sanitizedData.int_score,
      sanitizedData.wis_score,
      sanitizedData.chr_score,
      sanitizedData.str_mod,
      sanitizedData.dex_mod,
      sanitizedData.con_mod,
      sanitizedData.int_mod,
      sanitizedData.wis_mod,
      sanitizedData.chr_mod,
      sanitizedData.str_save,
      sanitizedData.dex_save,
      sanitizedData.con_save,
      sanitizedData.int_save,
      sanitizedData.wis_save,
      sanitizedData.chr_save,
      sanitizedData.passive_perception,
    ]
  );
};
