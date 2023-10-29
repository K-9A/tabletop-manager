import React, { Fragment, useState, useEffect } from "react";
//Eventual Use custom hook
import { useDispatch, useSelector } from "react-redux";
import {
  viewCampaignActions,
  fetchCampaignInfo,
  createFieldThunks,
} from "@/store/campaign-store/campaign-view-slice";
import { useRouter } from "next/router";
import { handleKeyDown } from "@/components/helper/handle-key-down";
import { useFormik } from "formik";
import useCampaignSocket from "@/components/custom-hooks/socket-hooks/use-campaign-socket";
import { RootState } from "@/store";
import { Input, Textarea } from "@material-tailwind/react";
import { campaignSchema } from "@/components/validation-schema/campaign/campaign-schema";
import AuthErrorMessage from "@/components/helper/auth-error";

import { AnyAction } from "@reduxjs/toolkit"; //for typescript
import { AppDispatch } from "@/store"; //For Typescript

interface CampaignViewProps {
  campaignId: string;
}

const campaignNameThunks = createFieldThunks("campaign_name");
const campaignDescriptionThunks = createFieldThunks("campaign_description");

const CampaignView: React.FC<CampaignViewProps> = ({ campaignId }) => {
  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();

  const router = useRouter();
  //const { campaignId } = router.query;

  // Selector for read-only data
  const campaignInfo = useSelector(
    (state: RootState) => state.campaignView.info
  );

  // Selector for editable data
  const campaignData = useSelector(
    (state: RootState) => state.campaignView.data
  );

  // State to track external updates for socket.io
  const [hasExternalUpdate, setHasExternalUpdate] = useState(false);

  useEffect(() => {
    dispatch(fetchCampaignInfo(campaignId) as unknown as AnyAction);
    dispatch(campaignNameThunks.fetchField(campaignId) as unknown as AnyAction);
    dispatch(
      campaignDescriptionThunks.fetchField(campaignId) as unknown as AnyAction
    );
  }, [dispatch, campaignId]);

  const formik = useFormik({
    initialValues: {
      campaign_name: campaignData.campaign_name,
      campaign_description: campaignData.campaign_description,
    },
    validationSchema: campaignSchema,
    onSubmit: (values) => {},
    enableReinitialize: true,
  });

  if (campaignInfo.isLoading) {
    return <p>Loading...</p>;
  }

  if (campaignInfo.error) {
    return <p>Error loading campaign: {campaignInfo.error}</p>;
  }

  if (!campaignInfo.campaign_id) {
    return <p>No campaign data found</p>;
  }

  const updateField = async (fieldName: string, value: string) => {
    if (value !== campaignData[fieldName]) {
      try {
        if (fieldName === "campaign_name") {
          await dispatch(
            campaignNameThunks.updateField({
              campaignId,
              value,
            }) as unknown as AnyAction
          ).unwrap();
        } else if (fieldName === "campaign_description") {
          await dispatch(
            campaignDescriptionThunks.updateField({
              campaignId,
              value,
            }) as unknown as AnyAction
          ).unwrap();
        }
      } catch (error) {
        console.error(`Error updating ${fieldName}:`, error);
      }
    }
  };

  const handleBlur = (fieldName: string) => {
    return () => {
      updateField(fieldName, formik.values[fieldName]);
    };
  };

  const handleKeyDown = (fieldName: string) => {
    return (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        updateField(fieldName, formik.values[fieldName]);
      }
    };
  };

  return (
    <Fragment>
      <h1 className="dark:text-white">Campaign View</h1>
      <div className="flex flex-col mt-10 dark:text-white w-[34rem]">
        <p className="text-sm">
          <span className="font-bold">Campaign ID:</span>{" "}
          {campaignInfo.campaign_id}
        </p>
      </div>

      <div className="flex dark:text-white">
        <div className="flex mt-10 dark:text-white">
          <p className="text-sm mr-10">
            <span className="font-bold">Creator ID:</span>{" "}
            {campaignInfo.user_id}
          </p>

          <p className="text-sm">
            <span className="font-bold">Creator Name:</span>{" "}
            {campaignInfo.username}
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-5 dark:text-white w-[34rem]">
        <Input
          label="Campaign Name"
          name="campaign_name"
          size="lg"
          className="dark:text-white"
          color={isDarkMode ? "white" : "black"}
          value={formik.values.campaign_name}
          onChange={(e) => {
            formik.handleChange(e);
            if (hasExternalUpdate) {
              setHasExternalUpdate(false);
            }
          }}
          onBlur={(e) => {
            formik.handleBlur(e);
            handleBlur("campaign_name");
          }}
          onKeyDown={handleKeyDown("campaign_name")}
          error={
            !!(formik.errors.campaign_name && formik.touched.campaign_name)
          }
          crossOrigin=""
        />
        <div className="h-5 mt-1">
          <AuthErrorMessage name="campaign_name" formik={formik} />
        </div>
      </div>

      <div className="flex flex-col mt-5 dark:text-white">
        <Textarea
          name="campaign_description"
          label="Campaign Description"
          size="lg"
          // onChange={formik.handleChange}
          value={formik.values.campaign_description}
          className="dark:text-white"
          error={
            !!(
              formik.errors.campaign_name && formik.touched.campaign_description
            )
          }
          // labelProps={{
          //   className: `${
          //     formik.errors.campaign_description &&
          //     formik.touched.campaign_description
          //       ? "!text-red-500"
          //       : "!text-black dark:!text-white"
          //   }`,
          // }}
        />
        <div className="h-5">
          {/* <ErrorMessage name="campaign_description" formik={formik} /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default CampaignView;
