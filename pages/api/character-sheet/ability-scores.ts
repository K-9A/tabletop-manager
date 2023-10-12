import { NextApiRequest, NextApiResponse } from "next";
import { abilityScoresSchema } from "@/components/character-sheet/validation-schema/ability-scores-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { AbilityScoreTypes } from "@/components/types/api-route-types";

const submitAbilityScoresData = async (
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
    const data: AbilityScoreTypes = req.body;

    try {
      // Extract data from the request body
      const {
        str_score,
        dex_score,
        con_score,
        int_score,
        wis_score,
        chr_score,
        str_mod,
        dex_mod,
        con_mod,
        int_mod,
        wis_mod,
        chr_mod,
        str_save,
        dex_save,
        con_save,
        int_save,
        wis_save,
        chr_save,
        passive_perception,
        characterId,
      } = data;

      //Use the validator package to sanitize data for SQL querying
      const sanitizedData = {
        str_score: validator.escape(str_score),
        dex_score: validator.escape(dex_score),
        con_score: validator.escape(con_score),
        int_score: validator.escape(int_score),
        wis_score: validator.escape(wis_score),
        chr_score: validator.escape(chr_score),
        str_mod: validator.escape(str_mod),
        dex_mod: validator.escape(dex_mod),
        con_mod: validator.escape(con_mod),
        int_mod: validator.escape(int_mod),
        wis_mod: validator.escape(wis_mod),
        chr_mod: validator.escape(chr_mod),
        str_save: validator.escape(str_save),
        dex_save: validator.escape(dex_save),
        con_save: validator.escape(con_save),
        int_save: validator.escape(int_save),
        wis_save: validator.escape(wis_save),
        chr_save: validator.escape(chr_save),
        passive_perception: validator.escape(passive_perception),
      };

      await dbQuery(
        "INSERT INTO ability_scores (character_id, strength_score, dexterity_score, con_score, int_score, wis_score, chr_score, str_mod, dex_mod, con_mod, int_mod, wis_mod, chr_mod, str_save, dex_save, con_save, int_save, wis_save, chr_save, passive_perception) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          characterId,
          sanitizedData.str_score,
          sanitizedData.dex_score,
          sanitizedData.con_score,
          sanitizedData.int_score,
          sanitizedData.wis_score,
          sanitizedData.chr_score,
          sanitizedData.str_mod,
          sanitizedData.dex_mod,
          sanitizedData.con_mod,
          sanitizedData.int_mod,
          sanitizedData.wis_mod,
          sanitizedData.chr_mod,
          sanitizedData.str_save,
          sanitizedData.dex_save,
          sanitizedData.con_save,
          sanitizedData.int_save,
          sanitizedData.wis_save,
          sanitizedData.chr_save,
          sanitizedData.passive_perception,
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
      validateWithSchema(abilityScoresSchema, submitAbilityScoresData)
    )
  )
);
