import { useFormik, FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createItemsActions } from "@/store/create-sheet-store/items-create-slice";
import { RootState, AppDispatch } from "@/store";
import { itemsSchema } from "@/components/validation-schema/character-sheet/items-schema";


export const useItemsCreate = (initialData) => {
const isDarkMode = useSelector((state: RootState) => state.darkMode);

const itemsData = useSelector((state: RootState) => state.itemsCreate);

const isValid = useSelector((state: RootState) => state.itemsCreate.isValid);

const dispatch: AppDispatch = useDispatch();

const formik = useFormik({
  initialValues: {
    items: itemsData.items,
  },
  enableReinitialize: true,
  validationSchema: itemsSchema,
  onSubmit: (values) => {},
});

//Store Update Handlers Section
const updateItemsField = async (index, fieldName) => {
  dispatch(
    createItemsActions.updateItemsField({
      index: index,
      name: fieldName,
      value: formik.values.items[index][fieldName],
    })
  );
};

const handleCheckboxChange = (e) => {
  if (e.target.checked) {
    dispatch(createItemsActions.markSectionAsValid());
  } else {
    dispatch(createItemsActions.markSectionAsInvalid());
  }
};

const addNewItem = () => {
  dispatch(createItemsActions.addItem());
};

const removeItem = () => {
  dispatch(createItemsActions.removeItem());
};

const resetItems = () => {
  dispatch(createItemsActions.resetItems());
  formik.resetForm({ values: initialData});
};

return {
  ...formik,
  isValid,
  isDarkMode,
  addNewItem,
  removeItem,
  updateItemsField,
  handleCheckboxChange,
  resetItems,
  getErrorMessage: (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const itemErrors = formik.errors.items as Array<
        FormikErrors<{ item_name: string }>
      >;
      return itemErrors &&
        itemErrors[index] &&
        itemErrors[index][fieldName]
        ? itemErrors[index][fieldName]
        : null;
    } else {
      return formik.errors[fieldName] && formik.touched[fieldName]
        ? formik.errors[fieldName]
        : null;
    }
  },
};
};
