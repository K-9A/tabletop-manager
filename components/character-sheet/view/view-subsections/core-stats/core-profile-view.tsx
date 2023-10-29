import React, { useState, useEffect, useRef } from "react";
import ErrorMessage from "@/components/helper/error-message";
import { AppDispatch } from "@/store"; //For Typescript
import { useRouter } from "next/router";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import {
  coreProfileViewActions,
  submitCoreProfileData,
  fetchCoreProfileData,
} from "@/store/view-sheet-store/core-stats-view/core-profile-view-slice";
import socket from "@/utils/socket-client";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Card, Input } from "@material-tailwind/react";
import { CoreProfileValues } from "@/components/types/character-types";
import { HeartIcon } from "@heroicons/react/20/solid";

import { AnyAction } from "@reduxjs/toolkit";

const validationSchema = Yup.object({
  name: Yup.string().required("Character Name is required"),
});

const CoreProfile = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();


  const fetchName = useSelector(
    (state: RootState) => state.coreProfileView.name
  );

  const [lastDispatchedName, setLastDispatchedName] = useState("");
  // State to track external updates for socket.io
  const [hasExternalUpdate, setHasExternalUpdate] = useState(false);
  // Ref to store the previous name
  const previousNameRef = useRef(fetchName);

  const formik = useFormik<CoreProfileValues>({
    initialValues: {
      name: fetchName,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  const updateCharacterName = async () => {
    // Check if there's no validation error for the name
    if (!formik.errors.name && formik.values.name !== lastDispatchedName) {
      console.log(formik.values.name); // For debugging
      try {
        await dispatch(
          submitCoreProfileData({
            name: formik.values.name,
          }) as unknown as AnyAction
        ).unwrap();
        socket.emit("client:name-update", formik.values.name);
        dispatch(fetchCoreProfileData() as unknown as AnyAction);
        setLastDispatchedName(formik.values.name);
      } catch (error) {
        console.error("Error submitting name:", error);
      }
    }
  };

  //Handle submit for the enter key
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateCharacterName();
    }
  };

  // Dispatch an action to fetch initial data.
  useEffect(() => {
    dispatch(fetchCoreProfileData() as unknown as AnyAction);
  }, [dispatch]);

  useEffect(() => {
    if (previousNameRef.current !== fetchName) {
      setHasExternalUpdate(true);
      formik.setFieldValue("name", fetchName);
      previousNameRef.current = fetchName;
    }
  }, [fetchName, formik]);

  useEffect(() => {
    // If there's an external update, reset the flag after Formik's state has been updated
    if (hasExternalUpdate) {
      setHasExternalUpdate(false);
    }
  }, [hasExternalUpdate]);

  //Socket listener
  useEffect(() => {
    console.log("Setting up listener for server:name-update");
    socket.on("server:name-update", (updatedName) => {
      console.log("Received name update:", updatedName);
      dispatch(coreProfileViewActions.updateField(updatedName));
      formik.setFieldValue("name", updatedName);
    });
    return () => {
      console.log("Cleaning up listener");
      socket.off("server:name-update");
    };
  }, [dispatch, formik]);

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
              onChange={(e) => {
                formik.handleChange(e);
                if (hasExternalUpdate) {
                  setHasExternalUpdate(false);
                }
              }}
              onBlur={(e) => {
                formik.handleBlur(e);
                updateCharacterName();
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

export default CoreProfile;
