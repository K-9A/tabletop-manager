import * as Yup from "yup";

interface SpellsSchema {
  spell_name: Yup.StringSchema;
  spell_description: Yup.StringSchema;
  spell_tier: Yup.StringSchema;
}

export const spellsRules: SpellsSchema = {
  spell_name: Yup.string().notRequired(),
  spell_description: Yup.string().notRequired(),
  spell_tier: Yup.string().notRequired(),
};

export const spellsSchema = Yup.object({ ...spellsRules });