import { NextApiRequest, NextApiResponse } from "next";
import { equipmentSchema } from "@/components/character-sheet/validation-schema/equipment-schema";
import validateWithSchema from "@/components/helper/validationMiddleware";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import validator from "validator";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { EquipmentTypes } from "@/components/types/api-route-types";

const submitEquipmentData = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    try {
      // Extract the characterId and the skills object from req.body.
      const { characterId, ...equipmentObject } = req.body;

      //Convert the object with numeric keys into an array of skills.
      const equipmentArray: EquipmentTypes[] = Object.values(equipmentObject);

      //Use the validator package to sanitize data for SQL querying
      const sanitizedEquipment = equipmentArray.map((equipment) => [
        characterId,
        validator.escape(equipment.equipment_name),
        validator.escape(equipment.equipment_category),
        validator.escape(equipment.equipment_properties),
      ]);

      //Doing bulk query insert. Faster than for looping.
      const placeholders = sanitizedEquipment.map(() => '(?, ?, ?, ?)').join(', ');

      const query = `INSERT INTO equipment (character_id, equipment_name, equipment_category, equipment_properties) VALUES ${placeholders}`;
      
      // Flatten the array of arrays to match the number of placeholders
      const values = [].concat(...sanitizedEquipment);
      
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
    withCreateRateLimit(validateWithSchema(equipmentSchema, submitEquipmentData))
  )
);
