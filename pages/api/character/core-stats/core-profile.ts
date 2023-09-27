import { NextApiRequest, NextApiResponse } from "next";
import { dbQuery } from "@/utils/dbQuery";
import {
  isErrorWithMessage,
  isErrorWithResponse,
} from "@/components/types/error-typeguard";


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
      // Use type guards to narrow the error type
      if (isErrorWithResponse(error)) {
        res
          .status(500)
          .json({ success: false, message: error.response.data.error });
        console.error("Database error:", error);
      } else if (isErrorWithMessage(error)) {
        res.status(500).json({ success: false, message: error.message });
        console.error("Database error:", error);
      } else {
        res
          .status(500)
          .json({ success: false, message: "An unexpected error occurred." });
        console.error("Database error:", error);
      }
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
