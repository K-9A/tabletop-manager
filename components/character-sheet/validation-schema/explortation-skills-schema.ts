import * as Yup from "yup";

const skillTypeError = "Skill must be a number";
const skillReqError = "Skill required";

export const explorationSkillsSchema = Yup.object({
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
});