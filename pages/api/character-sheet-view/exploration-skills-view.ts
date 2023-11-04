import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import validator from "validator";
import { validExplorationSkillsFieldNames } from "@/components/helper/valid-character-fields";
import { updateFieldValidator } from "@/components/helper/update-field-validator";
import { explorationSkillsSchema } from "@/components/validation-schema/character-sheet/explortation-skills-schema";

const updateExplorationSkills = async (req: NextApiRequest, res: NextApiResponse) => {
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
      const explorationSkillsData = await dbQuery(
        `SELECT acrobatics, animal, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleight, stealth, survival
      FROM 
        exploration_skills
      WHERE 
        character_id = ?`,
        [characterId]
      );

      if (explorationSkillsData.length === 0) {
        return res.status(404).json({ error: "Exploration Skills data not found" });
      }

      res.status(200).json({ success: true, data: explorationSkillsData[0] });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
    //Update method
  } else if (req.method === "PUT") {
    if (!characterId || !fieldName || !value) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    // Check if the field name is valid
    if (!validExplorationSkillsFieldNames.includes(fieldName as string)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid field name" });
    }

    try {
      await updateFieldValidator(fieldName as string, explorationSkillsSchema, value);
      const sanitizedValue = validator.escape(value);


      await dbQuery(
        `UPDATE exploration_skills SET ${fieldName} = ? WHERE character_id = ?`,
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
  headersMiddleware(withCreateRateLimit(updateExplorationSkills))
);
