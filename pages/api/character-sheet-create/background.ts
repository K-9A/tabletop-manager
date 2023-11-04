import { backgroundSchema } from "@/components/validation-schema/character-sheet/background-schema";
import { ValidationError } from "yup";

export const insertBackgroundData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end
  try {
    const transformedData = backgroundSchema.validateSync(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    const {
      personality,
      backstory,
      bonds,
      appearance,
      ideals,
      flaws,
      valuables,
      additional_traits,
    } = transformedData as {
      personality?: string;
      backstory?: string;
      bonds?: string;
      appearance?: string;
      ideals?: string;
      flaws?: string;
      valuables?: string;
      additional_traits?: string;
    };

    const sanitizedData = {
      personality: personality,
      backstory: backstory,
      bonds: bonds,
      appearance: appearance,
      ideals: ideals,
      flaws: flaws,
      valuables: valuables,
      additional_traits: additional_traits,
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
  } catch (error) {
    if (error instanceof ValidationError) {
      // Handle validation error (e.g., throw it to be caught in the main route)
      throw new Error(error.message);
    }
    throw error;
  }
};
