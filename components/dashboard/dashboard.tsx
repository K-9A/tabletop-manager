import React from "react";
import { useDashboardData } from "../custom-hooks/use-dashboard";
import UserInfo from "./user-info";
import CampaignSection from "./campagin-section";
import CharacterSheetSection from "./sheet-section";
import { Spinner } from "@material-tailwind/react";

const Dashboard = () => {
  const labelBgColor = "bg-gray-200";

  const { userData, isLoading } = useDashboardData();

  return (
    <div className="flex flex-col space-y-10 max-w-4xl mx-auto p-6 border-gray-500">
      <h1 className="text-2xl font-bold text-center dark:text-white">
        Welcome to your Dashboard!
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <UserInfo userData={userData} labelBgColor={labelBgColor} />
      )}

      <div className="flex space-x-8 py-2">
        <CampaignSection labelBgColor={labelBgColor} />
        <CharacterSheetSection labelBgColor={labelBgColor} />
      </div>
      {/* Delete account button to be added later. Probably alongside edit account 
      <div className="flex justify-center items-center">
        <Button color="red">Delete Account</Button>
      </div> */}
    </div>
  );
};

export default Dashboard;
