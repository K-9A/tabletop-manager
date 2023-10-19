import validator from "validator";
import { SkillTypes } from "@/components/types/api-route-types";

export const insertSkillsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  const { ...skillsObject } = data;

  //Convert the object with numeric keys into an array of skills.
  const skillsArray: SkillTypes[] = Object.values(skillsObject);

  //Use the validator package to sanitize data for SQL querying
  const sanitizedSkills = skillsArray.map((skill) => [
    characterId,
    validator.escape(skill.skill_name),
    validator.escape(skill.skill_description),
    validator.escape(skill.skill_cooldown),
    validator.escape(skill.skill_available),
  ]);

  //Doing bulk query insert. Faster than for looping.
  const placeholders = sanitizedSkills.map(() => "(?, ?, ?, ?, ?)").join(", ");

  const query = `INSERT INTO skills (character_id, skill_name, skill_description, skill_cooldown, skill_available) VALUES ${placeholders}`;

  // Flatten the array of arrays to match the number of placeholders
  const values = [].concat(...sanitizedSkills);

  await dbQuery(query, values);
};
