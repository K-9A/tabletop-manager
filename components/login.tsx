import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { RootState } from "@/store";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useMemoizedAlert } from "./layout/alert";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
});

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  const [justLoggedIn, setJustLoggedIn] = useState(false);

  const addAlertMemo = useMemoizedAlert();

  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  //Client-side user redirection if the user is logged in. This works in tandem with getStaticProps on page level.
  useEffect(() => {
    // If there's an active session and the user didn't just login
    if (session && !justLoggedIn) {
      addAlertMemo("Already logged in.", "info");
      router.push("/"); // Redirect to the homepage
    }
    if (justLoggedIn) {
      setJustLoggedIn(false); // Reset the state so it doesn't interfere with future logins
    }
  }, [session, router]); // eslint-disable-line react-hooks/exhaustive-deps

  /*
   * Note on ESLint:
   * The `react-hooks/exhaustive-deps` rule is intentionally disabled for this effect.
   * This is because ESLint will flag the absence of the `addAlertMemo` function from
   * the dependency array, even though it's safe to omit due to being a memoized, stable function.
   * Including it would introduce unnecessary re-renders without providing any tangible benefits.
   */

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Formik values:", values);

      try {
        const formData = new URLSearchParams();
        formData.append("username", values.name);
        formData.append("password", values.password);

        console.log("Sending formData:", formData.toString());

        const response = await axios.post(
          "/api/auth/callback/credentials",
          formData
        );

        if (response.status !== 200) {
          addAlertMemo("Something went wrong.", "error");
          throw new Error(response.data.error || "Something went wrong");
        }

        // Integrate with NextAuth's signIn method
        const result = await signIn("credentials", {
          redirect: false,
          username: values.name,
          password: values.password,
        });

        if (result?.ok) {
          //Login is successful.
          setJustLoggedIn(true); // Set the state to true when the user logs in
          addAlertMemo("Login successful.", "success");
          router.push("/"); // Redirects to the homepage.
        } else {
          addAlertMemo("Bad login info.", "error");
          console.error("Login error:", result?.error);
          formik.setStatus({ apiError: result?.error });
        }
      } catch (error) {
        addAlertMemo("Something went wrong.", "error");
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        console.error("Login error:", errorMessage);
        formik.setStatus({ apiError: errorMessage });
      }
    },
  });

  return (
    <Card color="transparent" shadow={false} className="shadow-non">
      <Typography variant="h4" color="blue-gray" className="dark:text-white">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal dark:text-gray-300">
        Enter your login credentials.
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
            className={"dark:text-white"}
            color={isDarkMode ? "white" : "black"}
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
          {formik.errors.password && formik.touched.password && (
            <Typography color="red" className="mt-2">
              {formik.errors.password}
            </Typography>
          )}
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal dark:text-white">
          Need an account?{" "}
          <Link href="/register" className="font-bold dark:text-gray-300">
            Register
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
