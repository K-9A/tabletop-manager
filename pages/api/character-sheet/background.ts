import validator from "validator";

export const insertBackgroundData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  //Use YUP schema validator to make sure data structure matches the Formik form front end


    const {
      personality,
      backstory,
      bonds,
      appearance,
      ideals,
      flaws,
      valuables,
      additional_traits,
    } = data as {
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
  }