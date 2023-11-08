import * as Yup from "yup";

interface ItemsSchema {
  item_name: Yup.StringSchema;
  item_description: Yup.StringSchema;
  item_amount: Yup.StringSchema;
  item_max: Yup.StringSchema;
}

export const itemsRules: ItemsSchema = {
  item_name: Yup.string().notRequired(),
  item_description: Yup.string().notRequired(),
  item_amount: Yup.string().notRequired(),
  item_max: Yup.string().notRequired(),
};

export const itemsSchema = Yup.object({ ...itemsRules });
