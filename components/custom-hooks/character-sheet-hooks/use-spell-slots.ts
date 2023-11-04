import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createSpellSlotsActions } from "@/store/create-sheet-store/spell-slots-create-slice";
import { updateSpellSlotsField, fetchSpellSlotsData } from "@/store/view-sheet-store/spell-slots-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { spellSlotsSchema } from "@/components/validation-schema/character-sheet/spell-slots-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript

// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";

export const useSpellSlots = (mode: Mode, characterId: string) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();


  //Use selector for the create subsection
  const spellSlotsCreateData = useSelector(
    (state: RootState) => state.spellSlotsCreate
  );

  //Use selector for the view subsection
  const spellSlotsViewData = useSelector(
    (state: RootState) => state.spellSlotsView
  );

    //iSValid selector for subcomponents that have the "Mark as Complete" checkbox instead of checking to see if
  //all "required" fields are filled out.
  const isValid = useSelector(
    (state: RootState) => state.spellSlotsCreate.isValid
  );

  //Fetch data on page load foor view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchSpellSlotsData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);


  const createFormik = useFormik({
    initialValues: {
      first_available: spellSlotsCreateData.first_available,
      first_max: spellSlotsCreateData.first_max,
      second_available: spellSlotsCreateData.second_available,
      second_max: spellSlotsCreateData.second_max,
      third_available: spellSlotsCreateData.third_available,
      third_max: spellSlotsCreateData.third_max,
      fourth_available: spellSlotsCreateData.fourth_available,
      fourth_max: spellSlotsCreateData.fourth_max,
      fifth_available: spellSlotsCreateData.fifth_available,
      fifth_max: spellSlotsCreateData.fifth_max,
      sixth_available: spellSlotsCreateData.sixth_available,
      sixth_max: spellSlotsCreateData.sixth_max,
      seventh_available: spellSlotsCreateData.seventh_available,
      seventh_max: spellSlotsCreateData.seventh_max,
      eighth_available: spellSlotsCreateData.eighth_available,
      eighth_max: spellSlotsCreateData.eighth_max,
      nineth_available: spellSlotsCreateData.nineth_available,
      nineth_max: spellSlotsCreateData.nineth_max,
    },
    validationSchema: spellSlotsSchema,
    onSubmit: () => {},
  });

  const viewFormik = useFormik({
    initialValues: {
      first_available: spellSlotsViewData.first_available,
      first_max: spellSlotsViewData.first_max,
      second_available: spellSlotsViewData.second_available,
      second_max: spellSlotsViewData.second_max,
      third_available: spellSlotsViewData.third_available,
      third_max: spellSlotsViewData.third_max,
      fourth_available: spellSlotsViewData.fourth_available,
      fourth_max: spellSlotsViewData.fourth_max,
      fifth_available: spellSlotsViewData.fifth_available,
      fifth_max: spellSlotsViewData.fifth_max,
      sixth_available: spellSlotsViewData.sixth_available,
      sixth_max: spellSlotsViewData.sixth_max,
      seventh_available: spellSlotsViewData.seventh_available,
      seventh_max: spellSlotsViewData.seventh_max,
      eighth_available: spellSlotsViewData.eighth_available,
      eighth_max: spellSlotsViewData.eighth_max,
      nineth_available: spellSlotsViewData.nineth_available,
      nineth_max: spellSlotsViewData.nineth_max,
    },
    validationSchema: spellSlotsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });


  const updateViewField = async (fieldName, value) => {
    try {
      await dispatch(
        updateSpellSlotsField({
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
        createSpellSlotsActions.updateField({
          name: fieldName,
          value,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };


  const resetSpellSlots = () => {
    dispatch(createSpellSlotsActions.resetSpellSlots());
    createFormik.resetForm();
  };


  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createSpellSlotsActions.markSectionAsValid());
    } else {
      dispatch(createSpellSlotsActions.markSectionAsInvalid());
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
    resetSpellSlots,
    getCreateErrorMessage,
    getViewErrorMessage,
    handleCheckboxChange,
  };
};