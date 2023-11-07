import * as Yup from "yup";

interface SkillsSchema {
  skill_name: Yup.StringSchema;
  skill_description: Yup.StringSchema;
  skill_cooldown: Yup.StringSchema;
  skill_available: Yup.StringSchema;
}

export const skillsRules: SkillsSchema = {
  skill_name: Yup.string().notRequired(),
  skill_description: Yup.string().notRequired(),
  skill_cooldown: Yup.string().notRequired(),
  skill_available: Yup.string().notRequired(),
};

export const skillsSchema = Yup.object({ ...skillsRules });