//The purpose of this helper function is to create handleBlur and handleKeyDown (for enter) events when it comes to
//input components on the View Campaign and Character sheet. These functions should run formik checks as well as detect
//if the value in them has changed. If it has, the functions will then make PUT requests to update the DB and data.


import { AnyAction } from 'redux';

export const handleBlur = async (
  formik: any,
  fieldName: string,
  dispatch: any,
  updateField: any,
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  // Prevent the default behavior
  e.preventDefault();

  // Manually trigger Formik's onBlur handler
  formik.handleBlur(e);

  // Manually set the field as touched to trigger validation
  formik.setFieldTouched(fieldName, true, false);

  // Ensure the field is not in the middle of a validation run
  await formik.validateField(fieldName);

  // Check for errors
  if (!formik.errors[fieldName]) {
    // Check if the value has changed
    if (formik.values[fieldName] !== formik.initialValues[fieldName]) {
      // Dispatch the update
      try {
        await dispatch(
          updateField(
            fieldName,
            formik.values[fieldName]
          ) as unknown as AnyAction
        ).unwrap();
      } catch (error) {
        console.error(`Error updating ${fieldName}:`, error);
      }
    }
  }
};

export const handleKeyDown = async (
  formik: any,
  fieldName: string,
  dispatch: any,
  updateField: any,
  e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  if (e.key === "Enter") {
    e.preventDefault();


    // Ensure the field is not in the middle of a validation run
    await formik.validateField(fieldName);

    // Check for errors
    if (!formik.errors[fieldName]) {
      // Check if the value has changed
      if (formik.values[fieldName] !== formik.initialValues[fieldName]) {
        // Dispatch the update
        try {
          await dispatch(
            updateField(
              fieldName,
              formik.values[fieldName]
            ) as unknown as AnyAction
          ).unwrap();
        } catch (error) {
          console.error(`Error updating ${fieldName}:`, error);
        }
      }
    }
  }
};
