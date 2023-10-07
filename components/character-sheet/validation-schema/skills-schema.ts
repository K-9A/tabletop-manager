import * as Yup from "yup";

export const skillsSchema = Yup.object({
    skills: Yup.array().of(
      Yup.object({ skill_name: Yup.string().required("Name is required") })
    ),
  });