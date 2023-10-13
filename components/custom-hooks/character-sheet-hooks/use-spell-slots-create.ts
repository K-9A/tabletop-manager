import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createSpellSlotsActions } from "@/store/create-sheet-store/spell-slots-create-slice";
import { RootState, AppDispatch } from "@/store";
import { spellSlotsSchema } from "@/components/validation-schema/character-sheet/spell-slots-schema";


export const useSpellSlotsCreate = (initialData) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const spellSlotsData = useSelector(
    (state: RootState) => state.spellSlotsCreate
  );

  const isValid = useSelector(
    (state: RootState) => state.spellSlotsCreate.isValid
  );


  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      first_available: spellSlotsData.first_available,
      first_max: spellSlotsData.first_max,
      second_available: spellSlotsData.second_available,
      second_max: spellSlotsData.second_max,
      third_available: spellSlotsData.third_available,
      third_max: spellSlotsData.third_max,
      fourth_available: spellSlotsData.fourth_available,
      fourth_max: spellSlotsData.fourth_max,
      fifth_available: spellSlotsData.fifth_available,
      fifth_max: spellSlotsData.fifth_max,
      sixth_available: spellSlotsData.sixth_available,
      sixth_max: spellSlotsData.sixth_max,
      seventh_available: spellSlotsData.seventh_available,
      seventh_max: spellSlotsData.seventh_max,
      eighth_available: spellSlotsData.eighth_available,
      eighth_max: spellSlotsData.eighth_max,
      nineth_available: spellSlotsData.nineth_available,
      nineth_max: spellSlotsData.nineth_max,
    },
    validationSchema: spellSlotsSchema,
    onSubmit: (values) => {},
  });

  const updateFirstAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "first_available",
        value: formik.values.first_available,
      })
    );
  };

  const updateFirstMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "first_max",
        value: formik.values.first_max,
      })
    );
  };

  const updateSecondAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "second_available",
        value: formik.values.second_available,
      })
    );
  };

  const updateSecondMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "second_max",
        value: formik.values.second_max,
      })
    );
  };

  const updateThirdAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "third_available",
        value: formik.values.third_available,
      })
    );
  };

  const updateThirdMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "third_max",
        value: formik.values.third_max,
      })
    );
  };

  const updateFourthAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "fourth_available",
        value: formik.values.fourth_available,
      })
    );
  };

  const updateFourthMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "fourth_max",
        value: formik.values.fourth_max,
      })
    );
  };

  const updateFifthAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "fifth_available",
        value: formik.values.fifth_available,
      })
    );
  };

  const updateFifthMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "fifth_max",
        value: formik.values.fifth_max,
      })
    );
  };

  const updateSixthAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "sixth_available",
        value: formik.values.sixth_available,
      })
    );
  };

  const updateSixthMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "sixth_max",
        value: formik.values.sixth_max,
      })
    );
  };

  const updateSeventhAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "seventh_available",
        value: formik.values.seventh_available,
      })
    );
  };

  const updateSeventhMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "seventh_max",
        value: formik.values.seventh_max,
      })
    );
  };

  const updateEighthAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "eighth_available",
        value: formik.values.eighth_available,
      })
    );
  };

  const updateEighthMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "eighth_max",
        value: formik.values.eighth_max,
      })
    );
  };

  const updateNinethAvailable = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "nineth_available",
        value: formik.values.nineth_available,
      })
    );
  };

  const updateNinethMax = async () => {
    dispatch(
      createSpellSlotsActions.updateField({
        name: "nineth_max",
        value: formik.values.nineth_max,
      })
    );
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createSpellSlotsActions.markSectionAsValid());
    } else {
      dispatch(createSpellSlotsActions.markSectionAsInvalid());
    }
  };


  return {
    ...formik,
    isDarkMode,
    isValid,
    updateFirstAvailable,
    updateFirstMax,
    updateSecondAvailable,
    updateSecondMax,
    updateThirdAvailable,
    updateThirdMax,
    updateFourthAvailable,
    updateFourthMax,
    updateFifthAvailable,
    updateFifthMax,
    updateSixthAvailable,
    updateSixthMax,
    updateSeventhAvailable,
    updateSeventhMax,
    updateEighthAvailable,
    updateEighthMax,
    updateNinethAvailable,
    updateNinethMax,
    handleCheckboxChange,
    getErrorMessage: (fieldName: keyof typeof formik.values) =>
      formik.errors[fieldName] && formik.touched[fieldName]
        ? formik.errors[fieldName]
        : null,
  };
};