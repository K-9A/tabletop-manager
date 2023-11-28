import React, { Fragment } from "react";
import { useCreateCampaign } from "@/components/custom-hooks/campaign-hooks/use-create-campaign";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Input, Button, Textarea } from "@material-tailwind/react";
import ErrorMessage from "@/components/helper/auth-error";

const CampaignCreate = () => {
  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  const { formik, isLoading } = useCreateCampaign();

  return (
    <Fragment>
      <div className="flex flex-col justify-center mt-1 mx-auto text-center dark:text-white">
        <h1 className="font-bold text-2xl">Welcome to the Campaign Creator!</h1>
        <h2 className="text-lg mt-2">
          Enter the details below and click SUBMIT to create your Dungeons and
          Dragons campaign!
        </h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mt-20 dark:text-white w-[34rem]">
          <Input
            variant="static"
            label="Campaign Name"
            placeholder="Required"
            name="campaign_name"
            size="lg"
            className="dark:text-white"
            color={isDarkMode ? "white" : "black"}
            onChange={formik.handleChange}
            value={formik.values.campaign_name}
            error={
              !!(formik.errors.campaign_name && formik.touched.campaign_name)
            }
            crossOrigin=""
          />
          <div className="h-5 mt-1">
            <ErrorMessage name="campaign_name" formik={formik} />
          </div>
        </div>

        <div className="flex flex-col mt-10 mb-10 dark:text-white">
          <Textarea
            variant="static"
            name="campaign_description"
            label="Campaign Description"
            placeholder="Required"
            size="lg"
            onChange={formik.handleChange}
            value={formik.values.campaign_description}
            className="dark:text-white"
            error={
              !!(formik.errors.campaign_name && formik.touched.campaign_name)
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
            <ErrorMessage name="campaign_description" formik={formik} />
          </div>
        </div>
        <div className="flex mt-8 justify-center mx-auto text-center dark:text-white">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting Campaign..." : "Create Campaign"}
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default CampaignCreate;
