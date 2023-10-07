import { useFormik, FormikErrors } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createItemsActions } from "@/store/create-sheet-store/items-create-slice";
import { RootState, AppDispatch } from "@/store";

//No fields are mandatory in this subsection
const validationSchema = Yup.object({
  items: Yup.array().of(
    Yup.object({
      item: Yup.string().required("Name is required"),
      item_amount: Yup.number()
        .typeError("Must be number")
        .nullable()
        .transform((_, val) => (val !== "" ? Number(val) : null)),
      item_max: Yup.number()
        .typeError("Must be number")
        .nullable()
        .transform((_, val) => (val !== "" ? Number(val) : null)),
    })
  ),
});

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
  validationSchema: validationSchema,
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

return {
  ...formik,
  isValid,
  isDarkMode,
  addNewItem,
  removeItem,
  updateItemsField,
  handleCheckboxChange,
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
