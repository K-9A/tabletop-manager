import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createCombatStatsActions } from "@/store/create-sheet-store/combat-stats-create-slice";
import { RootState, AppDispatch } from "@/store";
import { combatStatsSchema } from "@/components/validation-schema/character-sheet/combat-stats-schema";

type CombatStats = {
  current_hp: number;
  max_hp: number;
  temp_hp: number | null;
  armor_class: number;
  hit_dice: number | null;
  max_hit_dice: number;
  speed: number;
  initiative: number;
  inspiration: number | null;
};

export const useCombatStatsCreate = (initialData) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const combatStatsData = useSelector(
    (state: RootState) => state.combatStatsCreate
  );
  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      current_hp: combatStatsData.current_hp,
      max_hp: combatStatsData.max_hp,
      temp_hp: combatStatsData.temp_hp,
      armor_class: combatStatsData.armor_class,
      hit_dice: combatStatsData.hit_dice,
      max_hit_dice: combatStatsData.max_hit_dice,
      speed: combatStatsData.speed,
      initiative: combatStatsData.initiative,
      inspiration: combatStatsData.inspiration,
      spell_casting: combatStatsData.spell_casting,
      spell_save: combatStatsData.spell_save,
      spell_attack: combatStatsData.spell_attack,
    },
    validationSchema: combatStatsSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updateCurrentHP = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "current_hp",
        value: formik.values.current_hp,
      })
    );
  };

  const updateMaxHP = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "max_hp",
        value: formik.values.max_hp,
      })
    );
  };

  const updateTempHP = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "temp_hp",
        value: formik.values.temp_hp,
      })
    );
  };

  const updateArmorClass = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "armor_class",
        value: formik.values.armor_class,
      })
    );
  };

  const updateHitDice = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "hit_dice",
        value: formik.values.hit_dice,
      })
    );
  };

  const updateMaxHitDice = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "max_hit_dice",
        value: formik.values.max_hit_dice,
      })
    );
  };

  const updateSpeed = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "speed",
        value: formik.values.speed,
      })
    );
  };

  const updateInitiative = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "initiative",
        value: formik.values.initiative,
      })
    );
  };

  const updateInspiration = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "inspiration",
        value: formik.values.inspiration,
      })
    );
  };

  const updateSpellCasting = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "spell_casting",
        value: formik.values.spell_casting,
      })
    );
  };

  const updateSpellSave = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "spell_save",
        value: formik.values.spell_save,
      })
    );
  };

  const updateSpellAttack = async () => {
    dispatch(
      createCombatStatsActions.updateField({
        name: "spell_attack",
        value: formik.values.spell_attack,
      })
    );
  };



  useEffect(() => {
    combatStatsSchema.isValid(formik.values).then((isValid) => {
      dispatch(createCombatStatsActions.setValidity(isValid));
    });
  }, [formik.values, dispatch]);

  return {
    ...formik,
    isDarkMode,
    updateCurrentHP,
    updateMaxHP,
    updateTempHP,
    updateArmorClass,
    updateHitDice,
    updateMaxHitDice,
    updateSpeed,
    updateInitiative,
    updateInspiration,
    updateSpellCasting,
    updateSpellSave,
    updateSpellAttack,
    getErrorMessage: (fieldName: keyof typeof formik.values) =>
      formik.errors[fieldName] && formik.touched[fieldName]
        ? formik.errors[fieldName]
        : null,
  };
};
