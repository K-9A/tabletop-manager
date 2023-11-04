import * as Yup from "yup";

const scoreTypeError = "Score must be a number";
const scoreReqError = "Score required";
const modTypeError = "Mod must be a number";
const modReqError = "Mod required";
const saveTypeError = "Save must be a number";
const saveReqError = "Save required";

interface AbilityScoresSchema {
  str_score: Yup.NumberSchema;
  dex_score: Yup.NumberSchema;
  con_score: Yup.NumberSchema;
  int_score: Yup.NumberSchema;
  wis_score: Yup.NumberSchema;
  chr_score: Yup.NumberSchema;
  str_mod: Yup.NumberSchema;
  dex_mod: Yup.NumberSchema;
  con_mod: Yup.NumberSchema;
  int_mod: Yup.NumberSchema;
  wis_mod: Yup.NumberSchema;
  chr_mod: Yup.NumberSchema;
  str_save: Yup.NumberSchema;
  dex_save: Yup.NumberSchema;
  con_save: Yup.NumberSchema;
  int_save: Yup.NumberSchema;
  wis_save: Yup.NumberSchema;
  chr_save: Yup.NumberSchema;
  passive_perception: Yup.NumberSchema;
}

export const abilityScoresRules: AbilityScoresSchema = {
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
};

export const abilityScoresSchema = Yup.object({ ...abilityScoresRules });