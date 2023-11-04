import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import validator from "validator";
import { validSpellSlotsFieldNames } from "@/components/helper/valid-character-fields";
import { updateFieldValidator } from "@/components/helper/update-field-validator";
import { spellSlotsSchema } from "@/components/validation-schema/character-sheet/spell-slots-schema";

const updateSpellSlots = async (req: NextApiRequest, res: NextApiResponse) => {
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
      const spellSlotsData = await dbQuery(
        `SELECT first_available, first_max, second_available, second_max, third_available, third_max, fourth_available, fourth_max, fifth_available, fifth_max, sixth_available, sixth_max, seventh_available, seventh_max, eighth_available, eighth_max, nineth_available, nineth_max
      FROM 
        spell_slots
      WHERE 
        character_id = ?`,
        [characterId]
      );

      if (spellSlotsData.length === 0) {
        return res.status(404).json({ error: "Spell Slots data not found" });
      }

      res.status(200).json({ success: true, data: spellSlotsData[0] });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
    //Update method
  } else if (req.method === "PUT") {
    if (!characterId || !fieldName || !value) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    // Check if the field name is valid
    if (!validSpellSlotsFieldNames.includes(fieldName as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid field name" });
    }

    try {
      await updateFieldValidator(fieldName as string, spellSlotsSchema, value);
      const sanitizedValue = validator.escape(value);


      await dbQuery(
        `UPDATE spell_slots SET ${fieldName} = ? WHERE character_id = ?`,
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
  headersMiddleware(withCreateRateLimit(updateSpellSlots))
);
