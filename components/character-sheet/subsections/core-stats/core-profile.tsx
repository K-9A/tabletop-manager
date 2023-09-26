import React, { useState } from "react";
import ErrorMessage from "../../../helper/error-message";

import axios from 'axios';
import { useDispatch } from "react-redux";
import { coreProfileActions } from "@/store/char-store/core-profile-slice";

import { Card, Input } from "@material-tailwind/react";
import { FormikProps } from "formik";
import { SheetValues } from "@/components/types/character-types";
import { HeartIcon } from "@heroicons/react/20/solid";

import { isErrorWithMessage, isErrorWithResponse } from "@/components/types/error-typeguard";

interface CoreStatsProps {
  formik: FormikProps<SheetValues>;
}

const CoreStats: React.FC<CoreStatsProps> = ({ formik }) => {
  const dispatch = useDispatch();

  const [lastDispatchedName, setLastDispatchedName] = useState("");

  const handleNameSubmit = async () => {
    // Check if there's no validation error for the name
    if (!formik.errors.name && formik.values.name !== lastDispatchedName) {
      console.log(formik.values.name); // For debugging
      dispatch(coreProfileActions.setName(formik.values.name));
      setLastDispatchedName(formik.values.name);
    }

    //After dispatching to Redux, send data to the API route.
    try {
      const response = await axios.post("/api/character/core-stats/core-profile", {
        name: formik.values.name,
      });

      if (response.data.success) {
        console.log("Data saved successfully to the database.");
      } else {
        console.error(
          "Error saving data to the database:",
          response.data.message
        );
      }
    } catch (error) {
      if (isErrorWithMessage(error)) {
          console.error("Error sending request:", error.message);
      } else {
          console.error("Error sending request:", error);
      }
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
