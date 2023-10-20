import { spellSlotsSchema } from "@/components/validation-schema/character-sheet/spell-slots-schema";
import { ValidationError } from "yup";

export const insertSpellSlotsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    const transformedData = spellSlotsSchema.validateSync(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    const {
      first_available,
      first_max,
      second_available,
      second_max,
      third_available,
      third_max,
      fourth_available,
      fourth_max,
      fifth_available,
      fifth_max,
      sixth_available,
      sixth_max,
      seventh_available,
      seventh_max,
      eighth_available,
      eighth_max,
      nineth_available,
      nineth_max,
    } = transformedData;

    //Use the validator package to sanitize data for SQL querying
    const sanitizedData = {
      first_available: first_available,
      first_max: first_max,
      second_available: second_available,
      second_max: second_max,
      third_available: third_available,
      third_max: third_max,
      fourth_available: fourth_available,
      fourth_max: fourth_max,
      fifth_available: fifth_available,
      fifth_max: fifth_max,
      sixth_available: sixth_available,
      sixth_max: sixth_max,
      seventh_available: seventh_available,
      seventh_max: seventh_max,
      eighth_available: eighth_available,
      eighth_max: eighth_max,
      nineth_available: nineth_available,
      nineth_max: nineth_max,
    };

    await dbQuery(
      "INSERT INTO spell_slots (character_id, first_available, first_max, second_available, second_max, third_available, third_max, fourth_available, fourth_max, fifth_available, fifth_max, sixth_available, sixth_max, seventh_available, seventh_max, eighth_available, eighth_max, nineth_available, nineth_max) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        characterId,
        sanitizedData.first_available,
        sanitizedData.first_max,
        sanitizedData.second_available,
        sanitizedData.second_max,
        sanitizedData.third_available,
        sanitizedData.third_max,
        sanitizedData.fourth_available,
        sanitizedData.fourth_max,
        sanitizedData.fifth_available,
        sanitizedData.fifth_max,
        sanitizedData.sixth_available,
        sanitizedData.sixth_max,
        sanitizedData.seventh_available,
        sanitizedData.seventh_max,
        sanitizedData.eighth_available,
        sanitizedData.eighth_max,
        sanitizedData.nineth_available,
        sanitizedData.nineth_max,
      ]
    );
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }
};
