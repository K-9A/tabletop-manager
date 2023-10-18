import { NextApiRequest, NextApiResponse } from "next";
import { spellsSchema } from "@/components/validation-schema/character-sheet/spells-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/custom-hooks/character-sheet-hooks/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { SpellTypes } from "@/components/types/api-route-types";

const submitSpellsData = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    try {
      // Extract the characterId and the skills object from req.body.
      const { characterId, ...spellsObject } = req.body;

      //Convert the object with numeric keys into an array of skills.
      const spellsArray: SpellTypes[] = Object.values(spellsObject);

      //Use the validator package to sanitize data for SQL querying
      const sanitizedSpells = spellsArray.map((spell) => [
        characterId,
        validator.escape(spell.spell_name),
        validator.escape(spell.spell_description),
        validator.escape(spell.spell_tier),
      ]);


      //Doing bulk query insert. Faster than for looping.
      const placeholders = sanitizedSpells.map(() => '(?, ?, ?, ?)').join(', ');

      const query = `INSERT INTO spells (character_id, spell_name, spell_description, spell_tier) VALUES ${placeholders}`;
      
      // Flatten the array of arrays to match the number of placeholders
      const values = [].concat(...sanitizedSpells);
      
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
    withCreateRateLimit(validateWithSchema(spellsSchema, submitSpellsData))
  )
);
