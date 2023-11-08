import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import validator from "validator";
import { validEquipmentFieldNames } from "@/components/helper/valid-character-fields";
import { updateFieldValidator } from "@/components/helper/update-field-validator";
import { equipmentSchema } from "@/components/validation-schema/character-sheet/equipment-schema";

interface InsertResult {
  insertId: number;
}

const updateEquipment = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const { characterId, equipmentId, fieldName, value } = req.query;

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
      const equipmentData = await dbQuery(
        `SELECT equipment_id, character_id, equipment_name, equipment_category, equipment_properties
      FROM 
      equipment
      WHERE 
        character_id = ?`,
        [characterId]
      );

      if (equipmentData.length === 0) {
        return res.status(404).json({ error: "Equipment data not found" });
      }

      res.status(200).json({ success: true, data: equipmentData });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
  //Insert method
  else if (req.method === "POST") {
    try {
      // Insert a new equipment with empty fields for this character
      const result = (await dbQuery(
        `INSERT INTO equipment (character_id, equipment_name, equipment_category, equipment_properties) VALUES (?, '', '', '')`,
        [characterId]
      )) as InsertResult;

      // Send back the ID of the newly created equipment
      res.status(201).json({ success: true, equipment_id: result.insertId });
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
    if (!validEquipmentFieldNames.includes(fieldName as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid field name" });
    }

    try {
      await updateFieldValidator(fieldName as string, equipmentSchema, value);
      const sanitizedValue = validator.escape(value);

      await dbQuery(
        `UPDATE equipment SET ${fieldName} = ? WHERE character_id = ? AND equipment_id = ?`,
        [sanitizedValue, characterId, equipmentId]
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
  //Delete method
  else if (req.method === "DELETE") {
    if (!equipmentId) {
      return res.status(400).json({ error: "Equipment ID not provided" });
    }

    try {
      await dbQuery(
        `DELETE FROM equipment WHERE character_id = ? AND equipment_id = ?`,
        [characterId, equipmentId]
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
  headersMiddleware(withCreateRateLimit(updateEquipment))
);
