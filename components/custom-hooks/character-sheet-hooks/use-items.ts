import { useEffect } from "react";
import { useFormik, FormikErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createItemsActions } from "@/store/create-sheet-store/items-create-slice";
import {
  fetchItemsData,
  updateItemsField,
  addItem,
  removeItem,
} from "@/store/view-sheet-store/items-view-slice";
import { useMemoizedAlert } from "@/components/layout/alert";
import { RootState, AppDispatch } from "@/store";
import { itemsSchema } from "@/components/validation-schema/character-sheet/items-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript

// Define a type for the mode, which helps control when a useEffect runs
type Mode = "create" | "view";
const MAX_ITEMS = 40; // Set the maximum number of items allowed

export const useItems = (
  mode: Mode,
  characterId: string,
  itemId?: number
) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  //Use selector for the create subsection
  const itemsCreateData = useSelector(
    (state: RootState) => state.itemsCreate
  );

  //Use selector for the view subsection
  const itemsViewData = useSelector((state: RootState) => state.itemsView);

  //isValid selector for subcomponents that have the "Mark as Complete" checkbox instead of checking to see if
  //all "required" fields are filled out.
  const isValid = useSelector((state: RootState) => state.itemsCreate.isValid);

  //Fetch data on page load for view component
  useEffect(() => {
    // Only fetch data if in 'view' mode and a characterId is provided
    if (mode === "view" && characterId) {
      dispatch(fetchItemsData(characterId) as unknown as AnyAction);
    }
  }, [dispatch, characterId, mode]);



  const createFormik = useFormik({
    initialValues: {
      items: itemsCreateData.items,
    },
    validationSchema: itemsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  const viewFormik = useFormik({
    initialValues: {
      items: itemsViewData.items,
    },
    validationSchema: itemsSchema,
    onSubmit: () => {},
    enableReinitialize: true,
  });



  //Update create item field handlers
  const updateCreateField = async (index, fieldName) => {

    const fieldValue = createFormik.values.items[index][fieldName];
    try {
      await dispatch(
        createItemsActions.updateItemField({
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

  const updateViewField = async (itemId, fieldName, value) => {
    if (itemId !== undefined) {
      try {
        // Dispatch the updateItemsField thunk action and unwrap the result
        await dispatch(updateItemsField({
          itemId,
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
      console.error("Item ID is required to update a item.");
    }
  };

  //For the create sheet "section complete" checkbox.
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(createItemsActions.markSectionAsValid());
    } else {
      dispatch(createItemsActions.markSectionAsInvalid());
    }
  };


  const addCreateItem = () => {
    if (createFormik.values.items.length >= MAX_ITEMS) {
      // Handle the error case when the maximum number of items is reached
      addAlertMemo(`You can only add up to ${MAX_ITEMS} items.`, "error");
      return; // Exit the function to prevent adding a new item
    }
  
    dispatch(createItemsActions.addItem());
  };

  const removeCreateItem = (index) => {
    dispatch(createItemsActions.removeItem(index));
  };
  

  const addViewItem = () => {
    if (viewFormik.values.items.length >= MAX_ITEMS) {
      // Handle the error case when the maximum number of items is reached
      addAlertMemo(`You can only add up to ${MAX_ITEMS} items.`, "error");
      return; // Exit the function to prevent adding a new item
    }
  
    dispatch(addItem(characterId) as unknown as AnyAction);
  };


  const removeViewItem = (index) => {
    // Assuming viewFormik.values.items is an array of items
    // and each item has a item_id property
    const itemId = viewFormik.values.items[index].item_id;
  
    if (itemId !== undefined) {
      dispatch(removeItem({ characterId, itemId }) as unknown as AnyAction)
        .unwrap()
        .then(() => {
          viewFormik.setFieldValue(
            `items`,
            viewFormik.values.items.filter((_, i) => i !== index),
            false
          );
        })
        .catch((error) => {
          // Handle error
          addAlertMemo(`Error removing item: ${error.message}`, "error");
          console.error("Item ID is required to remove a item.", error);
        });
    } else {
      addAlertMemo(`Error removing item.`, "error");
      console.error("Item ID is required to remove a item.");
    }
  };

  const resetItems = () => {
    dispatch(createItemsActions.resetItems());
    createFormik.resetForm();
  };


  const getCreateErrorMessage = (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const itemErrors = createFormik.errors.items as Array<
        FormikErrors<{ item_name: string }>
      >;
      return itemErrors && itemErrors[index] && itemErrors[index][fieldName]
        ? itemErrors[index][fieldName]
        : null;
    } else {
      return createFormik.errors[fieldName] && createFormik.touched[fieldName]
        ? createFormik.errors[fieldName]
        : null;
    }
  };

  const getViewErrorMessage = (fieldName: string, index?: number) => {
    if (index !== undefined) {
      const itemErrors = viewFormik.errors.items as Array<
        FormikErrors<{ item_name: string }>
      >;
      return itemErrors && itemErrors[index] && itemErrors[index][fieldName]
        ? itemErrors[index][fieldName]
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
    addCreateItem,
    removeCreateItem,
    addViewItem,
    removeViewItem,
    updateCreateField,
    updateViewField,
    handleCheckboxChange,
    resetItems,
    getCreateErrorMessage,
    getViewErrorMessage,
  };
};
