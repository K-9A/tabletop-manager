import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createCoreProfileActions } from "@/store/create-sheet-store/core-profile-create-slice";
import { RootState, AppDispatch } from "@/store";

const validationSchema = Yup.object({
  name: Yup.string().required("Character Name is required"),
  char_class: Yup.string().required("Class is required"),
  race: Yup.string().required("Race is required"),
  proficiency: Yup.number()
    .typeError("Proficiency must be a number")
    .min(2, "Proficiency must be least 2")
    .max(6, "Proficiency cannot exceed 6")
    .required("Proficiency is required"),
  char_level: Yup.number()
    .typeError("Level must be a number")
    .min(1, "Level should be at least 1")
    .max(20, "Level cannot exceed 20")
    .required("Level is required"),
  experience: Yup.number()
    .typeError("Experience must be a number")
    .min(0, "Experience cannot be negative")
    .required("Experience is required"),
  next_level: Yup.number()
    .typeError("Next Level must be a number")
    .min(0, "Next Level cannot be negative")
    .required("Next Level is required"),
});

export const useCoreProfileCreate = (initialData) => {

  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const coreProfileData = useSelector(
    (state: RootState) => state.coreProfileCreate
  );
  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: coreProfileData.name,
      char_class: coreProfileData.char_class,
      race: coreProfileData.race,
      proficiency: coreProfileData.proficiency,
      char_level: coreProfileData.char_level,
      experience: coreProfileData.experience,
      next_level: coreProfileData.next_level,
      affinity: coreProfileData.affinity,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updateCharacterName = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "name",
        value: formik.values.name,
      })
    );
  };

  const updateCharacterClass = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "char_class",
        value: formik.values.char_class,
      })
    );
  };

  const updateRace = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "race",
        value: formik.values.race,
      })
    );
  };

  const updateProficiency = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "proficiency",
        value: formik.values.proficiency,
      })
    );
  };

  const updateCharacterLevel = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "char_level",
        value: formik.values.char_level,
      })
    );
  };

  const updateExperience = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "experience",
        value: formik.values.experience,
      })
    );
  };

  const updateNextLevel = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "next_level",
        value: formik.values.next_level,
      })
    );
  };

  const updateAffinity = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "affinity",
        value: formik.values.affinity,
      })
    );
  };

  useEffect(() => {
    validationSchema.isValid(formik.values).then((isValid) => {
      dispatch(createCoreProfileActions.setValidity(isValid));
    });
  }, [formik.values, dispatch]);

  return {
    ...formik,
    isDarkMode,
    updateCharacterName,
    updateCharacterClass,
    updateRace,
    updateProficiency,
    updateCharacterLevel,
    updateExperience,
    updateNextLevel,
    updateAffinity,
    getErrorMessage: (fieldName: keyof typeof formik.values) =>
      formik.errors[fieldName] && formik.touched[fieldName]
        ? formik.errors[fieldName]
        : null,
  };
};
