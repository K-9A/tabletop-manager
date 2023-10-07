import * as Yup from "yup";

const yupSpellValidation = Yup.number()
  .typeError("Slot must be number")
  .nullable()
  .transform((_, val) => (val !== "" ? Number(val) : null));

export const spellSlotsSchema = Yup.object({
  first_available: yupSpellValidation,
  first_max: yupSpellValidation,
  second_available: yupSpellValidation,
  second_max: yupSpellValidation,
  third_available: yupSpellValidation,
  third_max: yupSpellValidation,
  fourth_available: yupSpellValidation,
  fourth_max: yupSpellValidation,
  fifth_available: yupSpellValidation,
  fifth_max: yupSpellValidation,
  sixth_available: yupSpellValidation,
  sixth_max: yupSpellValidation,
  seventh_available: yupSpellValidation,
  seventh_max: yupSpellValidation,
  eighth_available: yupSpellValidation,
  eighth_max: yupSpellValidation,
  nineth_available: yupSpellValidation,
  nineth_max: yupSpellValidation,
});
