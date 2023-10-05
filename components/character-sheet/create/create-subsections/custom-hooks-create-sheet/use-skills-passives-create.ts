import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createSkillsPassivesActions } from "@/store/create-sheet-store/skills-passives-create-slice";
import { RootState, AppDispatch } from "@/store";


//No fields are mandatory in this subsection
const validationSchema = Yup.object({
    skill_name: Yup.string().required("Skill Name is required"),
    passive_name: Yup.string().required("Passive Name is required"),
});

export const useSkillsPassivesCreate = (initialData) => {

  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const skillsPassivesData = useSelector(
    (state: RootState) => state.skillsPassivesCreate
  );

  const isValid = useSelector(
    (state: RootState) => state.skillsPassivesCreate.isValid
  );

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
        skill_name: skillsPassivesData.skill_name,
        skill_description: skillsPassivesData.skill_description,
        skill_cooldown: skillsPassivesData.skill_cooldown,
        skill_available: skillsPassivesData.skill_available,
        passive_name: skillsPassivesData.passive_name,
        passive_description: skillsPassivesData.skill_description,
        passive_cooldown: skillsPassivesData.passive_cooldown,
        passive_available: skillsPassivesData.passive_available,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updateSkillName = async () => {
    dispatch(
        createSkillsPassivesActions.updateField({
        name: "skill_name",
        value: formik.values.skill_name,
      })
    );
  };

  const updateSkillDescription = async () => {
    dispatch(
        createSkillsPassivesActions.updateField({
        name: "skill_description",
        value: formik.values.skill_description,
      })
    );
  };

  const updateSkillCooldown = async () => {
    dispatch(
        createSkillsPassivesActions.updateField({
        name: "skill_cooldown",
        value: formik.values.skill_cooldown,
      })
    );
  };

  const updateSkillAvailable = async () => {
    dispatch(
        createSkillsPassivesActions.updateField({
        name: "skill_available",
        value: formik.values.skill_available,
      })
    );
  };

  const updatePassiveName = async () => {
    dispatch(
        createSkillsPassivesActions.updateField({
        name: "passive_name",
        value: formik.values.passive_name,
      })
    );
  };

  const updatePassiveDescription = async () => {
    dispatch(
        createSkillsPassivesActions.updateField({
        name: "passive_description",
        value: formik.values.passive_description,
      })
    );
  };

  const updatePassiveCooldown = async () => {
    dispatch(
        createSkillsPassivesActions.updateField({
        name: "passive_cooldown",
        value: formik.values.passive_cooldown,
      })
    );
  };

  const updatePassiveAvailable = async () => {
    dispatch(
        createSkillsPassivesActions.updateField({
        name: "passive_available",
        value: formik.values.passive_available,
      })
    );
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createSkillsPassivesActions.markSectionAsValid());
    } else {
      dispatch(createSkillsPassivesActions.markSectionAsInvalid());
    }
  };

  return{
    ...formik,
    isValid,
    isDarkMode,
    updateSkillName,
    updateSkillDescription,
    updateSkillCooldown,
    updateSkillAvailable,
    updatePassiveName,
    updatePassiveDescription,
    updatePassiveCooldown,
    updatePassiveAvailable,
    handleCheckboxChange
  }
}