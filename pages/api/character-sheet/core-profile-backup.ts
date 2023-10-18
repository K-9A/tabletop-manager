import { NextApiRequest, NextApiResponse } from "next";
import { coreProfileSchema } from "@/components/validation-schema/character-sheet/core-profile-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/custom-hooks/character-sheet-hooks/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { CoreProfileTypes } from "@/components/types/api-route-types";



const submitCoreProfileData = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    // Type the request body
    const data: CoreProfileTypes = req.body;

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
        characterId,
      } = data;

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

      await dbQuery(
        "INSERT INTO core_profile (character_id, character_name, race, class, affinity, proficiency, char_level, current_exp, next_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          characterId,
          sanitizedData.name,
          sanitizedData.race,
          sanitizedData.char_class,
          sanitizedData.affinity,
          sanitizedData.proficiency,
          sanitizedData.char_level,
          sanitizedData.experience,
          sanitizedData.next_level,
        ]
      );

      res.status(200).json({ success: true });
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
      validateWithSchema(coreProfileSchema, submitCoreProfileData)
    )
  )
);
