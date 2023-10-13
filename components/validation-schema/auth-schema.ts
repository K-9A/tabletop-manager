import * as Yup from "yup";

export const loginSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  });

export const registerSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  });