import { NextApiRequest, NextApiResponse } from "next";
import { skillsSchema } from "@/components/validation-schema/character-sheet/skills-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { SkillTypes } from "@/components/types/api-route-types";

const submitSkillsData = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    try {
      // Extract the characterId and the skills object from req.body.
      const { characterId, ...skillsObject } = req.body;

      //Convert the object with numeric keys into an array of skills.
      const skillsArray: SkillTypes[] = Object.values(skillsObject);

      //Use the validator package to sanitize data for SQL querying
      const sanitizedSkills = skillsArray.map((skill) => [
        characterId,
        validator.escape(skill.skill_name),
        validator.escape(skill.skill_description),
        validator.escape(skill.skill_cooldown),
        validator.escape(skill.skill_available),
      ]);

      //Doing bulk query insert. Faster than for looping.
      const placeholders = sanitizedSkills.map(() => '(?, ?, ?, ?, ?)').join(', ');

      const query = `INSERT INTO skills (character_id, skill_name, skill_description, skill_cooldown, skill_available) VALUES ${placeholders}`;
      
      // Flatten the array of arrays to match the number of placeholders
      const values = [].concat(...sanitizedSkills);
      
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
    withCreateRateLimit(validateWithSchema(skillsSchema, submitSkillsData))
  )
);
