import { NextApiRequest, NextApiResponse } from "next";
import { combatStatsSchema } from "@/components/validation-schema/character-sheet/combat-stats-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { CombatStatsType } from "@/components/types/api-route-types";

const submitCombatStatsData = async (
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
    const data: CombatStatsType = req.body;

    try {
      // Extract data from the request body
      const {
        current_hp,
        max_hp,
        temp_hp,
        armor_class,
        hit_dice,
        max_hit_dice,
        speed,
        initiative,
        inspiration,
        spell_casting,
        spell_save,
        spell_attack,
        characterId,
      } = data;

      //Use the validator package to sanitize data for SQL querying
      const sanitizedData = {
        current_hp: validator.escape(current_hp),
        max_hp: validator.escape(max_hp),
        temp_hp: validator.escape(temp_hp),
        armor_class: validator.escape(armor_class),
        hit_dice: validator.escape(hit_dice),
        max_hit_dice: validator.escape(max_hit_dice),
        speed: validator.escape(speed),
        initiative: validator.escape(initiative),
        inspiration: validator.escape(inspiration),
        spell_casting: validator.escape(spell_casting),
        spell_save: validator.escape(spell_save),
        spell_attack: validator.escape(spell_attack),
      };

      await dbQuery(
        "INSERT INTO combat_stats (character_id, current_hp, max_hp, temp_hp, armor_class, hit_dice, max_hit_dice, speed, initiative, inspiration, spell_casting, spell_save, spell_attack) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          characterId,
          sanitizedData.current_hp,
          sanitizedData.max_hp,
          sanitizedData.temp_hp,
          sanitizedData.armor_class,
          sanitizedData.hit_dice,
          sanitizedData.max_hit_dice,
          sanitizedData.speed,
          sanitizedData.initiative,
          sanitizedData.inspiration,
          sanitizedData.spell_casting,
          sanitizedData.spell_save,
          sanitizedData.spell_attack,
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
      validateWithSchema(combatStatsSchema, submitCombatStatsData)
    )
  )
);
