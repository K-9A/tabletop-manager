//These 4 functions are generif functions used to update individual fields in View sheet/campaign pages
//First two are designed to handle regular, singular input fields
//Second two are designed to handle input fields in an array. These are for the skills/spells/equipment/items subsections

export const handleUpdateBlur = async (
  formik,
  fieldName,
  value,
  updateField
) => {
  // Set the field as touched
  formik.setFieldTouched(fieldName, true);

  if (formik.values[fieldName] !== formik.initialValues[fieldName]) {
    try {
      await updateField(fieldName, value);
      // Handle success if necessary
    } catch (error) {
      // Handle error
      console.error("Failed to update field", error);
    }
  }
};

export const handleCreateArrayFieldBlur = async (
  formik,
  fieldPath, // e.g., "skills[0].skill_name"
  value,
  updateField
) => {
  // Extract the index and field name from the fieldPath
  const match = fieldPath.match(/(\w+)\[(\d+)\]\.(\w+)/);
  if (!match) {
    console.error("Invalid field path");
    return;
  }

  const [, arrayFieldName, index, fieldName] = match;

  // Set the field as touched
  formik.setFieldTouched(fieldPath, true);

  // Check if the current value is different from the initial value
  if (formik.values[arrayFieldName][parseInt(index, 10)][fieldName] !== formik.initialValues[arrayFieldName][parseInt(index, 10)][fieldName]) {
    try {
      // Call updateField with index and fieldName
      await updateField(parseInt(index, 10), fieldName, value);
      // If you want to show a success message, do it here
    } catch (error) {
      // Handle error
      console.error("Failed to update field", error);
      // If you want to show an error message, do it here
    }
  }
};


export const handleViewArrayFieldBlur = async (
  formik,
  fieldPath, // e.g., "skills[0].skill_name"
  value,
  skillId, // skillId is required for the view component,
  updateField
) => {
  // Extract the index and field name from the fieldPath
  const match = fieldPath.match(/(\w+)\[(\d+)\]\.(\w+)/);
  if (!match) {
    console.error("Invalid field path");
    return;
  }

  const [, arrayFieldName, index, fieldName] = match;

  // Set the field as touched
  formik.setFieldTouched(fieldPath, true);

  // Check if the current value is different from the initial value
  if (formik.values[arrayFieldName][parseInt(index, 10)][fieldName] !== formik.initialValues[arrayFieldName][parseInt(index, 10)][fieldName]) {
    try {
      // Call updateField with skillId and fieldName
      await updateField(skillId, fieldName, value);
      // If you want to show a success message, do it here
    } catch (error) {
      // Handle error
      console.error("Failed to update field", error);
      // If you want to show an error message, do it here
    }
  }
};

export const handleUpdateKeyDown = async (
  formik,
  fieldName,
  value,
  event,
  updateField
) => {
  // Set the field as touched
  formik.setFieldTouched(fieldName, true);

  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default Enter key behavior
    if (formik.values[fieldName] !== formik.initialValues[fieldName]) {
      try {
        await updateField(fieldName, value);
        // Handle success if necessary
      } catch (error) {
        // Handle error
        console.error("Failed to update field", error);
      }
    }
  }
};

export const handleArrayFieldKeyDown = async (
  formik,
  fieldPath, // e.g., "skills[0].skill_name"
  value,
  event,
  updateField
) => {
  // Extract the index and field name from the fieldPath
  const match = fieldPath.match(/(\w+)\[(\d+)\]\.(\w+)/);
  if (!match) {
    console.error("Invalid field path");
    return;
  }

  const [, arrayFieldName, index, fieldName] = match;

  // Set the field as touched
  formik.setFieldTouched(fieldPath, true);

  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default Enter key behavior

    // Check if the current value is different from the initial value
    if (formik.values[arrayFieldName][parseInt(index, 10)][fieldName] !== formik.initialValues[arrayFieldName][parseInt(index, 10)][fieldName]) {
      try {
        // Call updateField with index and fieldName
        await updateField(parseInt(index, 10), fieldName, value);
        // If you want to show a success message, do it here
      } catch (error) {
        // Handle error
        console.error("Failed to update field", error);
        // If you want to show an error message, do it here
      }
    }
  }
};
