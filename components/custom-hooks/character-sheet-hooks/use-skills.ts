import { useEffect } from "react";
import { useFormik, FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createSkillsActions } from "@/store/create-sheet-store/skills-create-slice";
import {
  fetchSkillsData,
  updateSkillsField,
  addSkill,
  removeSkill,
} from "@/store/view-sheet-store/skills-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { skillsSchema } from "@/components/validation-schema/character-sheet/skills-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript

// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";

export const useSkills = (
  mode: Mode,
  characterId: string,
  skillId?: number
) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  //Use selector for the create subsection
  const skillsCreateData = useSelector(
    (state: RootState) => state.skillsCreate
  );

  //Use selector for the view subsection
  const skillsViewData = useSelector((state: RootState) => state.skillsView);

  //isValid selector for subcomponents that have the "Mark as Complete" checkbox instead of checking to see if
  //all "required" fields are filled out.
  const isValid = useSelector((state: RootState) => state.skillsCreate.isValid);

  //Fetch data on page load for view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchSkillsData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);



  const createFormik = useFormik({
    initialValues: {
      skills: skillsCreateData.skills,
    },
    validationSchema: skillsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const viewFormik = useFormik({
    initialValues: {
      skills: skillsViewData.skills,
    },
    validationSchema: skillsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });



  //Update create skill field handlers
  const updateCreateField = async (index, fieldName) => {
    const fieldValue = createFormik.values.skills[index][fieldName];
    try {
      await dispatch(
        createSkillsActions.updateSkillField({
          index: index,
          name: fieldName,
          value: fieldValue,
        })
      );
    } catch (error) {
      addAlertMemo(`Error updating ${fieldName}`, "error");
      console.error("Failed to update field", error);
    }
  };

  const updateViewField = async (skillId, fieldName, value) => {
    if (skillId !== undefined) {
      try {
        // Dispatch the updateSkillsField thunk action and unwrap the result
        await dispatch(updateSkillsField({
          skillId,
          characterId,
          fieldName,
          value,
        })as unknown as AnyAction).unwrap();
        // Optionally, show a success message to the user
      } catch (error) {
        // Log the error and show an error message to the user
        console.error("Failed to update field", error);
        addAlertMemo(`Error updating ${fieldName}`, "error");
      }
    } else {
      // Log the error and handle it, such as showing a user-friendly message
      console.error("Skill ID is required to update a skill.");
    }
  };

  //For the create sheet "section complete" checkbox.
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createSkillsActions.markSectionAsValid());
    } else {
      dispatch(createSkillsActions.markSectionAsInvalid());
    }
  };

  const addCreateSkill = () => {
    dispatch(createSkillsActions.addSkill());
  };

  const removeCreateSkill = (index) => {
    dispatch(createSkillsActions.removeSkill(index));
  };

  const addViewSkill = () => {
    dispatch(addSkill(characterId) as unknown as AnyAction);
  };

  const removeViewSkill = (index) => {
    // Assuming viewFormik.values.skills is an array of skills
    // and each skill has a skill_id property
    const skillId = viewFormik.values.skills[index].skill_id;
  
    if (skillId !== undefined) {
      dispatch(removeSkill({ characterId, skillId }) as unknown as AnyAction)
        .unwrap()
        .then(() => {
          viewFormik.setFieldValue(
            `skills`,
            viewFormik.values.skills.filter((_, i) => i !== index),
            false
          );
        })
        .catch((error) => {
          // Handle error
          addAlertMemo(`Error removing skill: ${error.message}`, "error");
          console.error("Skill ID is required to remove a skill.", error);
        });
    } else {
      addAlertMemo(`Error removing skill.`, "error");
      console.error("Skill ID is required to remove a skill.");
    }
  };

  const resetSkills = () => {
    dispatch(createSkillsActions.resetSkills());
    createFormik.resetForm();
  };


  const getCreateErrorMessage = (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const skillErrors = createFormik.errors.skills as Array<
        FormikErrors<{ skill_name: string }>
      >;
      return skillErrors && skillErrors[index] && skillErrors[index][fieldName]
        ? skillErrors[index][fieldName]
        : null;
    } else {
      return createFormik.errors[fieldName] && createFormik.touched[fieldName]
        ? createFormik.errors[fieldName]
        : null;
    }
  };

  const getViewErrorMessage = (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const skillErrors = viewFormik.errors.skills as Array<
        FormikErrors<{ skill_name: string }>
      >;
      return skillErrors && skillErrors[index] && skillErrors[index][fieldName]
        ? skillErrors[index][fieldName]
        : null;
    } else {
      return viewFormik.errors[fieldName] && viewFormik.touched[fieldName]
        ? viewFormik.errors[fieldName]
        : null;
    }
  };

  return {
    createFormik,
    viewFormik,
    isValid,
    isDarkMode,
    addCreateSkill,
    removeCreateSkill,
    addViewSkill,
    removeViewSkill,
    updateCreateField,
    updateViewField,
    handleCheckboxChange,
    resetSkills,
    getCreateErrorMessage,
    getViewErrorMessage,
  };
};
