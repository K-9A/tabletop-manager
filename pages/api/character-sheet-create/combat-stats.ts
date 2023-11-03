import { combatStatsSchema } from "@/components/validation-schema/character-sheet/combat-stats-schema";
import { ValidationError } from "yup";

export const insertCombatStatsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    const transformedData = combatStatsSchema.validateSync(data, {
      abortEarly: false,
      stripUnknown: true,
    });

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
  } = transformedData as {
    current_hp?: number;
    max_hp?: number;
    temp_hp?: number;
    armor_class?: number;
    hit_dice?: number;
    max_hit_dice?: number;
    speed?: number;
    initiative?: number;
    inspiration?: number;
    spell_casting?: string;
    spell_save?: number;
    spell_attack?: number;
  };
  

  //Use the validator package to sanitize data for SQL querying
  const sanitizedData = {
    current_hp: current_hp,
    max_hp: max_hp,
    temp_hp: temp_hp,
    armor_class: armor_class,
    hit_dice: hit_dice,
    max_hit_dice: max_hit_dice,
    speed: speed,
    initiative: initiative,
    inspiration: inspiration,
    spell_casting: spell_casting,
    spell_save: spell_save,
    spell_attack: spell_attack,
  };

  await dbQuery(
    "INSERT INTO combat_stats (character_id, current_hp, max_hp, temp_hp, armor_class, hit_dice, max_hit_dice, speed, initiative, inspiration, spell_casting, spell_save, spell_attack) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      characterId,
      sanitizedData.current_hp,
      sanitizedData.max_hp,
      sanitizedData.temp_hp,
      sanitizedData.armor_class,
      sanitizedData.hit_dice || 0,
      sanitizedData.max_hit_dice,
      sanitizedData.speed,
      sanitizedData.initiative,
      sanitizedData.inspiration,
      sanitizedData.spell_casting,
      sanitizedData.spell_save,
      sanitizedData.spell_attack,
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