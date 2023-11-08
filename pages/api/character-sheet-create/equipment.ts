import validator from "validator";
import { EquipmentType } from "@/components/types/sheet-types/field-types";

export const insertEquipmentData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  // Extract the characterId and the skills object from req.body.
  const { ...equipmentObject } = data;

  //Convert the object with numeric keys into an array of skills.
  const equipmentArray: EquipmentType[] = Object.values(equipmentObject);

  //Use the validator package to sanitize data for SQL querying
  const sanitizedEquipment = equipmentArray.map((equipment) => [
    characterId,
    validator.escape(equipment.equipment_name),
    validator.escape(equipment.equipment_category),
    validator.escape(equipment.equipment_properties),
  ]);

  //Doing bulk query insert. Faster than for looping.
  const placeholders = sanitizedEquipment.map(() => "(?, ?, ?, ?)").join(", ");

  const query = `INSERT INTO equipment (character_id, equipment_name, equipment_category, equipment_properties) VALUES ${placeholders}`;

  // Flatten the array of arrays to match the number of placeholders
  const values = [].concat(...sanitizedEquipment);

  await dbQuery(query, values);
};
