import React from "react";
import Link from "next/link";
import { useRegister } from "./custom-hooks/auth-hooks/use-register";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import AuthErrorMessage from "./helper/auth-error";


export default function Register() {

  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const { formik } = useRegister();

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
