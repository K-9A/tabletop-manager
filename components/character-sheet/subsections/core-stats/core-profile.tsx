import React, { useState } from "react";
import ErrorMessage from "../../../helper/error-message";
import { AppDispatch } from "@/store"; //For Typescript

import { useDispatch } from "react-redux";
import { submitNameData } from "@/store/char-store/core-profile-slice";
import socket from "@/utils/socket-client";

import { Card, Input } from "@material-tailwind/react";
import { FormikProps } from "formik";
import { SheetValues } from "@/components/types/character-types";
import { HeartIcon } from "@heroicons/react/20/solid";

import { AnyAction } from "@reduxjs/toolkit";

interface CoreStatsProps {
  formik: FormikProps<SheetValues>;
}

const CoreStats: React.FC<CoreStatsProps> = ({ formik }) => {
  const dispatch: AppDispatch = useDispatch();

  const [lastDispatchedName, setLastDispatchedName] = useState("");

  const handleNameSubmit = async () => {
    // Check if there's no validation error for the name
    if (!formik.errors.name && formik.values.name !== lastDispatchedName) {
      console.log(formik.values.name); // For debugging
      dispatch(submitNameData(formik.values.name) as unknown as AnyAction);
      setLastDispatchedName(formik.values.name);
      socket.emit('client:name-update', 'Test message');
    }
  };

  //Handle submit for the enter key
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNameSubmit();
    }
  };

  return (
    <Card color="transparent" shadow={false} className="shadow-none">
      <div className="mt-8 mb-2 max-w-screen-lg w-full">
        <div className="flex gap-4">
          <div className="mb-2 flex flex-col gap-3">
            <Input
              label="Character Name"
              color="black"
              variant="static"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={(e) => {
                formik.handleBlur(e);
                handleNameSubmit();
              }}
              onKeyDown={handleNameKeyDown}
              error={!!(formik.errors.name && formik.touched.name)}
              placeholder="Enter Name"
              crossOrigin=""
            />
            <ErrorMessage name="name" formik={formik} />

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
};

export default CoreStats;
