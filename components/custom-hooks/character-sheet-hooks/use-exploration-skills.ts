import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createExplorationSkillsActions } from "@/store/create-sheet-store/exploration-skills-create-slice";
import { updateExplorationSkillsField, fetchExplorationSkillsData } from "@/store/view-sheet-store/exploration-skills-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { explorationSkillsSchema } from "@/components/validation-schema/character-sheet/explortation-skills-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript

// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";

export const useExplorationSkills = (mode: Mode, characterId: string) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

    //Use selector for the create subsection
    const explorationSkillsCreateData = useSelector(
      (state: RootState) => state.explorationSkillsCreate
    );
  
    //Use selector for the view subsection
    const explorationSkillsViewData = useSelector(
      (state: RootState) => state.explorationSkillsView
    );


  //Fetch data on page load foor view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchExplorationSkillsData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);


  const createFormik = useFormik({
    initialValues: {
      acrobatics: explorationSkillsCreateData.acrobatics,
      animal: explorationSkillsCreateData.animal,
      arcana: explorationSkillsCreateData.arcana,
      athletics: explorationSkillsCreateData.athletics,
      deception: explorationSkillsCreateData.deception,
      history: explorationSkillsCreateData.history,
      insight: explorationSkillsCreateData.insight,
      intimidation: explorationSkillsCreateData.intimidation,
      investigation: explorationSkillsCreateData.investigation,
      medicine: explorationSkillsCreateData.medicine,
      nature: explorationSkillsCreateData.nature,
      perception: explorationSkillsCreateData.perception,
      performance: explorationSkillsCreateData.performance,
      persuasion: explorationSkillsCreateData.persuasion,
      religion: explorationSkillsCreateData.religion,
      sleight: explorationSkillsCreateData.sleight,
      stealth: explorationSkillsCreateData.stealth,
      survival: explorationSkillsCreateData.survival,
    },
    validationSchema: explorationSkillsSchema,
    onSubmit: () => {},
  });

  const viewFormik = useFormik({
    initialValues: {
      acrobatics: explorationSkillsViewData.acrobatics,
      animal: explorationSkillsViewData.animal,
      arcana: explorationSkillsViewData.arcana,
      athletics: explorationSkillsViewData.athletics,
      deception: explorationSkillsViewData.deception,
      history: explorationSkillsViewData.history,
      insight: explorationSkillsViewData.insight,
      intimidation: explorationSkillsViewData.intimidation,
      investigation: explorationSkillsViewData.investigation,
      medicine: explorationSkillsViewData.medicine,
      nature: explorationSkillsViewData.nature,
      perception: explorationSkillsViewData.perception,
      performance: explorationSkillsViewData.performance,
      persuasion: explorationSkillsViewData.persuasion,
      religion: explorationSkillsViewData.religion,
      sleight: explorationSkillsViewData.sleight,
      stealth: explorationSkillsViewData.stealth,
      survival: explorationSkillsViewData.survival,
    },
    validationSchema: explorationSkillsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const updateViewField = async (fieldName, value) => {
    try {
      await dispatch(
        updateExplorationSkillsField({
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
        createExplorationSkillsActions.updateField({
          name: fieldName,
          value,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };

  const resetExplorationSkills = () => {
    dispatch(createExplorationSkillsActions.resetExplorationSkills());
    createFormik.resetForm();
  };

  //Is Valid useEffect
  useEffect(() => {
    if (mode === "create") {
      explorationSkillsSchema.isValid(createFormik.values).then((isValid) => {
        dispatch(createExplorationSkillsActions.setValidity(isValid));
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
        resetExplorationSkills,
        getCreateErrorMessage,
        getViewErrorMessage,
      };
};
