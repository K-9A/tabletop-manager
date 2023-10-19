import { combatStatsSchema } from "@/components/validation-schema/character-sheet/combat-stats-schema";
import validator from "validator";
import { ValidationError } from "yup";

export const insertCombatStatsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    await combatStatsSchema.validate(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }

  // Extract data
  const {
    current_hp,
    max_hp,
    temp_hp,
    armor_class,
    hit_dice,
    max_hit_dice,
    speed,
    initiative,
    inspiration,
    spell_casting,
    spell_save,
    spell_attack,
  } = data;

  //Use the validator package to sanitize data for SQL querying
  const sanitizedData = {
    current_hp: validator.escape(current_hp),
    max_hp: validator.escape(max_hp),
    temp_hp: validator.escape(temp_hp),
    armor_class: validator.escape(armor_class),
    hit_dice: validator.escape(hit_dice),
    max_hit_dice: validator.escape(max_hit_dice),
    speed: validator.escape(speed),
    initiative: validator.escape(initiative),
    inspiration: validator.escape(inspiration),
    spell_casting: validator.escape(spell_casting),
    spell_save: validator.escape(spell_save),
    spell_attack: validator.escape(spell_attack),
  };

  await dbQuery(
    "INSERT INTO combat_stats (character_id, current_hp, max_hp, temp_hp, armor_class, hit_dice, max_hit_dice, speed, initiative, inspiration, spell_casting, spell_save, spell_attack) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      characterId,
      sanitizedData.current_hp,
      sanitizedData.max_hp,
      sanitizedData.temp_hp,
      sanitizedData.armor_class,
      sanitizedData.hit_dice,
      sanitizedData.max_hit_dice,
      sanitizedData.speed,
      sanitizedData.initiative,
      sanitizedData.inspiration,
      sanitizedData.spell_casting,
      sanitizedData.spell_save,
      sanitizedData.spell_attack,
    ]
  );
};
