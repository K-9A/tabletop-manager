import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import validator from "validator";
import { validAbilityScoresFieldNames } from "@/components/helper/valid-character-fields";
import { updateFieldValidator } from "@/components/helper/update-field-validator";
import { abilityScoresSchema } from "@/components/validation-schema/character-sheet/ability-scores-schema";


const updateAbilityScores = async (req: NextApiRequest, res: NextApiResponse) => {
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
      const abilityScoresData = await dbQuery(
        `SELECT str_score, dex_score, con_score, int_score, wis_score, chr_score, str_mod, dex_mod, con_mod, int_mod, wis_mod, chr_mod, str_save, dex_save, con_save, int_save, wis_save, chr_save, passive_perception
      FROM 
        ability_scores
      WHERE 
        character_id = ?`,
        [characterId]
      );

      if (abilityScoresData.length === 0) {
        return res.status(404).json({ error: "Core Profile data not found" });
      }

      res.status(200).json({ success: true, data: abilityScoresData[0] });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
    //Update method
  } else if (req.method === "PUT") {
    if (!characterId || !fieldName || !value) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    // Check if the field name is valid
    if (!validAbilityScoresFieldNames.includes(fieldName as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid field name" });
    }

    try {
      await updateFieldValidator(fieldName as string, abilityScoresSchema, value);
      const sanitizedValue = validator.escape(value);


      await dbQuery(
        `UPDATE ability_scores SET ${fieldName} = ? WHERE character_id = ?`,
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
  headersMiddleware(withCreateRateLimit(updateAbilityScores))
);
