import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createCombatStatsActions } from "@/store/create-sheet-store/combat-stats-create-slice";
import { updateCombatStatsField, fetchCombatStatsData } from "@/store/view-sheet-store/combat-stats-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { combatStatsSchema } from "@/components/validation-schema/character-sheet/combat-stats-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript


// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";

export const useCombatStats = (mode: Mode, characterId: string) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  //Use selector for the create subsection
  const combatStatsCreateData = useSelector(
    (state: RootState) => state.combatStatsCreate
  );

  //Use selector for the view subsection
  const combatStatsViewData = useSelector(
    (state: RootState) => state.combatStatsView
  );

    //Fetch data on page load foor view component
    useEffect(() => {
      // Only fetch data if in 'view' mode and a characterId is provided
      if (mode === "view" && characterId) {
        dispatch(fetchCombatStatsData(characterId) as unknown as AnyAction);
      }
    }, [dispatch, characterId, mode]);
  

  const createFormik = useFormik({
    initialValues: {
      current_hp: combatStatsCreateData.current_hp,
      max_hp: combatStatsCreateData.max_hp,
      temp_hp: combatStatsCreateData.temp_hp,
      armor_class: combatStatsCreateData.armor_class,
      hit_dice: combatStatsCreateData.hit_dice,
      max_hit_dice: combatStatsCreateData.max_hit_dice,
      speed: combatStatsCreateData.speed,
      initiative: combatStatsCreateData.initiative,
      inspiration: combatStatsCreateData.inspiration,
      spell_casting: combatStatsCreateData.spell_casting,
      spell_save: combatStatsCreateData.spell_save,
      spell_attack: combatStatsCreateData.spell_attack,
    },
    validationSchema: combatStatsSchema,
    onSubmit: () => {},
  });


  const viewFormik = useFormik({
    initialValues: {
      current_hp: combatStatsViewData.current_hp,
      max_hp: combatStatsViewData.max_hp,
      temp_hp: combatStatsViewData.temp_hp,
      armor_class: combatStatsViewData.armor_class,
      hit_dice: combatStatsViewData.hit_dice,
      max_hit_dice: combatStatsViewData.max_hit_dice,
      speed: combatStatsViewData.speed,
      initiative: combatStatsViewData.initiative,
      inspiration: combatStatsViewData.inspiration,
      spell_casting: combatStatsViewData.spell_casting,
      spell_save: combatStatsViewData.spell_save,
      spell_attack: combatStatsViewData.spell_attack,
    },
    validationSchema: combatStatsSchema,
    onSubmit: () => {},
  });


  const updateViewField = async (fieldName, value) => {
    try {
      await dispatch(
        updateCombatStatsField({
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
        createCombatStatsActions.updateField({
          name: fieldName,
          value,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };

  const resetCombatStats = () => {
    dispatch(createCombatStatsActions.resetCombatStats());
    createFormik.resetForm();
  };

  //Is Valid useEffect
  useEffect(() => {
    if (mode === "create") {
      combatStatsSchema.isValid(createFormik.values).then((isValid) => {
        dispatch(createCombatStatsActions.setValidity(isValid));
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
    resetCombatStats,
    getCreateErrorMessage,
    getViewErrorMessage,
  };
};
