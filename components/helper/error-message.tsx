import React from "react";
import { Typography } from "@material-tailwind/react";
import { CoreProfileValues } from "@/components/types/character-types";
import { FormikProps } from "formik";

interface ErrorProps {
  name: keyof CoreProfileValues;  // <-- This specifies that 'name' is a key of SheetValues
  formik: FormikProps<CoreProfileValues>;
}

const ErrorMessage: React.FC<ErrorProps> = ({ name, formik }) => (
  formik.errors[name] && formik.touched[name] ? (  // <-- Now TypeScript understands this
    <Typography color="red" className="mt-1">
      {formik.errors[name]}
    </Typography>
  ) : null
);

export default ErrorMessage;
