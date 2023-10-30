//In this helper function, fieldNames is an array of strings representing the names of your form fields. 
//The function generates blur and keyDown handlers for each field and returns an object containing all the handlers.

import { handleBlur, handleKeyDown } from "./form-handlers";

type Handlers = {
    [key: string]: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement> | React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => Promise<void>;
  };
  

  export const generateFieldHandlers = (formik: any, fieldNames: string[], dispatch: any, updateField: any): Handlers => {
    const handlers = {};
  
    fieldNames.forEach(fieldName => {
      handlers[`${fieldName}Blur`] = handleBlur.bind(null, formik, fieldName, dispatch, updateField);
      handlers[`${fieldName}KeyDown`] = handleKeyDown.bind(null, formik, fieldName, dispatch, updateField);
    });
  
    return handlers;
  };