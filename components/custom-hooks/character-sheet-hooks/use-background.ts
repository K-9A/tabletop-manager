import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createBackgroundActions } from "@/store/create-sheet-store/background-create-slice";
import {
  updateBackgroundField,
  fetchBackgroundData,
} from "@/store/view-sheet-store/background-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { backgroundSchema } from "@/components/validation-schema/character-sheet/background-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript

// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";

export const useBackground = (mode: Mode, characterId: string) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  //Use selector for the create subsection
  const backgroundCreateData = useSelector(
    (state: RootState) => state.backgroundCreate
  );

  //Use selector for the view subsection
  const backgroundViewData = useSelector(
    (state: RootState) => state.backgroundView
  );

  //iSValid selector for subcomponents that have the "Mark as Complete" checkbox instead of checking to see if
  //all "required" fields are filled out.
  const isValid = useSelector(
    (state: RootState) => state.backgroundCreate.isValid
  );

  //Fetch data on page load foor view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchBackgroundData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);

  const createFormik = useFormik({
    initialValues: {
      personality: backgroundCreateData.personality,
      backstory: backgroundCreateData.backstory,
      bonds: backgroundCreateData.bonds,
      appearance: backgroundCreateData.appearance,
      ideals: backgroundCreateData.ideals,
      flaws: backgroundCreateData.flaws,
      valuables: backgroundCreateData.valuables,
      additional_traits: backgroundCreateData.additional_traits,
    },
    validationSchema: backgroundSchema,
    onSubmit: () => {},
  });

  const viewFormik = useFormik({
    initialValues: {
      personality: backgroundViewData.personality,
      backstory: backgroundViewData.backstory,
      bonds: backgroundViewData.bonds,
      appearance: backgroundViewData.appearance,
      ideals: backgroundViewData.ideals,
      flaws: backgroundViewData.flaws,
      valuables: backgroundViewData.valuables,
      additional_traits: backgroundViewData.additional_traits,
    },
    validationSchema: backgroundSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const updateViewField = async (fieldName, value) => {
    try {
      await dispatch(
        updateBackgroundField({
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
        createBackgroundActions.updateField({
          name: fieldName,
          value,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };

  const resetBackground = () => {
    dispatch(createBackgroundActions.resetBackground());
    createFormik.resetForm();
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createBackgroundActions.markSectionAsValid());
    } else {
      dispatch(createBackgroundActions.markSectionAsInvalid());
    }
  };

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
    isValid,
    updateCreateField,
    updateViewField,
    resetBackground,
    getCreateErrorMessage,
    getViewErrorMessage,
    handleCheckboxChange,
  };
};
