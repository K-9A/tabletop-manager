import { ItemType } from "@/components/types/sheet-types/field-types";

export const insertItemsData = async (
  data,
  characterId,
  dbQuery: Function
) => {
  const { ...itemsObject } = data;

  //Convert the object with numeric keys into an array of items.
  const itemsArray: ItemType[] = Object.values(itemsObject);

  //Use the validator package to sanitize data for SQL querying
  const sanitizedItems = itemsArray.map((item) => [
    characterId,
    item.item_name,
    item.item_description,
    item.item_amount, 
    item.item_max,
  ]);

  //Doing bulk query insert. Faster than for looping.
  const placeholders = sanitizedItems.map(() => "(?, ?, ?, ?, ?)").join(", ");

  const query = `INSERT INTO items (character_id, item_name, item_description, item_amount, item_max) VALUES ${placeholders}`;

  // Flatten the array of arrays to match the number of placeholders
  const values = [].concat(...sanitizedItems);

  await dbQuery(query, values);
};
