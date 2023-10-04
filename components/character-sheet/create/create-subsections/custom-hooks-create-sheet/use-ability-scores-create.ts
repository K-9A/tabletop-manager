import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createAbilityScoresActions } from "@/store/create-sheet-store/ability-scores-create-slice";
import { RootState, AppDispatch } from "@/store";

const scoreTypeError = "Score must be a number";
const scoreReqError = "Score required";
const modTypeError = "Modifier must be a number";
const modReqError = "Modifier required";
const saveTypeError = "Saving Throw must be a number";
const saveReqError = "Saving Throw required";

const validationSchema = Yup.object({
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
  perception: Yup.number()
    .typeError("Perception must be a number")
    .required("Perception is required"),
});

export const useAbilityScoresCreate = (initialData) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const abilityScoresData = useSelector(
    (state: RootState) => state.abilityScoresCreate
  );

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      str_score: abilityScoresData.str_score,
      dex_score: abilityScoresData.dex_score,
      con_score: abilityScoresData.con_score,
      int_score: abilityScoresData.int_score,
      wis_score: abilityScoresData.wis_score,
      chr_score: abilityScoresData.chr_score,
      str_mod: abilityScoresData.str_mod,
      dex_mod: abilityScoresData.dex_mod,
      con_mod: abilityScoresData.con_mod,
      int_mod: abilityScoresData.int_mod,
      wis_mod: abilityScoresData.wis_mod,
      chr_mod: abilityScoresData.chr_mod,
      str_save: abilityScoresData.str_save,
      dex_save: abilityScoresData.dex_save,
      con_save: abilityScoresData.con_save,
      int_save: abilityScoresData.int_save,
      wis_save: abilityScoresData.wis_save,
      chr_save: abilityScoresData.chr_save,
      perception: abilityScoresData.perception,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updateStrScore = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "str_score",
        value: formik.values.str_score,
      })
    );
  };

  const updateDexScore = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "dex_score",
        value: formik.values.dex_score,
      })
    );
  };

  const updateConScore = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "con_score",
        value: formik.values.con_score,
      })
    );
  };

  const updateIntScore = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "int_score",
        value: formik.values.int_score,
      })
    );
  };

  const updateWisScore = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "wis_score",
        value: formik.values.wis_score,
      })
    );
  };

  const updateChrScore = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "chr_score",
        value: formik.values.chr_score,
      })
    );
  };


  const updateStrMod = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "str_mod",
        value: formik.values.str_mod,
      })
    );
  };

  const updateDexMod = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "dex_mod",
        value: formik.values.dex_mod,
      })
    );
  };

  const updateConMod = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "con_mod",
        value: formik.values.con_mod,
      })
    );
  };

  const updateIntMod = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "int_mod",
        value: formik.values.int_mod,
      })
    );
  };

  const updateWisMod = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "wis_mod",
        value: formik.values.wis_mod,
      })
    );
  };

  const updateChrMod = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "chr_mod",
        value: formik.values.chr_mod,
      })
    );
  };


  const updateStrSave = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "str_save",
        value: formik.values.str_save,
      })
    );
  };

  const updateDexSave = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "dex_save",
        value: formik.values.dex_save,
      })
    );
  };

  const updateConSave = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "con_save",
        value: formik.values.con_save,
      })
    );
  };

  const updateIntSave = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "int_save",
        value: formik.values.int_save,
      })
    );
  };

  const updateWisSave = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "wis_save",
        value: formik.values.wis_save,
      })
    );
  };

  const updateChrSave = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "chr_save",
        value: formik.values.chr_save,
      })
    );
  };

  const updatePerception = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "perception",
        value: formik.values.perception,
      })
    );
  };

  useEffect(() => {
    validationSchema.isValid(formik.values).then((isValid) => {
      dispatch(createAbilityScoresActions.setValidity(isValid));
    });
  }, [formik.values, dispatch]);


  return {
    ...formik,
    isDarkMode,
    updateStrScore,
    updateDexScore,
    updateConScore,
    updateIntScore,
    updateWisScore,
    updateChrScore,
    updateStrMod,
    updateDexMod,
    updateConMod,
    updateIntMod,
    updateWisMod,
    updateChrMod,
    updateStrSave,
    updateDexSave,
    updateConSave,
    updateIntSave,
    updateWisSave,
    updateChrSave,
    updatePerception,
    getErrorMessage: (fieldName: keyof typeof formik.values) =>
      formik.errors[fieldName] && formik.touched[fieldName]
        ? formik.errors[fieldName]
        : null,
  };

};
