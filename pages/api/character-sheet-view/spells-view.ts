import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import validator from "validator";
import { validSpellsFieldNames } from "@/components/helper/valid-character-fields";
import { updateFieldValidator } from "@/components/helper/update-field-validator";
import { spellsSchema } from "@/components/validation-schema/character-sheet/spells-schema";

interface InsertResult {
  insertId: number;
}

const updateSpells = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const { characterId, spellId, fieldName, value } = req.query;

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
      const spellsData = await dbQuery(
        `SELECT spell_id, character_id, spell_name, spell_description, spell_tier
      FROM 
      spells
      WHERE 
        character_id = ?`,
        [characterId]
      );

      if (spellsData.length === 0) {
        return res.status(404).json({ error: "Spells data not found" });
      }

      res.status(200).json({ success: true, data: spellsData });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
  //Insert method
  else if (req.method === "POST") {
    try { 
      // Insert a new entry with empty fields for this character
      const result = (await dbQuery(
        `INSERT INTO spells (character_id, spell_name, spell_description, spell_tier) VALUES (?, '', '', '')`,
        [characterId]
      )) as InsertResult;
  
      // Send back the ID of the newly created spell
      res.status(201).json({ success: true, spell_id: result.insertId });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
  //Update method
  else if (req.method === "PUT") {
    if (!characterId || !fieldName || !value) {
      return res.status(400).json({ error: "Missing parameters" });
    }
    // Check if the field name is valid
    if (!validSpellsFieldNames.includes(fieldName as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid field name" });
    }

    try {
      await updateFieldValidator(fieldName as string, spellsSchema, value);
      const sanitizedValue = validator.escape(value);

      await dbQuery(
        `UPDATE spells SET ${fieldName} = ? WHERE character_id = ? AND spell_id = ?`,
        [sanitizedValue, characterId, spellId]
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
  //Delete method
  else if (req.method === "DELETE") {
    if (!spellId) {
      return res.status(400).json({ error: "Spell ID not provided" });
    }

    try {
      await dbQuery(
        `DELETE FROM spells WHERE character_id = ? AND spell_id = ?`,
        [characterId, spellId]
      );

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(withCreateRateLimit(updateSpells))
);
