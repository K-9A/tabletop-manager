import { useFormik,FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createSkillsActions } from "@/store/create-sheet-store/skills-create-slice";
import { RootState, AppDispatch } from "@/store";
import { skillsSchema } from "@/components/validation-schema/character-sheet/skills-schema";

export const useSkillsCreate = (initialData) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const skillsData = useSelector(
    (state: RootState) => state.skillsCreate
  );

  const isValid = useSelector(
    (state: RootState) => state.skillsCreate.isValid
  );

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      skills: skillsData.skills,
    },
    enableReinitialize: true,
    validationSchema: skillsSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updateSkillField = async (index, fieldName) => {
    dispatch(
      createSkillsActions.updateSkillField({
        index: index,
        name: fieldName,
        value: formik.values.skills[index][fieldName],
      })
    );
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createSkillsActions.markSectionAsValid());
    } else {
      dispatch(createSkillsActions.markSectionAsInvalid());
    }
  };

  const addNewSkill = () => {
    dispatch(createSkillsActions.addSkill());
  };

  const removeSkill = () => {
    dispatch(createSkillsActions.removeSkill());
};

  return {
    ...formik,
    isValid,
    isDarkMode,
    addNewSkill,
    removeSkill,
    updateSkillField,
    handleCheckboxChange,
    getErrorMessage: (fieldName: string, index?: number) => {
      if (index !== undefined) {
        const skillErrors = formik.errors.skills as Array<FormikErrors<{ skill_name: string }>>;
        return skillErrors &&
          skillErrors[index] &&
          skillErrors[index][fieldName]
          ? skillErrors[index][fieldName]
          : null;
      } else {
        return formik.errors[fieldName] && formik.touched[fieldName]
          ? formik.errors[fieldName]
          : null;
      }
    },
  };
};
