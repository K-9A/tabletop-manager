import { NextApiRequest, NextApiResponse } from "next";
import { dbQuery } from "@/utils/dbQuery";
import handleError from "@/components/helper/handle-error";

//API route for core profile section
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name } = req.body;

      // Use dbQuery to insert/update the core profile in the database.
      //THIS QUERY IS DISABLED UNTIL I CAN ADHERE TO SCHEMA CONSTRAINTS. FOR NOW, USING TEST_CORE TABLE
      // const result = await dbQuery(`
      //     INSERT INTO core_profile (character_name) VALUES (?)
      //     ON DUPLICATE KEY UPDATE character_name = VALUES(character_name)
      // `, [name]);

      const result = await dbQuery(
        `
        INSERT INTO test_core (id, character_name) VALUES (1, ?)
        ON DUPLICATE KEY UPDATE character_name = VALUES(character_name);
            `,
        [name]
      );

      // Respond with success or the inserted/updated id or any other data
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      handleError(error, res);
    }
  } else if (req.method === "GET") {
    try {
      // Assuming you have only one character name with a static id=1 for this example
      const result = await dbQuery(
        `SELECT character_name FROM test_core WHERE id = 1`
      );

      if (result && result.length > 0) {
        res.status(200).json({ success: true, data: result[0].character_name });
      } else {
        res.status(404).json({ success: false, message: "Name not found" });
      }
    } catch (error) {
      handleError(error, res);
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
