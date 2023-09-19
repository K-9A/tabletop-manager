import React from "react";
import Link from "next/link";
import axios from "@/utils/axios-instance";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useMemoizedAlert } from "./layout/alert";
import { ErrorResponse, MessageError } from "./types/error-types";
import * as Yup from "yup";
import { Card, Input, Button, Typography } from "@material-tailwind/react";


const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
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
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        //Point Axios to the Register API route.
        const response = await axios.post("/register", {
          username: values.name,
          email: values.email,
          password: values.password,
        });

        if (response.status === 201) {
          console.log("Registration successful!");
          addAlertMemo("Registration successful!", "success");
          setTimeout(() => {
            router.push("/login");
          }, 1500); // Delay of 1.5 seconds
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
      <Typography variant="h4" color="blue-gray">
        Register
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Username"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={!!(formik.errors.name && formik.touched.name)}
            crossOrigin=""
          />
          {formik.errors.name && formik.touched.name && (
            <Typography color="red" className="mt-2">
              {formik.errors.name}
            </Typography>
          )}

          <Input
            size="lg"
            label="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={!!(formik.errors.email && formik.touched.email)}
            crossOrigin=""
          />
          {formik.errors.email && formik.touched.email && (
            <Typography color="red" className="mt-2">
              {formik.errors.email}
            </Typography>
          )}

          <Input
            type="password"
            size="lg"
            label="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={!!(formik.errors.password && formik.touched.password)}
            crossOrigin=""
          />
          {formik.errors.password && formik.touched.password && (
            <Typography color="red" className="mt-2">
              {formik.errors.password}
            </Typography>
          )}
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
