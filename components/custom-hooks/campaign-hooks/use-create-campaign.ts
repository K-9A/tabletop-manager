import axios from "@/utils/axios-instance";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useMemoizedAlert } from "@/components/layout/alert";
import { ErrorResponse } from "@/components/types/error-types";
import { useSession } from "next-auth/react";
import { campaignSchema } from "@/components/validation-schema/campaign/campaign-schema";

export function useCreateCampaign() {
  const router = useRouter();
  const addAlertMemo = useMemoizedAlert();
  const { data: session } = useSession();
  const userId = (session?.user as any)?.id;

  function isErrorWithResponse(error: any): error is ErrorResponse {
    return (
      error && error.response && typeof error.response.data.error === "string"
    );
  }


  const formik = useFormik({
    initialValues: {
      campaign_name: "",
      campaign_description: "",
    },
    validationSchema: campaignSchema,
    onSubmit: async (values) => {
      try {
        const campaignResponse = await axios.post("/campaign", {
          campaign_name: values.campaign_name,
          campaign_description: values.campaign_description,
          userId,
        });

        if (campaignResponse.status === 200) {
          addAlertMemo("Campaign Creation successful!", "success");
          router.push(`/user/${userId}`);
        }
      } catch (error) {
        if (isErrorWithResponse(error)) {
          console.error(
            "Error during Campaign Creation:",
            error.response.data.error
          );
          addAlertMemo("Creating Campaign failed. Please try again.", "error");
        } else {
          addAlertMemo("Creating Campaign failed. Please try again.", "error");
        }
      }
    },
  });

  return formik;
}
