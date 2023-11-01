import * as Yup from "yup";

interface CoreProfileSchema {
  name: Yup.StringSchema;
  char_class: Yup.StringSchema;
  race: Yup.StringSchema;
  proficiency: Yup.NumberSchema;
  char_level: Yup.NumberSchema;
  experience: Yup.NumberSchema;
  next_level: Yup.NumberSchema;
}

export const coreProfileRules: CoreProfileSchema = {
    name: Yup.string().required("Character Name is required"),
    char_class: Yup.string().required("Class is required"),
    race: Yup.string().required("Race is required"),
    proficiency: Yup.number()
      .typeError("Proficiency must be a number")
      .min(2, "Proficiency must be least 2")
      .max(6, "Proficiency cannot exceed 6")
      .required("Proficiency is required"),
    char_level: Yup.number()
      .typeError("Level must be a number")
      .min(1, "Level should be at least 1")
      .max(20, "Level cannot exceed 20")
      .required("Level is required"),
    experience: Yup.number()
      .typeError("Experience must be a number")
      .min(0, "Experience cannot be negative")
      .required("Experience is required"),
    next_level: Yup.number()
      .typeError("Next Level must be a number")
      .min(0, "Next Level cannot be negative")
      .required("Next Level is required"),
  };

  export const coreProfileSchema = Yup.object({ ...coreProfileRules });