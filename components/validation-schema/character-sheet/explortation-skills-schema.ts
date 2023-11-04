import * as Yup from "yup";

const skillTypeError = "Must be a number";
const skillReqError = "Skill required";

interface ExplorationSkillsSchema {
  acrobatics: Yup.NumberSchema;
  animal: Yup.NumberSchema;
  arcana: Yup.NumberSchema;
  athletics: Yup.NumberSchema;
  deception: Yup.NumberSchema;
  history: Yup.NumberSchema;
  insight: Yup.NumberSchema;
  intimidation: Yup.NumberSchema;
  investigation: Yup.NumberSchema;
  medicine: Yup.NumberSchema;
  nature: Yup.NumberSchema;
  perception: Yup.NumberSchema;
  performance: Yup.NumberSchema;
  persuasion: Yup.NumberSchema;
  religion: Yup.NumberSchema;
  sleight: Yup.NumberSchema;
  stealth: Yup.NumberSchema;
  survival: Yup.NumberSchema;
}

export const explorationSkillsRules: ExplorationSkillsSchema = {
  acrobatics: Yup.number().typeError(skillTypeError).required(skillReqError),
  animal: Yup.number().typeError(skillTypeError).required(skillReqError),
  arcana: Yup.number().typeError(skillTypeError).required(skillReqError),
  athletics: Yup.number().typeError(skillTypeError).required(skillReqError),
  deception: Yup.number().typeError(skillTypeError).required(skillReqError),
  history: Yup.number().typeError(skillTypeError).required(skillReqError),
  insight: Yup.number().typeError(skillTypeError).required(skillReqError),
  intimidation: Yup.number().typeError(skillTypeError).required(skillReqError),
  investigation: Yup.number().typeError(skillTypeError).required(skillReqError),
  medicine: Yup.number().typeError(skillTypeError).required(skillReqError),
  nature: Yup.number().typeError(skillTypeError).required(skillReqError),
  perception: Yup.number().typeError(skillTypeError).required(skillReqError),
  performance: Yup.number().typeError(skillTypeError).required(skillReqError),
  persuasion: Yup.number().typeError(skillTypeError).required(skillReqError),
  religion: Yup.number().typeError(skillTypeError).required(skillReqError),
  sleight: Yup.number().typeError(skillTypeError).required(skillReqError),
  stealth: Yup.number().typeError(skillTypeError).required(skillReqError),
  survival: Yup.number().typeError(skillTypeError).required(skillReqError),
};

export const explorationSkillsSchema = Yup.object({ ...explorationSkillsRules });
