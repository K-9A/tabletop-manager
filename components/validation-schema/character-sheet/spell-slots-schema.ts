import * as Yup from 'yup';

const yupSpellValidation: Yup.NumberSchema<number | null> = Yup.number()
  .typeError("Must be a number")
  .nullable()
  .transform((_, val) => (val !== "" ? Number(val) : null));

interface SpellSlotsSchema {
  first_available: typeof yupSpellValidation;
  first_max: typeof yupSpellValidation;
  second_available: typeof yupSpellValidation;
  second_max: typeof yupSpellValidation;
  third_available: typeof yupSpellValidation;
  third_max: typeof yupSpellValidation;
  fourth_available: typeof yupSpellValidation;
  fourth_max: typeof yupSpellValidation;
  fifth_available: typeof yupSpellValidation;
  fifth_max: typeof yupSpellValidation;
  sixth_available: typeof yupSpellValidation;
  sixth_max: typeof yupSpellValidation;
  seventh_available: typeof yupSpellValidation;
  seventh_max: typeof yupSpellValidation;
  eighth_available: typeof yupSpellValidation;
  eighth_max: typeof yupSpellValidation;
  nineth_available: typeof yupSpellValidation;
  nineth_max: typeof yupSpellValidation;
}

export const spellSlotsRules: SpellSlotsSchema = {
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
};

export const spellSlotsSchema = Yup.object({ ...spellSlotsRules });