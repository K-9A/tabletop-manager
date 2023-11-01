import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createExplorationSkillsActions } from "@/store/create-sheet-store/exploration-skills-create-slice";
import { RootState, AppDispatch } from "@/store";
import { explorationSkillsSchema } from "@/components/validation-schema/character-sheet/explortation-skills-schema";


export const useExplorationSkillsCreate = (initialData) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const explorationSkillsData = useSelector(
    (state: RootState) => state.explorationSkillsCreate
  );

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      acrobatics: explorationSkillsData.acrobatics,
      animal: explorationSkillsData.animal,
      arcana: explorationSkillsData.arcana,
      athletics: explorationSkillsData.athletics,
      deception: explorationSkillsData.deception,
      history: explorationSkillsData.history,
      insight: explorationSkillsData.insight,
      intimidation: explorationSkillsData.intimidation,
      investigation: explorationSkillsData.investigation,
      medicine: explorationSkillsData.medicine,
      nature: explorationSkillsData.nature,
      perception: explorationSkillsData.perception,
      performance: explorationSkillsData.performance,
      persuasion: explorationSkillsData.persuasion,
      religion: explorationSkillsData.religion,
      sleight: explorationSkillsData.sleight,
      stealth: explorationSkillsData.stealth,
      survival: explorationSkillsData.survival,
    },
    validationSchema: explorationSkillsSchema,
    onSubmit: (values) => {},
  });

  
  //Store Update Handlers Section
  const updateAcrobatics = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "acrobatics",
        value: formik.values.acrobatics,
      })
    );
  };

  const updateAnimal = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "animal",
        value: formik.values.animal,
      })
    );
  };

  const updateArcana = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "arcana",
        value: formik.values.arcana,
      })
    );
  };

  const updateAthletics = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "athletics",
        value: formik.values.athletics,
      })
    );
  };

  const updateDeception = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "deception",
        value: formik.values.deception,
      })
    );
  };

  const updateHistory = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "history",
        value: formik.values.history,
      })
    );
  };

  const updateInsight = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "insight",
        value: formik.values.insight,
      })
    );
  };

  const updateIntimidation = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "intimidation",
        value: formik.values.intimidation,
      })
    );
  };

  const updateInvestigation = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "investigation",
        value: formik.values.investigation,
      })
    );
  };

  const updateMedicine = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "medicine",
        value: formik.values.medicine,
      })
    );
  };

  const updateNature = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "nature",
        value: formik.values.nature,
      })
    );
  };

  const updatePerception = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "perception",
        value: formik.values.perception,
      })
    );
  };

  const updatePerformance = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "performance",
        value: formik.values.performance,
      })
    );
  };

  const updatePersuasion = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "persuasion",
        value: formik.values.persuasion,
      })
    );
  };

  const updateReligion = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "religion",
        value: formik.values.religion,
      })
    );
  };

  const updateSleight = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "sleight",
        value: formik.values.sleight,
      })
    );
  };

  const updateStealth = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "stealth",
        value: formik.values.stealth,
      })
    );
  };
  

  const resetExplorationSkills = () => {
    dispatch(createExplorationSkillsActions.resetExplorationSkills());
    formik.resetForm({ values: initialData});
  };

  const updateSurvival = async () => {
    dispatch(
      createExplorationSkillsActions.updateField({
        name: "survival",
        value: formik.values.survival,
      })
    );
  };


  useEffect(() => {
    explorationSkillsSchema.isValid(formik.values).then((isValid) => {
      dispatch(createExplorationSkillsActions.setValidity(isValid));
    });
  }, [formik.values, dispatch]);

  
  return {
    ...formik,
    isDarkMode,
    updateAcrobatics,
    updateAnimal,
    updateArcana,
    updateAthletics,
    updateDeception,
    updateHistory,
    updateInsight,
    updateIntimidation,
    updateInvestigation,
    updateMedicine,
    updateNature,
    updatePerception,
    updatePerformance,
    updatePersuasion,
    updateReligion,
    updateSleight,
    updateStealth,
    updateSurvival,
    resetExplorationSkills,
    getErrorMessage: (fieldName: keyof typeof formik.values) =>
      formik.errors[fieldName] && formik.touched[fieldName]
        ? formik.errors[fieldName]
        : null
  };
};
