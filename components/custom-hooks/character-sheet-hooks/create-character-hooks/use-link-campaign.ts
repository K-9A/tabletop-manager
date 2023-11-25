import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { campaignLinkActions } from "@/store/create-sheet-store/link-campaign-slice";
import { RootState, AppDispatch } from "@/store";
import { useMemoizedAlert } from "@/components/layout/alert";
import axios from "axios";

export const useLinkCampaign = () => {
  const dispatch: AppDispatch = useDispatch();
  const addAlertMemo = useMemoizedAlert();

  const isDarkMode = useSelector((state: RootState) => state.darkMode);

  //Use selector for the create subsection
  const linkCampaignData = useSelector(
    (state: RootState) => state.linkCampaign
  );

  const {
    isValid,
    isLoading,
    error,
    campaignId: campaignIdFromStore,
  } = linkCampaignData;

  const [campaignId, setCampaignId] = useState(campaignIdFromStore || "");

  useEffect(() => {
    if (campaignIdFromStore) {
      setCampaignId(campaignIdFromStore);
    }
  }, [campaignIdFromStore]);

  const validateId = async (campaignId) => {
    dispatch(campaignLinkActions.checkCampaignIdStart());
    try {
      const response = await axios.get(
        `/api/character-sheet-create/link-campaign?campaignId=${campaignId}`
      );
      dispatch(campaignLinkActions.checkCampaignIdSuccess(campaignId));
      addAlertMemo("Campaign ID linked.", "success");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // User input validation failure
        dispatch(
          campaignLinkActions.checkCampaignIdFailure("Invalid campaign ID")
        );
        addAlertMemo("Invalid Campaign ID", "error");
      } else {
        // Actual system error
        dispatch(
          campaignLinkActions.checkCampaignIdFailure("An error occurred")
        );
        addAlertMemo(
          "An error occurred while validating the Campaign ID",
          "error"
        );
      }
    }
  };

  //To handle the campaign link button
  const handleValidateClick = () => {
    validateId(campaignId);
  };

  //For the remove campaign link button
  const handleRemoveClick = () => {
    dispatch(campaignLinkActions.resetCampaignId());
    setCampaignId("");
    addAlertMemo("ID Link Removed", "info");
  };

  return {
    campaignId,
    isValid,
    isLoading,
    error,
    isDarkMode,
    campaignIdFromStore,
    validateId,
    setCampaignId,
    handleValidateClick,
    handleRemoveClick,
  };
};
