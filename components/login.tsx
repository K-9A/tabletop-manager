import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import AuthErrorMessage from "./helper/auth-error";
import {
  useLogin,
  useRedirectIfLoggedIn,
} from "./custom-hooks/auth-hooks/use-login";

function Login() {
  const [justLoggedIn, setJustLoggedIn] = useState(false);

  const { formik, isLoading } = useLogin(setJustLoggedIn);
  useRedirectIfLoggedIn(justLoggedIn);

  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <Card color="transparent" shadow={false} className="shadow-non">
      <Typography variant="h4" color="blue-gray" className="dark:text-white">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal dark:text-gray-300">
        Enter your login information.
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <AuthErrorMessage name="name" formik={formik} />
          <Input
            size="lg"
            label="Username"
            name="name"
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={!!(formik.errors.name && formik.touched.name)}
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

        <Button type="submit" className="mt-6" fullWidth disabled={isLoading}>
          {isLoading ? "Logging In..." : "Login"}
        </Button>

        <Typography
          color="gray"
          className="mt-4 text-center font-normal dark:text-white"
        >
          Need an account?{" "}
          <Link href="/register" className="font-bold dark:text-gray-300">
            Register
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

export default Login;
