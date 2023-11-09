import React, { Fragment } from "react";
import {
  handleUpdateBlur,
  handleUpdateKeyDown,
} from "@/components/helper/handle-field-updates";
import { useCampaignView } from "@/components/custom-hooks/campaign-hooks/use-campaign-view";
import { Input, Textarea } from "@material-tailwind/react";
import AuthErrorMessage from "@/components/helper/auth-error";

interface CampaignViewProps {
  campaignId: string;
}

const CampaignView: React.FC<CampaignViewProps> = ({ campaignId }) => {
  const { isDarkMode, campaign, formik, updateField } = useCampaignView({
    campaignId,
  });

  if (campaign.isLoading) {
    return <p>Loading...</p>;
  }

  if (campaign.error) {
    return <p>Error loading campaign: {campaign.error}</p>;
  }

  if (!campaign.campaign_id) {
    return <p>No campaign data found</p>;
  }

  return (
    <Fragment>
      <h1 className="font-bold text-2xl dark:text-white">Campaign View</h1>
      <div className="flex flex-col mt-5 dark:text-white w-[34rem]">
        <p className="text-sm">
          <span className="font-bold">Campaign ID:</span> {campaign.campaign_id}
        </p>
      </div>

      <div className="flex dark:text-white">
        <div className="flex mt-5 dark:text-white">
          <p className="text-sm mr-10">
            <span className="font-bold">Creator ID:</span> {campaign.user_id}
          </p>

          <p className="text-sm">
            <span className="font-bold">Creator Name:</span> {campaign.username}
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
          }}
          onBlur={(e) =>
            handleUpdateBlur(
              formik,
              "campaign_name",
              formik.values.campaign_name,
              updateField
            )
          }
          onKeyDown={(e) =>
            handleUpdateKeyDown(
              formik,
              "campaign_name",
              formik.values.campaign_name,
              e,
              updateField
            )
          }
          error={
            !!(formik.errors.campaign_name && formik.touched.campaign_name)
          }
          crossOrigin=""
        />
        <div className="h-5 mt-1">
          <AuthErrorMessage name="campaign_name" formik={formik} />
        </div>
      </div>

      <div className="flex flex-col mt-5 dark:text-white w-[34rem]">
        <Textarea
          name="campaign_description"
          label="Campaign Description"
          size="lg"
          onChange={(e) => {
            formik.handleChange(e);
          }}
          value={formik.values.campaign_description}
          onBlur={(e) =>
            handleUpdateBlur(
              formik,
              "campaign_description",
              formik.values.campaign_name,
              updateField
            )
          }
          onKeyDown={(e) =>
            handleUpdateKeyDown(
              formik,
              "campaign_description",
              formik.values.campaign_name,
              e,
              updateField
            )
          }
          className="dark:text-white"
          rows={12}
          error={
            !!(
              formik.errors.campaign_name && formik.touched.campaign_description
            )
          }
          labelProps={{
            className: `${
              formik.errors.campaign_description &&
              formik.touched.campaign_description
                ? "!text-red-500"
                : "!text-black dark:!text-white"
            }`,
          }}
        />
        <div className="h-5">
          <AuthErrorMessage name="campaign_description" formik={formik} />
        </div>
      </div>
    </Fragment>
  );
};

export default CampaignView;
