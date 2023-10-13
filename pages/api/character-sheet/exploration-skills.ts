import { NextApiRequest, NextApiResponse } from "next";
import { explorationSkillsSchema } from "@/components/validation-schema/character-sheet/explortation-skills-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { ExplorationTypes } from "@/components/types/api-route-types";

const submitExplorationSkillsData = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    // Type the request body
    const data: ExplorationTypes = req.body;
    try {
      // Extract data from the request body
      const {
        acrobatics,
        animal,
        arcana,
        athletics,
        deception,
        history,
        insight,
        intimidation,
        investigation,
        medicine,
        nature,
        perception,
        performance,
        persuasion,
        religion,
        sleight,
        stealth,
        survival,
        characterId,
      } = data;

      //Use the validator package to sanitize data for SQL querying
      const sanitizedData = {
        acrobatics: validator.escape(acrobatics),
        animal: validator.escape(animal),
        arcana: validator.escape(arcana),
        athletics: validator.escape(athletics),
        deception: validator.escape(deception),
        history: validator.escape(history),
        insight: validator.escape(insight),
        intimidation: validator.escape(intimidation),
        investigation: validator.escape(investigation),
        medicine: validator.escape(medicine),
        nature: validator.escape(nature),
        perception: validator.escape(perception),
        performance: validator.escape(performance),
        persuasion: validator.escape(persuasion),
        religion: validator.escape(religion),
        sleight: validator.escape(sleight),
        stealth: validator.escape(stealth),
        survival: validator.escape(survival),
      };

      console.log(sanitizedData);
      await dbQuery(
        "INSERT INTO exploration_skills (character_id, acrobatics, animal, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleight, stealth, survival) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          characterId,
          sanitizedData.acrobatics,
          sanitizedData.animal,
          sanitizedData.arcana,
          sanitizedData.athletics,
          sanitizedData.deception,
          sanitizedData.history,
          sanitizedData.insight,
          sanitizedData.intimidation,
          sanitizedData.investigation,
          sanitizedData.medicine,
          sanitizedData.nature,
          sanitizedData.perception,
          sanitizedData.performance,
          sanitizedData.persuasion,
          sanitizedData.religion,
          sanitizedData.sleight,
          sanitizedData.stealth,
          sanitizedData.survival,
        ]
      );

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
    withCreateRateLimit(
      validateWithSchema(explorationSkillsSchema, submitExplorationSkillsData)
    )
  )
);
