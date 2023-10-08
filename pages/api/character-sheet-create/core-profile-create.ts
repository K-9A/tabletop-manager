import { NextApiRequest, NextApiResponse } from "next";
import { coreProfileSchema } from "@/components/character-sheet/validation-schema/core-profile-schema";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";

//Use the Yup Schema to validate inputs
const validatedCoreProfileCreate = (schema, handler) => async (req, res) => {
  try {
    await schema.validate(req.body);
    return handler(req, res); // Proceed to the main handler if validation passes
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send error response if validation fails
  }
};

const submitCoreProfileData = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    try {
      // Extract data from the request body
      const {
        name,
        char_class,
        race,
        proficiency,
        char_level,
        experience,
        next_level,
        affinity,
      } = req.body;

      //Use the validator package to sanitize data for SQL querying
      const sanitizedData = {
        name: validator.escape(name),
        char_class: validator.escape(char_class),
        race: validator.escape(race),
        proficiency: validator.escape(proficiency),
        char_level: validator.escape(char_level),
        experience: validator.escape(experience),
        next_level: validator.escape(next_level),
        affinity: validator.escape(affinity),
      };

      console.log(
        sanitizedData.name,
        sanitizedData.char_class,
        sanitizedData.race,
        sanitizedData.proficiency,
        sanitizedData.char_level,
        sanitizedData.experience,
        sanitizedData.next_level,
        sanitizedData.affinity
      );

      //await dbQuery("INSERT INTO coreProfileTable SET ?", [coreProfileData]);
      //res.status(200).json({ success: true });
      res.status(200).json({ success: true, message: "Data received!" });
    } catch (error) {
      //Something went wrong
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(
    withCreateRateLimit(
      validatedCoreProfileCreate(coreProfileSchema, submitCoreProfileData)
    )
  )
);
