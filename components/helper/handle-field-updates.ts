//These 2 functions are generif functions used to update individual fields in View sheet/campaign pages


export const handleUpdateBlur = async (formik, fieldName, value, updateField) => {
    if (formik.values[fieldName] !== formik.initialValues[fieldName]) {
      try {
        await updateField(fieldName, value);
        // Handle success if necessary
      } catch (error) {
        // Handle error
        console.error('Failed to update field', error);
      }
    }
  };
  
  export const handleUpdateKeyDown = async (formik, fieldName, value, event, updateField) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default Enter key behavior
      if (formik.values[fieldName] !== formik.initialValues[fieldName]) {
        try {
          await updateField(fieldName, value);
          // Handle success if necessary
        } catch (error) {
          // Handle error
          console.error('Failed to update field', error);
        }
      }
    }
  };
  