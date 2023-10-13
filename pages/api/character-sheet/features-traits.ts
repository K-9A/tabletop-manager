import { NextApiRequest, NextApiResponse } from "next";
import { featsTraitsSchema } from "@/components/validation-schema/character-sheet/feats-traits-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { FeaturesTraitsTypes } from "@/components/types/api-route-types";

const submitFeatsTraitsData = async (
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
    const data: FeaturesTraitsTypes = req.body;

    try {
      // Extract data from the request body
      const {
        weapon_proficiency,
        armor_proficiency,
        feats_traits,
        buffs,
        debuffs,
        other_proficiency,
        characterId,
      } = data;

      //Use the validator package to sanitize data for SQL querying
      const sanitizedData = {
        weapon_proficiency: validator.escape(weapon_proficiency),
        armor_proficiency: validator.escape(armor_proficiency),
        feats_traits: validator.escape(feats_traits),
        buffs: validator.escape(buffs),
        debuffs: validator.escape(debuffs),
        other_proficiency: validator.escape(other_proficiency),
      };

      await dbQuery(
        "INSERT INTO feats_traits (character_id, weapon_proficiency, armor_proficiency, features_traits, buffs, debuffs, other_proficiency) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          characterId,
          sanitizedData.weapon_proficiency,
          sanitizedData.armor_proficiency,
          sanitizedData.feats_traits,
          sanitizedData.buffs,
          sanitizedData.debuffs,
          sanitizedData.other_proficiency,
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
      validateWithSchema(featsTraitsSchema, submitFeatsTraitsData)
    )
  )
);
