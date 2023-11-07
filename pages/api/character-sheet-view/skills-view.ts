import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import validator from "validator";
import { validSkillsFieldNames } from "@/components/helper/valid-character-fields";
import { updateFieldValidator } from "@/components/helper/update-field-validator";
import { skillsSchema } from "@/components/validation-schema/character-sheet/skills-schema";

interface InsertResult {
  insertId: number;
}

const updateSkills = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const { characterId, skillId, fieldName, value } = req.query;

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
      const skillsData = await dbQuery(
        `SELECT skill_id, character_id, skill_name, skill_description, skill_cooldown, skill_available
      FROM 
      skills
      WHERE 
        character_id = ?`,
        [characterId]
      );

      if (skillsData.length === 0) {
        return res.status(404).json({ error: "Skills data not found" });
      }

      res.status(200).json({ success: true, data: skillsData[0] });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
  //Insert method
  else if (req.method === "POST") {
    try {
      // Assuming you're sending the skill data in the body of the request
      const { skill_name, skill_description, skill_cooldown, skill_available } =
        req.body;

      // You might want to validate the input here as well

      const result = (await dbQuery(
        `INSERT INTO skills (character_id, skill_name, skill_description, skill_cooldown, skill_available) VALUES (?, ?, ?, ?, ?)`,
        [
          characterId,
          skill_name,
          skill_description,
          skill_cooldown,
          skill_available,
        ]
      )) as InsertResult;
      // Send back the ID of the newly created skill
      res.status(201).json({ success: true, skill_id: result.insertId });
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
    if (!validSkillsFieldNames.includes(fieldName as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid field name" });
    }

    try {
      await updateFieldValidator(fieldName as string, skillsSchema, value);
      const sanitizedValue = validator.escape(value);

      await dbQuery(
        `UPDATE skills SET ${fieldName} = ? WHERE character_id = ? AND skill_id = ?`,
        [sanitizedValue, characterId, skillId]
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
  //Delete method
  else if (req.method === "DELETE") {
    if (!skillId) {
      return res.status(400).json({ error: "Skill ID not provided" });
    }

    try {
      await dbQuery(
        `DELETE FROM skills WHERE character_id = ? AND skill_id = ?`,
        [characterId, skillId]
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
  headersMiddleware(withCreateRateLimit(updateSkills))
);
