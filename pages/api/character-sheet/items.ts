import validator from "validator";
import { ItemTypes } from "@/components/types/api-route-types";

export const insertItemsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  const { ...itemsObject } = data;

  //Convert the object with numeric keys into an array of skills.
  const itemsArray: ItemTypes[] = Object.values(itemsObject);

  //Use the validator package to sanitize data for SQL querying
  const sanitizedItems = itemsArray.map((item) => [
    characterId,
    validator.escape(item.item_name),
    validator.escape(item.item_description),
    validator.escape(item.item_amount),
    validator.escape(item.item_max),
  ]);

  //Doing bulk query insert. Faster than for looping.
  const placeholders = sanitizedItems.map(() => "(?, ?, ?, ?, ?)").join(", ");

  const query = `INSERT INTO items (character_id, item_name, item_description, item_amount, item_max) VALUES ${placeholders}`;

  // Flatten the array of arrays to match the number of placeholders
  const values = [].concat(...sanitizedItems);

  await dbQuery(query, values);
};
