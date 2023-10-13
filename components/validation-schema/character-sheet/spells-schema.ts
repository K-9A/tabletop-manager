import * as Yup from "yup";

export const spellsSchema = Yup.object({
    spells: Yup.array().of(
      Yup.object({ spell_name: Yup.string().required("Name is required") })
    ),
  });