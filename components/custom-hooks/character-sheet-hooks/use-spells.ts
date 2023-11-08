import { useEffect } from "react";
import { useFormik, FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createSpellsActions } from "@/store/create-sheet-store/spells-create-slice";
import {
  fetchSpellsData,
  updateSpellsField,
  addSpell,
  removeSpell,
} from "@/store/view-sheet-store/spells-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { spellsSchema } from "@/components/validation-schema/character-sheet/spells-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript

// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";
const MAX_SPELLS = 40; // Set the maximum number of spells allowed

export const useSpells = (
  mode: Mode,
  characterId: string,
  spellId?: number
) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  //Use selector for the create subsection
  const spellsCreateData = useSelector(
    (state: RootState) => state.spellsCreate
  );

  //Use selector for the view subsection
  const spellsViewData = useSelector((state: RootState) => state.spellsView);

  //isValid selector for subcomponents that have the "Mark as Complete" checkbox instead of checking to see if
  //all "required" fields are filled out.
  const isValid = useSelector((state: RootState) => state.spellsCreate.isValid);

  //Fetch data on page load for view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchSpellsData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);



  const createFormik = useFormik({
    initialValues: {
      spells: spellsCreateData.spells,
    },
    validationSchema: spellsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const viewFormik = useFormik({
    initialValues: {
      spells: spellsViewData.spells,
    },
    validationSchema: spellsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });



  //Update create spell field handlers
  const updateCreateField = async (index, fieldName) => {
    const fieldValue = createFormik.values.spells[index][fieldName];
    try {
      await dispatch(
        createSpellsActions.updateSpellsField({
          index: index,
          name: fieldName,
          value: fieldValue,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };

  const updateViewField = async (spellId, fieldName, value) => {
    if (spellId !== undefined) {
      try {
        // Dispatch the updateSpellsField thunk action and unwrap the result
        await dispatch(updateSpellsField({
          spellId,
          characterId,
          fieldName,
          value,
        })as unknown as AnyAction).unwrap();
        // Optionally, show a success message to the user
      } catch (error) {
        // Log the error and show an error message to the user
        console.error("Failed to update field", error);
        addAlertMemo(`Error updating ${fieldName}`, "error");
      }
    } else {
      // Log the error and handle it, such as showing a user-friendly message
      console.error("Spell ID is required to update a spell.");
    }
  };

  //For the create sheet "section complete" checkbox.
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createSpellsActions.markSectionAsValid());
    } else {
      dispatch(createSpellsActions.markSectionAsInvalid());
    }
  };

  const addCreateSpell = () => {
    if (createFormik.values.spells.length >= MAX_SPELLS) {
      // Handle the error case when the maximum number of spells is reached
      addAlertMemo(`You can only add up to ${MAX_SPELLS} spells.`, "error");
      return; // Exit the function to prevent adding a new skill
    }
  
    dispatch(createSpellsActions.addSpell());
  };

  const removeCreateSpell = (index) => {
    dispatch(createSpellsActions.removeSpells(index));
  };

  const addViewSpell = () => {
    if (viewFormik.values.spells.length >= MAX_SPELLS) {
      // Handle the error case when the maximum number of spells is reached
      addAlertMemo(`You can only add up to ${MAX_SPELLS} spells.`, "error");
      return; // Exit the function to prevent adding a new skill
    }
  
    dispatch(addSpell(characterId) as unknown as AnyAction);
  };

  const removeViewSpell = (index) => {
    // Assuming viewFormik.values.spells is an array of spells
    // and each spell has a spell_id property
    const spellId = viewFormik.values.spells[index].spell_id;
  
    if (spellId !== undefined) {
      dispatch(removeSpell({ characterId, spellId }) as unknown as AnyAction)
        .unwrap()
        .then(() => {
          viewFormik.setFieldValue(
            `spells`,
            viewFormik.values.spells.filter((_, i) => i !== index),
            false
          );
        })
        .catch((error) => {
          // Handle error
          addAlertMemo(`Error removing spell: ${error.message}`, "error");
          console.error("Spell ID is required to remove a spell.", error);
        });
    } else {
      addAlertMemo(`Error removing spell.`, "error");
      console.error("Spell ID is required to remove a spell.");
    }
  };

  const resetSpells = () => {
    dispatch(createSpellsActions.resetSpells());
    createFormik.resetForm();
  };


  const getCreateErrorMessage = (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const spellErrors = createFormik.errors.spells as Array<
        FormikErrors<{ spell_name: string }>
      >;
      return spellErrors && spellErrors[index] && spellErrors[index][fieldName]
        ? spellErrors[index][fieldName]
        : null;
    } else {
      return createFormik.errors[fieldName] && createFormik.touched[fieldName]
        ? createFormik.errors[fieldName]
        : null;
    }
  };

  const getViewErrorMessage = (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const spellErrors = viewFormik.errors.spells as Array<
        FormikErrors<{ spell_name: string }>
      >;
      return spellErrors && spellErrors[index] && spellErrors[index][fieldName]
        ? spellErrors[index][fieldName]
        : null;
    } else {
      return viewFormik.errors[fieldName] && viewFormik.touched[fieldName]
        ? viewFormik.errors[fieldName]
        : null;
    }
  };

  return {
    createFormik,
    viewFormik,
    isValid,
    isDarkMode,
    addCreateSpell,
    removeCreateSpell,
    addViewSpell,
    removeViewSpell,
    updateCreateField,
    updateViewField,
    handleCheckboxChange,
    resetSpells,
    getCreateErrorMessage,
    getViewErrorMessage,
  };
};
