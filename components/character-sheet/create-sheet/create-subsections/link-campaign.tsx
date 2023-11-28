import React, { Fragment } from "react";
import { Input, Button } from "@material-tailwind/react";
import { useLinkCampaign } from "@/components/custom-hooks/character-sheet-hooks/create-character-hooks/use-link-campaign";

const LinkCampaign = () => {

  const { campaignId, isValid, isLoading, error, isDarkMode, setCampaignId, handleValidateClick, handleRemoveClick } =
    useLinkCampaign();

  return (
    <Fragment>
      <div className="flex justify-center dark:text-gray-200">
        <p>
          If you would like to join a campaign, enter a valid campaign ID to
          verify that campaign is available:
        </p>
      </div>
      <div className="ml-32 flex items-center items-justify gap-8 mt-4 w-60 dark:text-white">
        <Input
          variant="static"
          label="Campaign ID"
          name="campaign_id_submit"
          value={campaignId}
          placeholder="Optional"
          onChange={(e) => setCampaignId(e.target.value)}
          disabled={isValid}
          color={isDarkMode ? "white" : "black"}
          crossOrigin=""
        />

        {!isValid && (
          <Button
            onClick={handleValidateClick}
            disabled={!campaignId || isLoading}
            className="flex-shrink-0 dark:text-gray-200"
          >
            {isLoading ? "Loading..." : "Check ID"}
          </Button>
        )}
        {isValid && (
          <Button
            onClick={handleRemoveClick}
            disabled={!campaignId || isLoading}
            className="flex-shrink-0 dark:text-gray-200"
          >
            {isLoading ? "Loading..." : "Remove ID"}
          </Button>
        )}

        {isValid && campaignId && (
          <p className="whitespace-nowrap font-bold text-green-500">
            ID is Valid
          </p>
        )}
        {!isValid && (
          <p className="whitespace-nowrap font-bold text-black dark:text-white">
            ID Not Valid
          </p>
        )}
      </div>
    </Fragment>
  );
};

export default LinkCampaign;
