import { spellSlotsSchema } from "@/components/validation-schema/character-sheet/spell-slots-schema";
import validator from "validator";
import { ValidationError } from "yup";

export const insertSpellSlotsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    await spellSlotsSchema.validate(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }

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
  } = data;

  //Use the validator package to sanitize data for SQL querying
  const sanitizedData = {
    first_available: validator.escape(first_available),
    first_max: validator.escape(first_max),
    second_available: validator.escape(second_available),
    second_max: validator.escape(second_max),
    third_available: validator.escape(third_available),
    third_max: validator.escape(third_max),
    fourth_available: validator.escape(fourth_available),
    fourth_max: validator.escape(fourth_max),
    fifth_available: validator.escape(fifth_available),
    fifth_max: validator.escape(fifth_max),
    sixth_available: validator.escape(sixth_available),
    sixth_max: validator.escape(sixth_max),
    seventh_available: validator.escape(seventh_available),
    seventh_max: validator.escape(seventh_max),
    eighth_available: validator.escape(eighth_available),
    eighth_max: validator.escape(eighth_max),
    nineth_available: validator.escape(nineth_available),
    nineth_max: validator.escape(nineth_max),
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
};
