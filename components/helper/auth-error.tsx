import React from "react";
import { Typography } from "@material-tailwind/react";
import { FormikProps } from "formik";


interface AuthErrorProps {
    name: string; 
    formik: FormikProps<any>;  // Generalized to 'any', but consider a specific type if you have one
}

//.Error message function for formik.
const AuthErrorMessage: React.FC<AuthErrorProps> = ({ name, formik }) => (
    formik.errors[name] && formik.touched[name] ? (
      <Typography color="red" className="text-sm mt-1">
        {formik.errors[name] as string}
      </Typography>
    ) : null
);

export default AuthErrorMessage;