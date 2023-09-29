import React from "react";
import { Typography } from "@material-tailwind/react";
import { FormikProps } from "formik";

interface ErrorProps<T> {
  name: keyof T; 
  formik: FormikProps<T>;
}

const ErrorMessage = <T, >({ name, formik }: ErrorProps<T>): JSX.Element | null => (
  typeof formik.errors[name] === 'string' && formik.touched[name] ? (
    <div className="h-0">
    <Typography color="red" className="text-sm">
      {formik.errors[name] as string}
    </Typography>
    </div>
  ) : null
);

export default ErrorMessage;
