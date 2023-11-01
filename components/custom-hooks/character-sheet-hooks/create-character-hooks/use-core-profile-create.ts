import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createCoreProfileActions } from "@/store/create-sheet-store/core-profile-create-slice";
import { updateCoreProfileField, fetchCoreProfileData } from "@/store/view-sheet-store/core-profile-view-slice";
import { RootState, AppDispatch } from "@/store";
import { coreProfileSchema } from "@/components/validation-schema/character-sheet/core-profile-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript


export const useCoreProfileCreate = ( characterId: string) => {

  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();

  //Use selector for the create subsection
  const coreProfileCreateData = useSelector(
    (state: RootState) => state.coreProfileCreate
  );

  //Use selector for the view subsection
  const coreProfileViewData = useSelector(
    (state: RootState) => state.coreProfileView
  );

    //Fetch data on page load
    useEffect(() => {
      dispatch(fetchCoreProfileData(characterId) as unknown as AnyAction);
    }, [dispatch, characterId]);

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
    onSubmit: (values) => {},
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
    onSubmit: (values) => {},
    enableReinitialize: true,
  });


  const updateViewField = async (fieldName, value) => {
    try {
      await dispatch(updateCoreProfileField({ characterId, fieldName, value }) as unknown as AnyAction).unwrap();
      // Handle success if necessary
    } catch (error) {
      // Handle error
      console.error('Failed to update field', error);
    }
  };

  //Store Update Handlers Section
  const updateCharacterName = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "character_name",
        value: createFormik.values.character_name,
      })
    );
  };

  const updateCharacterClass = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "char_class",
        value: createFormik.values.char_class,
      })
    );
  };

  const updateRace = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "race",
        value: createFormik.values.race,
      })
    );
  };

  const updateProficiency = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "proficiency",
        value: createFormik.values.proficiency,
      })
    );
  };

  const updateCharacterLevel = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "char_level",
        value: createFormik.values.char_level,
      })
    );
  };

  const updateExperience = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "experience",
        value: createFormik.values.experience,
      })
    );
  };

  const updateNextLevel = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "next_level",
        value: createFormik.values.next_level,
      })
    );
  };

  const updateAffinity = async () => {
    dispatch(
      createCoreProfileActions.updateField({
        name: "affinity",
        value: createFormik.values.affinity,
      })
    );
  };

  const resetCoreProfile = () => {
    dispatch(createCoreProfileActions.resetCoreProfile());
    createFormik.resetForm();
  };

  useEffect(() => {
    coreProfileSchema.isValid(createFormik.values).then((isValid) => {
      dispatch(createCoreProfileActions.setValidity(isValid));
    });
  }, [createFormik.values, dispatch]);

  return {
    ...createFormik,
    viewFormik,
    isDarkMode,
    coreProfileCreateData,
    updateViewField,
    resetCoreProfile,
    updateCharacterName,
    updateCharacterClass,
    updateRace,
    updateProficiency,
    updateCharacterLevel,
    updateExperience,
    updateNextLevel,
    updateAffinity,
    getErrorMessage: (fieldName: keyof typeof createFormik.values) =>
    createFormik.errors[fieldName] && createFormik.touched[fieldName]
        ? createFormik.errors[fieldName]
        : null,
  };
};
