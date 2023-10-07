import * as Yup from "yup";

export const combatStatsSchema = Yup.object({
    current_hp: Yup.number()
      .typeError("HP must be a number")
      .min(0, "HP cannot be negative")
      .required("HP is required"),
    max_hp: Yup.number()
      .typeError("Max HP must be a number")
      .min(0, "Max HP cannot be negative")
      .required("Max HP is required"),
    temp_hp: Yup.number()
      .typeError("HP must be a number")
      .min(0, "HP cannot be negative")
      .nullable()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    armor_class: Yup.number()
      .typeError("AC must be a number")
      .min(0, "AC cannot be negative")
      .required("AC is required"),
    hit_dice: Yup.number()
      .typeError("Hit Dice must be a number")
      .min(0, "Hit Dice cannot be negative")
      .nullable()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    max_hit_dice: Yup.number()
      .typeError("Hit Dice must be a number")
      .required("Hit Dice is required")
      .min(0, "Hit Dice cannot be negative"),
    speed: Yup.number()
      .typeError("Speed must be a number")
      .min(0, "Speed cannot be negative")
      .required("Speed is required"),
    initiative: Yup.number()
      .typeError("Initiative must be a number")
      .required("Initiative is required"),
    inspiration: Yup.number()
      .typeError("Inspiration must be a number")
      .min(0, "Inspiration cannot be negative")
      .nullable()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    spell_casting: Yup.number()
      .typeError("Spell Casting must be a number")
      .nullable()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    spell_save: Yup.number()
      .typeError("Spell Save must be a number")
      .required("Spell Save is required"),
    spell_attack: Yup.number()
      .typeError("Spell Attack must be a number")
      .nullable()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
  });