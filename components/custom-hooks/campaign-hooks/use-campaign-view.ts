import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampaignData,
  updateCampaignField,
} from "@/store/campaign-store/campaign-view-slice";
import { useFormik } from "formik";
import { RootState } from "@/store";
import { campaignSchema } from "@/components/validation-schema/campaign/campaign-schema";
import { AnyAction } from "@reduxjs/toolkit"; //for typescript
import { AppDispatch } from "@/store"; //For Typescript

interface UseCampaignProps {
  campaignId: string;
}

export const useCampaignView = ({ campaignId }: UseCampaignProps) => {
  //Darkmode state
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch: AppDispatch = useDispatch();

  // Selector for campaign data
  const campaign = useSelector((state: RootState) => state.campaignView);

  useEffect(() => {
    dispatch(fetchCampaignData(campaignId) as unknown as AnyAction);
  }, [dispatch, campaignId]);

  const formik = useFormik({
    initialValues: {
      campaign_name: campaign.campaign_name,
      campaign_description: campaign.campaign_description,
    },
    validationSchema: campaignSchema,
    onSubmit: (values) => {},
    enableReinitialize: true,
  });


  const updateField = (fieldName, value) => {
    dispatch(
      updateCampaignField({
        campaignId,
        fieldName,
        value,
      }) as unknown as AnyAction
    );
  };

  return {
    isDarkMode,
    campaign,
    formik,
    updateField,
  };
};
