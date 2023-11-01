import { AnyObjectSchema } from 'yup';
import { ObjectSchema } from 'yup';

//The purpose is of this function is to use the Yup schema of a subsection and run validation on each individual field that gets updated.
//Since unlike in the create sheet/campaign counterpart where validation only happens when the content itself is actually submitted and the 
//entire form is validated, here it has to be done on a field-by-field basis that the user changes. 
//Will consider adding alerts later.
export const updateFieldValidator = async (
  fieldName: string,
  fieldSchema: ObjectSchema<any, any, any, any>,
  value: any
): Promise<void> => {
  const schema = fieldSchema[fieldName];
  if (!schema) {
    throw new Error('Invalid field name');
  }

  try {
    await schema.validate(value, { abortEarly: false });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      // Log the unexpected error or handle it as needed
      console.error('Unexpected error during validation:', error);
      throw new Error('Validation failed due to an unexpected error');
    }
  }
};
