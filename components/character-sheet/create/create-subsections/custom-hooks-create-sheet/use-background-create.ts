import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createBackgroundActions } from "@/store/create-sheet-store/core-stats-create/background-create-slice";
import { RootState, AppDispatch } from "@/store";

//No fields are mandatory in this subsection
const validationSchema = Yup.object({});

export const useBackgroundCreate = (initialData) => {

  const backgroundData = useSelector(
    (state: RootState) => state.backgroundCreate
  );


  const isValid = useSelector(
    (state: RootState) => state.backgroundCreate.isValid
  );

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      personality: backgroundData.personality,
      backstory: backgroundData.backstory,
      bonds: backgroundData.bonds,
      appearance: backgroundData.appearance,
      ideals: backgroundData.ideas,
      flaws: backgroundData.flaws,
      valuables: backgroundData.valuables,
      additional_traits: backgroundData.additional_traits,
      additional_features: backgroundData.additional_features,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updatePersonality = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "personality",
        value: formik.values.personality,
      })
    );
  };

  const updateBackstory = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "backstory",
        value: formik.values.backstory,
      })
    );
  };

  const updateBonds = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "bonds",
        value: formik.values.bonds,
      })
    );
  };

  const updateAppearance = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "appearance",
        value: formik.values.appearance,
      })
    );
  };

  const updateIdeals = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "ideals",
        value: formik.values.ideals,
      })
    );
  };

  const updateFlaws = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "flaws",
        value: formik.values.flaws,
      })
    );
  };

  const updateValuables = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "valuables",
        value: formik.values.valuables,
      })
    );
  };

  const updateAdditonalTraits = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "additional_traits",
        value: formik.values.additional_traits,
      })
    );
  };

  const updateAdditonalFeatures = async () => {
    dispatch(
      createBackgroundActions.updateField({
        name: "additional_features",
        value: formik.values.additional_features,
      })
    );
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createBackgroundActions.markSectionAsValid());
    } else {
      dispatch(createBackgroundActions.markSectionAsInvalid());
    }
  };

  return {
    ...formik,
    isValid,
    updatePersonality,
    updateBackstory,
    updateBonds,
    updateAppearance,
    updateIdeals,
    updateFlaws,
    updateValuables,
    updateAdditonalTraits,
    updateAdditonalFeatures,
    handleCheckboxChange,
  };
};
