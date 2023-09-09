import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Input } from "@material-tailwind/react";

import { HeartIcon } from "@heroicons/react/20/solid";


export default function CoreStats() {

  return (
    <Card color="transparent" shadow={false} className="shadow-none">
      <div
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
              crossOrigin=""
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
