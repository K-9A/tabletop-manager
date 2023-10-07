import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createAbilityScoresActions } from "@/store/create-sheet-store/ability-scores-create-slice";
import { RootState, AppDispatch } from "@/store";
import { abilityScoresSchema } from "@/components/character-sheet/validation-schema/ability-scores-schema";


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
      passive_perception: abilityScoresData.passive_perception,
    },
    validationSchema: abilityScoresSchema,
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

  const updatePassivePerception = async () => {
    dispatch(
      createAbilityScoresActions.updateField({
        name: "passive_perception",
        value: formik.values.passive_perception,
      })
    );
  };

  useEffect(() => {
    abilityScoresSchema.isValid(formik.values).then((isValid) => {
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
    updatePassivePerception,
    getErrorMessage: (fieldName: keyof typeof formik.values) =>
      formik.errors[fieldName] && formik.touched[fieldName]
        ? formik.errors[fieldName]
        : null,
  };

};
