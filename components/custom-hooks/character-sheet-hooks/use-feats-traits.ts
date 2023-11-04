import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createFeatsTraitsActions } from "@/store/create-sheet-store/feats-traits-create-slice";
import { updateFeatsTraitsField, fetchFeatsTraitsData } from "@/store/view-sheet-store/feats-traits-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { featsTraitsSchema } from "@/components/validation-schema/character-sheet/feats-traits-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript


// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";

export const useFeatsTraits = (mode: Mode, characterId: string) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();


  //Use selector for the create subsection
  const featsTraitsCreateData = useSelector(
    (state: RootState) => state.featsTraitsCreate
  );

  //Use selector for the view subsection
  const featsTraitsViewData = useSelector(
    (state: RootState) => state.featsTraitsView
  );

  //iSValid selector for subcomponents that have the "Mark as Complete" checkbox instead of checking to see if
  //all "required" fields are filled out.
  const isValid = useSelector(
    (state: RootState) => state.featsTraitsCreate.isValid
  );


    //Fetch data on page load foor view component
    useEffect(() => {
      // Only fetch data if in 'view' mode and a characterId is provided
      if (mode === "view" && characterId) {
        dispatch(fetchFeatsTraitsData(characterId) as unknown as AnyAction);
      }
    }, [dispatch, characterId, mode]);


  const createFormik = useFormik({
    initialValues: {
      feats_traits: featsTraitsCreateData.feats_traits,
      weapon_proficiency: featsTraitsCreateData.weapon_proficiency,
      armor_proficiency: featsTraitsCreateData.armor_proficiency,
      buffs: featsTraitsCreateData.buffs,
      debuffs: featsTraitsCreateData.debuffs,
      other_proficiency: featsTraitsCreateData.other_proficiency,
    },
    validationSchema: featsTraitsSchema,
    onSubmit: () => {},
  });

  const viewFormik = useFormik({
    initialValues: {
      feats_traits: featsTraitsViewData.feats_traits,
      weapon_proficiency: featsTraitsViewData.weapon_proficiency,
      armor_proficiency: featsTraitsViewData.armor_proficiency,
      buffs: featsTraitsViewData.buffs,
      debuffs: featsTraitsViewData.debuffs,
      other_proficiency: featsTraitsViewData.other_proficiency,
    },
    validationSchema: featsTraitsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const updateViewField = async (fieldName, value) => {
    try {
      await dispatch(
        updateFeatsTraitsField({
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
        createFeatsTraitsActions.updateField({
          name: fieldName,
          value,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };


  const resetFeatsTraits = () => {
    dispatch(createFeatsTraitsActions.resetFeatsTraits());
    createFormik.resetForm();
  };


  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createFeatsTraitsActions.markSectionAsValid());
    } else {
      dispatch(createFeatsTraitsActions.markSectionAsInvalid());
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

  return{
    createFormik,
    viewFormik,
    isDarkMode,
    isValid,
    updateCreateField,
    updateViewField,
    resetFeatsTraits,
    getCreateErrorMessage,
    getViewErrorMessage,
    handleCheckboxChange,
  }

};
