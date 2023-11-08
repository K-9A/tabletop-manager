import { useEffect } from "react";
import { useFormik, FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEquipmentActions } from "@/store/create-sheet-store/equipment-create-slice";
import {
  fetchEquipmentData,
  updateEquipmentField,
  addEquipment,
  removeEquipment,
} from "@/store/view-sheet-store/equipment-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { equipmentSchema } from "@/components/validation-schema/character-sheet/equipment-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript

// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";
const MAX_EQUIPMENT = 20; // Set the maximum number of equipment allowed

export const useEquipment = (
  mode: Mode,
  characterId: string,
  equipmentId?: number
) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  //Use selector for the create subsection
  const equipmentCreateData = useSelector(
    (state: RootState) => state.equipmentCreate
  );

  //Use selector for the view subsection
  const equipmentViewData = useSelector((state: RootState) => state.equipmentView);

  //isValid selector for subcomponents that have the "Mark as Complete" checkbox instead of checking to see if
  //all "required" fields are filled out.
  const isValid = useSelector((state: RootState) => state.equipmentCreate.isValid);

  //Fetch data on page load for view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchEquipmentData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);



  const createFormik = useFormik({
    initialValues: {
      equipment: equipmentCreateData.equipment,
    },
    validationSchema: equipmentSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const viewFormik = useFormik({
    initialValues: {
      equipment: equipmentViewData.equipment,
    },
    validationSchema: equipmentSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });


  //Update create equipment field handlers
  const updateCreateField = async (index, fieldName) => {

    const fieldValue = createFormik.values.equipment[index][fieldName];
    try {
      await dispatch(
        createEquipmentActions.updateEquipmentField({
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

  const updateViewField = async (equipmentId, fieldName, value) => {
    if (equipmentId !== undefined) {
      try {
        // Dispatch the updateEquipmentField thunk action and unwrap the result
        await dispatch(updateEquipmentField({
          equipmentId,
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
      console.error("Equipment ID is required to update a equipment.");
    }
  };

  //For the create sheet "section complete" checkbox.
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createEquipmentActions.markSectionAsValid());
    } else {
      dispatch(createEquipmentActions.markSectionAsInvalid());
    }
  };



  const addCreateEquipment = () => {
    if (createFormik.values.equipment.length >= MAX_EQUIPMENT) {
      // Handle the error case when the maximum number of equipment is reached
      addAlertMemo(`You can only add up to ${MAX_EQUIPMENT} equipment.`, "error");
      return; // Exit the function to prevent adding a new equipment
    }
  
    dispatch(createEquipmentActions.addEquipment());
  };

  const removeCreateEquipment = (index) => {
    dispatch(createEquipmentActions.removeEquipment(index));
  };

  const addViewEquipment = () => {
    if (viewFormik.values.equipment.length >= MAX_EQUIPMENT) {
      // Handle the error case when the maximum number of equipment is reached
      addAlertMemo(`You can only add up to ${MAX_EQUIPMENT} equipment.`, "error");
      return; // Exit the function to prevent adding a new equipment
    }
  
    dispatch(addEquipment(characterId) as unknown as AnyAction);
  };

  const removeViewEquipment = (index) => {
    // Assuming viewFormik.values.equipment is an array of equipment
    // and each equipment has a equipment_id property
    const equipmentId = viewFormik.values.equipment[index].equipment_id;
  
    if (equipmentId !== undefined) {
      dispatch(removeEquipment({ characterId, equipmentId }) as unknown as AnyAction)
        .unwrap()
        .then(() => {
          viewFormik.setFieldValue(
            `equipment`,
            viewFormik.values.equipment.filter((_, i) => i !== index),
            false
          );
        })
        .catch((error) => {
          // Handle error
          addAlertMemo(`Error removing equipment: ${error.message}`, "error");
          console.error("Equipment ID is required to remove a equipment.", error);
        });
    } else {
      addAlertMemo(`Error removing equipment.`, "error");
      console.error("Equipment ID is required to remove a equipment.");
    }
  };

  const resetEquipment = () => {
    dispatch(createEquipmentActions.resetEquipment());
    createFormik.resetForm();
  };


  const getCreateErrorMessage = (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const equipmentErrors = createFormik.errors.equipment as Array<
        FormikErrors<{ equipment_name: string }>
      >;
      return equipmentErrors && equipmentErrors[index] && equipmentErrors[index][fieldName]
        ? equipmentErrors[index][fieldName]
        : null;
    } else {
      return createFormik.errors[fieldName] && createFormik.touched[fieldName]
        ? createFormik.errors[fieldName]
        : null;
    }
  };

  const getViewErrorMessage = (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const equipmentErrors = viewFormik.errors.equipment as Array<
        FormikErrors<{ equipment_name: string }>
      >;
      return equipmentErrors && equipmentErrors[index] && equipmentErrors[index][fieldName]
        ? equipmentErrors[index][fieldName]
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
    addCreateEquipment,
    removeCreateEquipment,
    addViewEquipment,
    removeViewEquipment,
    updateCreateField,
    updateViewField,
    handleCheckboxChange,
    resetEquipment,
    getCreateErrorMessage,
    getViewErrorMessage,
  };
};
