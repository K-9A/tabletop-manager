import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createAbilityScoresActions } from "@/store/create-sheet-store/ability-scores-create-slice";
import { updateAbilityScoresField, fetchAbilityScoresData } from "@/store/view-sheet-store/ability-scores-view-slice";
import { RootState, AppDispatch } from "@/store";
import { abilityScoresSchema } from "@/components/validation-schema/character-sheet/ability-scores-schema";
import { useMemoizedAlert } from "@/components/layout/alert";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript


// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";

export const useAbilityScores = (mode: Mode, characterId: string) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  //Use selector for the create subsection
  const abilityScoresCreateData = useSelector(
    (state: RootState) => state.abilityScoresCreate
  );

  //Use selector for the view subsection
  const abilityScoresViewData = useSelector(
    (state: RootState) => state.abilityScoresView
  );


  //Fetch data on page load foor view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchAbilityScoresData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);


  const createFormik = useFormik({
    initialValues: {
      str_score: abilityScoresCreateData.str_score,
      dex_score: abilityScoresCreateData.dex_score,
      con_score: abilityScoresCreateData.con_score,
      int_score: abilityScoresCreateData.int_score,
      wis_score: abilityScoresCreateData.wis_score,
      chr_score: abilityScoresCreateData.chr_score,
      str_mod: abilityScoresCreateData.str_mod,
      dex_mod: abilityScoresCreateData.dex_mod,
      con_mod: abilityScoresCreateData.con_mod,
      int_mod: abilityScoresCreateData.int_mod,
      wis_mod: abilityScoresCreateData.wis_mod,
      chr_mod: abilityScoresCreateData.chr_mod,
      str_save: abilityScoresCreateData.str_save,
      dex_save: abilityScoresCreateData.dex_save,
      con_save: abilityScoresCreateData.con_save,
      int_save: abilityScoresCreateData.int_save,
      wis_save: abilityScoresCreateData.wis_save,
      chr_save: abilityScoresCreateData.chr_save,
      passive_perception: abilityScoresCreateData.passive_perception,
    },
    validationSchema: abilityScoresSchema,
    onSubmit: () => {},
  });

  const viewFormik = useFormik({
    initialValues: {
      str_score: abilityScoresViewData.str_score,
      dex_score: abilityScoresViewData.dex_score,
      con_score: abilityScoresViewData.con_score,
      int_score: abilityScoresViewData.int_score,
      wis_score: abilityScoresViewData.wis_score,
      chr_score: abilityScoresViewData.chr_score,
      str_mod: abilityScoresViewData.str_mod,
      dex_mod: abilityScoresViewData.dex_mod,
      con_mod: abilityScoresViewData.con_mod,
      int_mod: abilityScoresViewData.int_mod,
      wis_mod: abilityScoresViewData.wis_mod,
      chr_mod: abilityScoresViewData.chr_mod,
      str_save: abilityScoresViewData.str_save,
      dex_save: abilityScoresViewData.dex_save,
      con_save: abilityScoresViewData.con_save,
      int_save: abilityScoresViewData.int_save,
      wis_save: abilityScoresViewData.wis_save,
      chr_save: abilityScoresViewData.chr_save,
      passive_perception: abilityScoresViewData.passive_perception,
    },
    validationSchema: abilityScoresSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });


  const updateViewField = async (fieldName, value) => {
    try {
      await dispatch(
        updateAbilityScoresField({
          characterId,
          fieldName,
          value,
        }) as unknown as AnyAction
      ).unwrap();
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };

  const updateCreateField = async (fieldName: string, value: any) => {
    try {
      await dispatch(
        createAbilityScoresActions.updateField({
          name: fieldName,
          value,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };


  const resetAbilityScores = () => {
    dispatch(createAbilityScoresActions.resetAbilityScores());
    createFormik.resetForm();
  };

  //Is Valid useEffect
  useEffect(() => {
    if (mode === "create") {
      abilityScoresSchema.isValid(createFormik.values).then((isValid) => {
        dispatch(createAbilityScoresActions.setValidity(isValid));
      });
    }
  }, [createFormik.values, dispatch, mode]);

    //Error message for create and view sheet pages
    const getCreateErrorMessage = (fieldName: keyof typeof createFormik.values) =>
    createFormik.errors[fieldName] && createFormik.touched[fieldName]
      ? createFormik.errors[fieldName]
      : null;

  const getViewErrorMessage = (fieldName: keyof typeof viewFormik.values) =>
    viewFormik.errors[fieldName] && viewFormik.touched[fieldName]
      ? viewFormik.errors[fieldName]
      : null;


      return {
        createFormik,
        viewFormik,
        isDarkMode,
        updateCreateField,
        updateViewField,
        resetAbilityScores,
        getCreateErrorMessage,
        getViewErrorMessage,
      };

};
