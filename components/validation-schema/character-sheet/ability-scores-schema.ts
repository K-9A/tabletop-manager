import * as Yup from "yup";

const scoreTypeError = "Score must be a number";
const scoreReqError = "Score required";
const modTypeError = "Modifier must be a number";
const modReqError = "Modifier required";
const saveTypeError = "Saving Throw must be a number";
const saveReqError = "Saving Throw required";

export const abilityScoresSchema = Yup.object({
  str_score: Yup.number().typeError(scoreTypeError).required(scoreReqError),
  dex_score: Yup.number().typeError(scoreTypeError).required(scoreReqError),
  con_score: Yup.number().typeError(scoreTypeError).required(scoreReqError),
  int_score: Yup.number().typeError(scoreTypeError).required(scoreReqError),
  wis_score: Yup.number().typeError(scoreTypeError).required(scoreReqError),
  chr_score: Yup.number().typeError(scoreTypeError).required(scoreReqError),
  str_mod: Yup.number().typeError(modTypeError).required(modReqError),
  dex_mod: Yup.number().typeError(modTypeError).required(modReqError),
  con_mod: Yup.number().typeError(modTypeError).required(modReqError),
  int_mod: Yup.number().typeError(modTypeError).required(modReqError),
  wis_mod: Yup.number().typeError(modTypeError).required(modReqError),
  chr_mod: Yup.number().typeError(modTypeError).required(modReqError),
  str_save: Yup.number().typeError(saveTypeError).required(saveReqError),
  dex_save: Yup.number().typeError(saveTypeError).required(saveReqError),
  con_save: Yup.number().typeError(saveTypeError).required(saveReqError),
  int_save: Yup.number().typeError(saveTypeError).required(saveReqError),
  wis_save: Yup.number().typeError(saveTypeError).required(saveReqError),
  chr_save: Yup.number().typeError(saveTypeError).required(saveReqError),
  passive_perception: Yup.number()
    .typeError("Perception must be a number")
    .required("Perception is required"),
});