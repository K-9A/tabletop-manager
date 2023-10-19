import validator from "validator";
import { SpellTypes } from "@/components/types/api-route-types";

export const insertSpellsData = async (
  data,
  characterId,
  dbQuery: Function
) => {

  const { ...spellsObject } = data;

  //Convert the object with numeric keys into an array of skills.
  const spellsArray: SpellTypes[] = Object.values(spellsObject);

  //Use the validator package to sanitize data for SQL querying
  const sanitizedSpells = spellsArray.map((spell) => [
    characterId,
    validator.escape(spell.spell_name),
    validator.escape(spell.spell_description),
    validator.escape(spell.spell_tier),
  ]);

  //Doing bulk query insert. Faster than for looping.
  const placeholders = sanitizedSpells.map(() => "(?, ?, ?, ?)").join(", ");

  const query = `INSERT INTO spells (character_id, spell_name, spell_description, spell_tier) VALUES ${placeholders}`;

  // Flatten the array of arrays to match the number of placeholders
  const values = [].concat(...sanitizedSpells);

  await dbQuery(query, values);
};
