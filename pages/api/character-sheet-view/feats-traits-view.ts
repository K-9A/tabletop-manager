import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import validator from "validator";
import { validFeatsTraitsFieldNames } from "@/components/helper/valid-character-fields";
import { updateFieldValidator } from "@/components/helper/update-field-validator";
import { featsTraitsSchema } from "@/components/validation-schema/character-sheet/feats-traits-schema";

const updateFeatsTraits = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const { characterId, fieldName, value } = req.query;

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (!characterId) {
    return res.status(400).json({ error: "Character ID not provided" });
  }

  if (req.method === "GET") {
    try {
      const featsTraitsData = await dbQuery(
        `SELECT weapon_proficiency, armor_proficiency, feats_traits, buffs, debuffs, other_proficiency
      FROM 
        feats_traits
      WHERE 
        character_id = ?`,
        [characterId]
      );

      if (featsTraitsData.length === 0) {
        return res.status(404).json({ error: "Feats Traits data not found" });
      }


      res.status(200).json({ success: true, data: featsTraitsData[0] });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
    //Update method
  } else if (req.method === "PUT") {
    if (!characterId || !fieldName || !value) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    // Check if the field name is valid
    if (!validFeatsTraitsFieldNames.includes(fieldName as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid field name" });
    }

    try {
      await updateFieldValidator(fieldName as string, featsTraitsSchema, value);
      const sanitizedValue = validator.escape(value);

      await dbQuery(
        `UPDATE feats_traits SET ${fieldName} = ? WHERE character_id = ?`,
        [sanitizedValue, characterId]
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(withCreateRateLimit(updateFeatsTraits))
);
