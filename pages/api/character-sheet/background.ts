import { NextApiRequest, NextApiResponse } from "next";
import { backgroundSchema } from "@/components/character-sheet/validation-schema/background-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";

const submitBackgroundData = async (
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
    try {
      // Extract data from the request body
      const {
        personality,
        backstory,
        bonds,
        appearance,
        ideals,
        flaws,
        valuables,
        additional_traits,
        characterId,
      } = req.body;

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
      validateWithSchema(backgroundSchema, submitBackgroundData)
    )
  )
);

