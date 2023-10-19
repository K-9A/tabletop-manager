import { backgroundSchema } from "@/components/validation-schema/character-sheet/background-schema";
import validator from "validator";
import { ValidationError } from "yup";

export const insertBackgroundData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    await backgroundSchema.validate(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error; // For other types of errors
  }

  const {
    personality,
    backstory,
    bonds,
    appearance,
    ideals,
    flaws,
    valuables,
    additional_traits,
  } = data;

  const sanitizedData = {
    personality: validator.escape(personality),
    backstory: validator.escape(backstory),
    bonds: validator.escape(bonds),
    appearance: validator.escape(appearance),
    ideals: validator.escape(ideals),
    flaws: validator.escape(flaws),
    valuables: validator.escape(valuables),
    additional_traits: validator.escape(additional_traits),
  };

  await dbQuery(
    "INSERT INTO background (character_id, personality, backstory, bonds, appearance, ideals, flaws, valuables, additional_traits) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      characterId,
      sanitizedData.personality,
      sanitizedData.backstory,
      sanitizedData.bonds,
      sanitizedData.appearance,
      sanitizedData.ideals,
      sanitizedData.flaws,
      sanitizedData.valuables,
      sanitizedData.additional_traits,
    ]
  );
};
