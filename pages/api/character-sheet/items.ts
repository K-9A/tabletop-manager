import { NextApiRequest, NextApiResponse } from "next";
import { itemsSchema } from "@/components/validation-schema/character-sheet/items-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { ItemTypes } from "@/components/types/api-route-types";

const submitItemsData = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    try {
      // Extract the characterId and the skills object from req.body.
      const { characterId, ...itemsObject } = req.body;

      //Convert the object with numeric keys into an array of skills.
      const itemsArray: ItemTypes[] = Object.values(itemsObject);

      //Use the validator package to sanitize data for SQL querying
      const sanitizedItems = itemsArray.map((item) => [
        characterId,
        validator.escape(item.item_name),
        validator.escape(item.item_description),
        validator.escape(item.item_amount),
        validator.escape(item.item_max),
      ]);

      //Doing bulk query insert. Faster than for looping.
      const placeholders = sanitizedItems.map(() => '(?, ?, ?, ?, ?)').join(', ');

      const query = `INSERT INTO items (character_id, item_name, item_description, item_amount, item_max) VALUES ${placeholders}`;
      
      // Flatten the array of arrays to match the number of placeholders
      const values = [].concat(...sanitizedItems);
      
      await dbQuery(query, values);

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
    withCreateRateLimit(validateWithSchema(itemsSchema, submitItemsData))
  )
);
