import * as Yup from "yup";

interface ItemSchema {
  item_name: Yup.StringSchema;
  item_description: Yup.StringSchema;
  item_amount: Yup.NumberSchema | null;
  item_max: Yup.NumberSchema | null;
}

export const itemRules: ItemSchema = {
  item_name: Yup.string().notRequired(),
  item_description: Yup.string().notRequired(),
  item_amount: Yup.number()
    .typeError("Must be a number")
    .nullable()
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  item_max: Yup.number()
    .typeError("Must be a number")
    .nullable()
    .transform((_, val) => (val !== "" ? Number(val) : null)),
};

export const itemSchema = Yup.object({ ...itemRules });