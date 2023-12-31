import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createCoreProfileActions } from "@/store/create-sheet-store/core-profile-create-slice";
import {
  updateCoreProfileField,
  fetchCoreProfileData,
} from "@/store/view-sheet-store/core-profile-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { coreProfileSchema } from "@/components/validation-schema/character-sheet/core-profile-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript

// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";

export const useCoreProfile = (mode: Mode, characterId: string) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  //Use selector for the create subsection
  const coreProfileCreateData = useSelector(
    (state: RootState) => state.coreProfileCreate
  );

  //Use selector for the view subsection
  const coreProfileViewData = useSelector(
    (state: RootState) => state.coreProfileView
  );

  //Fetch data on page load foor view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchCoreProfileData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);

  const createFormik = useFormik({
    initialValues: {
      character_name: coreProfileCreateData.character_name,
      char_class: coreProfileCreateData.char_class,
      race: coreProfileCreateData.race,
      proficiency: coreProfileCreateData.proficiency,
      char_level: coreProfileCreateData.char_level,
      experience: coreProfileCreateData.experience,
      next_level: coreProfileCreateData.next_level,
      affinity: coreProfileCreateData.affinity,
    },
    validationSchema: coreProfileSchema,
    onSubmit: () => {},
  });

  const viewFormik = useFormik({
    initialValues: {
      character_name: coreProfileViewData.character_name,
      char_class: coreProfileViewData.char_class,
      race: coreProfileViewData.race,
      proficiency: coreProfileViewData.proficiency,
      char_level: coreProfileViewData.char_level,
      experience: coreProfileViewData.experience,
      next_level: coreProfileViewData.next_level,
      affinity: coreProfileViewData.affinity,
    },
    validationSchema: coreProfileSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const updateViewField = async (fieldName, value) => {
    try {
      await dispatch(
        updateCoreProfileField({
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
        createCoreProfileActions.updateField({
          name: fieldName,
          value,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };

  const resetCoreProfile = () => {
    dispatch(createCoreProfileActions.resetCoreProfile());
    createFormik.resetForm();
  };

  //Is Valid useEffect
  useEffect(() => {
    if (mode === "create") {
      coreProfileSchema.isValid(createFormik.values).then((isValid) => {
        dispatch(createCoreProfileActions.setValidity(isValid));
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
    resetCoreProfile,
    getCreateErrorMessage,
    getViewErrorMessage,
  };
};
