import * as Yup from "yup";

interface SpellSchema {
  spell_name: Yup.StringSchema;
  spell_description: Yup.StringSchema;
  spell_tier: Yup.StringSchema;
}

export const spellRules: SpellSchema = {
  spell_name: Yup.string().notRequired(),
  spell_description: Yup.string().notRequired(),
  spell_tier: Yup.string().notRequired(),
};

export const spellSchema = Yup.object({ ...spellRules });