import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import validator from "validator";
import { validItemsFieldNames } from "@/components/helper/valid-character-fields";
import { updateFieldValidator } from "@/components/helper/update-field-validator";
import { itemsSchema } from "@/components/validation-schema/character-sheet/items-schema";

interface InsertResult {
  insertId: number;
}

const updateItems = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const { characterId, itemId, fieldName, value } = req.query;

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
      const itemsData = await dbQuery(
        `SELECT item_id, character_id, item_name, item_description, item_amount, item_max
      FROM 
      items
      WHERE 
        character_id = ?`,
        [characterId]
      );

      if (itemsData.length === 0) {
        return res.status(404).json({ error: "Items data not found" });
      }

      res.status(200).json({ success: true, data: itemsData });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
  //Insert method
  else if (req.method === "POST") {
    try {
      // Insert a new item with empty fields for this character
      const result = (await dbQuery(
        `INSERT INTO items (character_id, item_name, item_description, item_amount, item_max) VALUES (?, '', '', '', '')`,
        [characterId]
      )) as InsertResult;
  
      // Send back the ID of the newly created item
      res.status(201).json({ success: true, item_id: result.insertId });
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
    if (!validItemsFieldNames.includes(fieldName as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid field name" });
    }

    try {
      await updateFieldValidator(fieldName as string, itemsSchema, value);
      const sanitizedValue = validator.escape(value);

      await dbQuery(
        `UPDATE items SET ${fieldName} = ? WHERE character_id = ? AND item_id = ?`,
        [sanitizedValue, characterId, itemId]
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
  //Delete method
  else if (req.method === "DELETE") {
    if (!itemId) {
      return res.status(400).json({ error: "Item ID not provided" });
    }

    try {
      await dbQuery(
        `DELETE FROM items WHERE character_id = ? AND item_id = ?`,
        [characterId, itemId]
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
  headersMiddleware(withCreateRateLimit(updateItems))
);
