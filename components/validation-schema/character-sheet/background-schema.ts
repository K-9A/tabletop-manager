import * as Yup from "yup";

interface BackgroundSchema {
    personality: Yup.StringSchema;
    backstory: Yup.StringSchema;
    bonds: Yup.StringSchema;
    appearance: Yup.StringSchema;
    ideals: Yup.StringSchema;
    flaws: Yup.StringSchema;
    valuables: Yup.StringSchema;
    additional_traits: Yup.StringSchema;
  }

//No validation for now, may put in character limit later.
export const backgroundRules:BackgroundSchema = {
    personality: Yup.string().notRequired(),
    backstory: Yup.string().notRequired(),
    bonds: Yup.string().notRequired(),
    appearance: Yup.string().notRequired(),
    ideals: Yup.string().notRequired(),
    flaws: Yup.string().notRequired(),
    valuables: Yup.string().notRequired(),
    additional_traits: Yup.string().notRequired(),
};

export const backgroundSchema = Yup.object({ ...backgroundRules });