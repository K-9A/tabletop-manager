import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import type { InputProps } from "@material-tailwind/react";

const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function AbilityScores() {

    const inputProps: Partial<InputProps> & {
        variant: "standard" | "outlined" | "static";
        size?: "md" | "lg";
      } = {
        variant: "outlined",
        label: "Strength",
        size: "md"
      };
      

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Card color="transparent" shadow={false} className="shadow-none">
      <form
        onSubmit={formik.handleSubmit}
        className="mt-8 mb-2 max-w-screen-lg w-full"
      >
        <Input
          variant="outlined"
          label="Strength"
          crossOrigin=""
        />
      </form>
    </Card>
  );
}
