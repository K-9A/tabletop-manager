import { useFormik, FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEquipmentActions } from "@/store/create-sheet-store/equipment-create-slice";
import { RootState, AppDispatch } from "@/store";
import { equipmentSchema } from "@/components/validation-schema/character-sheet/equipment-schema";


export const useEquipmentCreate = (initialData) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const equipmentData = useSelector(
    (state: RootState) => state.equipmentCreate
  );

  const isValid = useSelector(
    (state: RootState) => state.equipmentCreate.isValid
  );

  const dispatch: AppDispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      equipment: equipmentData.equipment,
    },
    enableReinitialize: true,
    validationSchema: equipmentSchema,
    onSubmit: (values) => {},
  });

  //Store Update Handlers Section
  const updateEquipmentField = async (index, fieldName) => {
    dispatch(
      createEquipmentActions.updateEquipmentField({
        index: index,
        name: fieldName,
        value: formik.values.equipment[index][fieldName],
      })
    );
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createEquipmentActions.markSectionAsValid());
    } else {
      dispatch(createEquipmentActions.markSectionAsInvalid());
    }
  };

  const resetEquipment = () => {
    dispatch(createEquipmentActions.resetEquipment());
    formik.resetForm({ values: initialData});
  };

  const addNewEquipment = () => {
    dispatch(createEquipmentActions.addEquipment());
  };

  const removeEquipment = () => {
    dispatch(createEquipmentActions.removeEquipment());
  };

  return {
    ...formik,
    isValid,
    isDarkMode,
    addNewEquipment,
    removeEquipment,
    updateEquipmentField,
    resetEquipment,
    handleCheckboxChange,
    getErrorMessage: (fieldName: string, index?: number) => {
      if (index !== undefined) {
        const equipmentErrors = formik.errors.equipment as Array<
          FormikErrors<{ equipment_name: string }>
        >;
        return equipmentErrors &&
          equipmentErrors[index] &&
          equipmentErrors[index][fieldName]
          ? equipmentErrors[index][fieldName]
          : null;
      } else {
        return formik.errors[fieldName] && formik.touched[fieldName]
          ? formik.errors[fieldName]
          : null;
      }
    },
  };
};
