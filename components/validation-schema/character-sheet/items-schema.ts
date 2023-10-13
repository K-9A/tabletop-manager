import * as Yup from "yup";

export const itemsSchema = Yup.object({
    items: Yup.array().of(
      Yup.object({
        item: Yup.string().required("Name is required"),
        item_amount: Yup.number()
          .typeError("Must be number")
          .nullable()
          .transform((_, val) => (val !== "" ? Number(val) : null)),
        item_max: Yup.number()
          .typeError("Must be number")
          .nullable()
          .transform((_, val) => (val !== "" ? Number(val) : null)),
      })
    ),
  });