import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/custom-hooks/character-sheet-hooks/submission/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { OkPacketParams } from "mysql2"; //For Typescript

import { insertCoreProfileData } from "./core-profile";


const submitCharacter = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    const {
      userId,
      coreProfile,
      featsTraits,
      background,
      abilityScores,
      combatStats,
      explorationSkills,
      skills,
      spells,
      spellSlots,
      equipment,
      items,
    } = req.body;

    try {
      // Start database transaction
      await dbQuery("START TRANSACTION");
      
      //Create the parent table in the MySQL schema, and grab a character_id for other sections to use
      const result = await dbQuery("INSERT INTO character_sheet (user_id) VALUES (?)", [userId]);
      const characterId = (result as any).insertId;


      // Insert data for each subsection
      await insertCoreProfileData(coreProfile, characterId, dbQuery);

      // Commit the transaction
      await dbQuery("COMMIT");

      res.status(200).json({ success: true, characterId });
    } catch (error) {
      // If an error occurs, rollback the transaction
      await dbQuery("ROLLBACK");
      
      if (error.message.includes("Validation Error")) {
        // Send a specific response for validation errors
        res.status(400).json({ success: false, error: error.message });
      } else {
        // Handle other types of errors
        res.status(500).json({ success: false, error: error.message });
      }
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export default loggerMiddleware(
  headersMiddleware(
    withCreateRateLimit(
      submitCharacter
    )
  )
);
