import React from "react";
import Link from "next/link";
import axios from "@/utils/axios-instance";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useMemoizedAlert } from "./layout/alert";
import { ErrorResponse, MessageError } from "./types/error-types";
import * as Yup from "yup";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import AuthErrorMessage from "./helper/auth-error";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});

export default function Register() {
  //Router used for redirecting user after registration.
  const router = useRouter();

  //Alert component
  const addAlertMemo = useMemoizedAlert();

  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  // Typeguard for error functions
  function isErrorWithResponse(error: any): error is ErrorResponse {
    return (
      error && error.response && typeof error.response.data.error === "string"
    );
  }

  function isErrorWithMessage(error: any): error is MessageError {
    return error && typeof error.message === "string";
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        //Point Axios to the Register API route.
        const response = await axios.post("/register", {
          username: values.username,
          email: values.email,
          password: values.password,
        });

        if (response.status === 201) {
          console.log("Registration successful!");
          addAlertMemo("Registration successful!", "success");
          setTimeout(() => {
            router.push("/login");
          }, 1000); // Delay of 1 second
        }
      } catch (error) {
        if (isErrorWithResponse(error)) {
          console.error(
            "Error during registration:",
            error.response.data.error
          );
          addAlertMemo("Registration failed. Please try again.", "error");
        } else if (isErrorWithMessage(error)) {
          console.error("Error during registration:", error.message);
          addAlertMemo("Registration failed. Please try again.", "error");
        } else {
          console.error("Error during registration: Unknown error");
          addAlertMemo("Registration failed.", "error");
        }
      }
    },
  });

  return (
    <Card color="transparent" shadow={false} className="shadow-none">
      <Typography variant="h4" color="blue-gray" className="dark:text-white">
        Register
      </Typography>
      <Typography color="gray" className="mt-1 font-normal dark:text-gray-300">
        Enter your details to register.
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <AuthErrorMessage name="username" formik={formik} />
          <Input
            size="lg"
            label="Username"
            name="username"
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            onChange={formik.handleChange}
            value={formik.values.username}
            error={!!(formik.errors.username && formik.touched.username)}
            crossOrigin=""
          />

          <AuthErrorMessage name="email" formik={formik} />
          <Input
            size="lg"
            label="Email"
            name="email"
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={!!(formik.errors.email && formik.touched.email)}
            crossOrigin=""
          />

          <AuthErrorMessage name="password" formik={formik} />
          <Input
            type="password"
            size="lg"
            label="Password"
            name="password"
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={!!(formik.errors.password && formik.touched.password)}
            crossOrigin=""
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal dark:text-white"
        >
          Already have an account?{" "}
          <Link href="/login" className="font-bold dark:text-gray-300">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
