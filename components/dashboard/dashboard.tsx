import React from "react";
import UserInfo from "./user-info";
import CampaignSection from "./campagin-section";
import CharacterSheetSection from "./sheet-section";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import { DashboardProps } from "../types/dash-types";
import { useEffect, useState } from "react";
import {
  isErrorWithMessage,
  isErrorWithResponse,
} from "../types/error-typeguard";
import { Spinner } from "@material-tailwind/react";

const Dashboard: React.FC<DashboardProps> = ({
  user,
  labelBgColor = "bg-gray-200",
}) => {

  
  //MIGHT MOVE TO CUSTOM HOOK
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/user/${user.user_id}`);

        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);

        if (isErrorWithResponse(err)) {
          setError(err.response.data.error);
        } else if (isErrorWithMessage(err)) {
          setError(err.message);
        } else {
          setError("An unexpected component error occurred");
        }
      }
    }

    fetchData();
  }, [user]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return <Spinner className="h-12 w-12" />;
  }

  return (
    <div className="flex flex-col space-y-10 max-w-4xl mx-auto p-6 border-gray-500">
      {/* Welcome Heading */}
      <h1 className="text-2xl font-bold text-center dark:text-white">
        Welcome to your Dashboard!
      </h1>

      {/* User Information */}
      <UserInfo user={user} labelBgColor={labelBgColor} />

      <div className="flex space-x-8 py-2">
        {/* Campaign Section */}
        <CampaignSection labelBgColor={labelBgColor} />
        {/* Character Sheet Section */}
        <CharacterSheetSection labelBgColor={labelBgColor} />
      </div>
      <div className="flex justify-center items-center">
        <Button color="red">Delete Account</Button>
      </div>
    </div>
  );
};

export default Dashboard;
