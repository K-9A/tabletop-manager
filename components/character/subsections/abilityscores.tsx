import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Input } from "@material-tailwind/react";


export default function AbilityScores() {

  return (
    <Card color="transparent" shadow={false} className="shadow-none">
      <div
        className="mt-8 mb-2 max-w-screen-lg w-full"
      >
        <Input
          variant="outlined"
          label="Strength"
          crossOrigin=""
        />
      </div>
    </Card>
  );
}
