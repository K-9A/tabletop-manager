import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createCoreProfileActions } from "@/store/create-sheet-store/core-profile-create-slice";
import { RootState, AppDispatch } from "@/store";
import { coreProfileSchema } from "@/components/validation-schema/character-sheet/core-profile-schema";


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
    validationSchema: coreProfileSchema,
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

  const resetCoreProfile = () => {
    dispatch(createCoreProfileActions.resetCoreProfile());
    formik.resetForm({ values: initialData});
  };

  useEffect(() => {
    coreProfileSchema.isValid(formik.values).then((isValid) => {
      dispatch(createCoreProfileActions.setValidity(isValid));
    });
  }, [formik.values, dispatch]);

  return {
    ...formik,
    isDarkMode,
    resetCoreProfile,
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
