import React, { Fragment, useState, useEffect } from "react";
//Eventual Use custom hook
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import useCampaignSocket from "@/components/custom-hooks/socket-hooks/use-campaign-socket";
import { RootState } from "@/store";
import { Input, Textarea } from "@material-tailwind/react";
import { campaignSchema } from "@/components/validation-schema/campaign/campaign-schema";
import ErrorMessage from "@/components/helper/auth-error";

interface CampaignViewProps {
  campaignId: string;
}

interface CampaignData {
  campaign_id: string;
  campaign_name: string;
  campaign_description: string;
  user_id: string;
  username: string;
}


const CampaignView: React.FC<CampaignViewProps> = ({ campaignId }) => {
  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const [campaignData, setCampaignData] = useState<CampaignData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();
  console.log(campaignId, session)
  const { sendMessage } = useCampaignSocket(campaignId, session);

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await axios.get(`/api/campaign/campaign-view/?campaignId=${campaignId}`);
        setCampaignData(response.data.data);
      } catch (err) {
        console.error("Error fetching campaign data:", err);
        setError("Failed to fetch campaign data");
      } finally {
        setLoading(false);
      }
    };

    if (campaignId) {
      fetchCampaignData();
    }
  }, [campaignId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!campaignData) {
    return <p>No campaign data found</p>;
  }

  const handleSendMessage = () => {
    sendMessage("Hello, World!");
  };

  return (
    <Fragment>
      <h1 className="dark:text-white">Campaign View</h1>
        <div className="flex flex-col mt-10 dark:text-white w-[34rem]">
          <p className="text-sm">
            <span className="font-bold">Campaign ID:</span> {campaignData.campaign_id}
          </p>
        </div>

        <div className="flex dark:text-white">
          <div className="flex mt-10 dark:text-white">
            <p className="text-sm mr-10">
              <span className="font-bold">Creator ID:</span> {campaignData.user_id}
            </p>

            <p className="text-sm">
              <span className="font-bold">Creator Name:</span> {campaignData.username}
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
            // onChange={formik.handleChange}
            // value={formik.values.campaign_name}
            // error={
            //   !!(formik.errors.campaign_name && formik.touched.campaign_name)
            // }
            crossOrigin=""
          />
          <div className="h-5 mt-1">
            {/* <ErrorMessage name="campaign_name" formik={formik} /> */}
          </div>
        </div>

        <div className="flex flex-col mt-5 dark:text-white">
          <Textarea
            name="campaign_description"
            label="Campaign Description"
            size="lg"
            // onChange={formik.handleChange}
            // value={formik.values.campaign_description}
            // className="dark:text-white"
            // error={
            //   !!(formik.errors.campaign_name && formik.touched.campaign_name)
            // }
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
        <button onClick={handleSendMessage}>Send Message</button>
    </Fragment>
  );
};

export default CampaignView;
