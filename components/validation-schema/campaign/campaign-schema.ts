import * as Yup from "yup";

export const campaignSchema = Yup.object({
    campaign_name: Yup.string().required("Campaign Name is required"),
    campaign_description: Yup.string().required("A Campaign Description is required"),
  });