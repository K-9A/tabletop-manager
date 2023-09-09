import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { HeartIcon } from "@heroicons/react/20/solid";

const validationSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function CoreStats() {
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
        <div className="flex gap-4">
          <div className="mb-2 flex flex-col gap-3">
            <Input
              label="Character Name"
              color="black"
              variant="static"
              type="text"
              crossOrigin=""
            />
            <div className="flex gap-4">
              <Input
                label="Class"
                color="black"
                variant="static"
                type="text"
                crossOrigin=""
              />
              <Input
                label="Inspiration"
                color="black"
                variant="static"
                type="text"
                crossOrigin=""
              />
            </div>
          </div>
          <div className="mb-2 flex flex-col gap-3">
            <Input
              label="Health Points"
              icon={<HeartIcon className="text-red-500" />}
              color="teal"
              variant="static"
              type="text"
              crossOrigin=""
            />
            <Input
              variant="outlined"
              label="Maximum Health Points"
              color="black"
              className="bg-gray-300"
              crossOrigin=""
            />
          </div>
        </div>
      </form>
    </Card>
  );
}
