import React from "react";
import UserInfo from "./user-info";
import CampaignSection from "./campagin-section";
import CharacterSheetSection from "./sheet-section";


interface DashboardProps {
    user: {
      id: string;
      name: string;
      email: string;
      dateJoined: string;
      campaignsOwned: string;
      characterSheetsOwned: string;
    };
    labelBgColor?: string;
  }

const Dashboard: React.FC<DashboardProps> = ({ user, labelBgColor = "bg-white" }) => {


  return (
    <div className="flex flex-col space-y-10 max-w-4xl mx-auto p-6 border-gray-500">
      {/* Welcome Heading */}
      <h1 className="text-2xl font-bold text-center">
        Welcome to your Dashboard!
      </h1>

      {/* User Information */}
      <UserInfo user={user} labelBgColor="bg-white" />

      <div className="flex space-x-8 py-2">
        {/* Campaign Section */}
        <CampaignSection labelBgColor="bg-white" />
        {/* Character Sheet Section */}
        <CharacterSheetSection labelBgColor="bg-white" />
      </div>
    </div>
  );
};

export default Dashboard;
