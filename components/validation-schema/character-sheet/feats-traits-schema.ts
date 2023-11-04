import * as Yup from 'yup';

interface FeatsTraitsSchema {
  feats_traits: Yup.StringSchema;
  weapon_proficiency: Yup.StringSchema;
  armor_proficiency: Yup.StringSchema;
  buffs: Yup.StringSchema;
  debuffs: Yup.StringSchema;
  other_proficiency: Yup.StringSchema;
}

// No validation for now, may put in character limit later.
export const featsTraitsRules: FeatsTraitsSchema = {
  feats_traits: Yup.string().notRequired(),
  weapon_proficiency: Yup.string().notRequired(),
  armor_proficiency: Yup.string().notRequired(),
  buffs: Yup.string().notRequired(),
  debuffs: Yup.string().notRequired(),
  other_proficiency: Yup.string().notRequired(),
};

export const featsTraitsSchema = Yup.object({ ...featsTraitsRules });
