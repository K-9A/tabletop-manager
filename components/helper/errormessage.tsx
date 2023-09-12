import React from "react";
import { Typography } from "@material-tailwind/react";
import { SheetValues } from "@/components/character/types/characterTypes";
import { FormikProps } from "formik";

interface ErrorProps {
  name: keyof SheetValues;  // <-- This specifies that 'name' is a key of SheetValues
  formik: FormikProps<SheetValues>;
}

const ErrorMessage: React.FC<ErrorProps> = ({ name, formik }) => (
  formik.errors[name] && formik.touched[name] ? (  // <-- Now TypeScript understands this
    <Typography color="red" className="mt-1">
      {formik.errors[name]}
    </Typography>
  ) : null
);

export default ErrorMessage;
