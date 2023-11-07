import { SkillType } from "@/components/types/sheet-types/field-types";

export const insertSkillsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  const { ...skillsObject } = data;

  //Convert the object with numeric keys into an array of skills.
  const skillsArray: SkillType[] = Object.values(skillsObject);

  //Use the validator package to sanitize data for SQL querying
  const sanitizedSkills = skillsArray.map((skill) => [
    characterId,
    skill.skill_name,
    skill.skill_description,
    skill.skill_cooldown,
    skill.skill_available,
  ]);

  //Doing bulk query insert. Faster than for looping.
  const placeholders = sanitizedSkills.map(() => "(?, ?, ?, ?, ?)").join(", ");

  const query = `INSERT INTO skills (character_id, skill_name, skill_description, skill_cooldown, skill_available) VALUES ${placeholders}`;

  // Flatten the array of arrays to match the number of placeholders
  const values = [].concat(...sanitizedSkills);

  await dbQuery(query, values);
};
