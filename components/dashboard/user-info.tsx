import { Typography } from "@material-tailwind/react";
import { UserInfoProps } from "../types/dash-types";
import formatDate from "../helper/format-date";
import { Spinner } from "@material-tailwind/react";

const UserInfo: React.FC<UserInfoProps> = ({ userData, labelBgColor }) => {

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border border-gray-500 p-4 py-2 relative rounded-lg">
      <Typography
        variant="h6"
        color="blue-gray"
        className={`absolute -top-4 left-4 px-2 cursor-pointer inline-flex items-center dark:text-gray-300 ${labelBgColor} dark:bg-gray-700`}
      >
        User Information
      </Typography>
      <div className="flex flex-col items-center space-y-3 py-6 dark:text-white">
        <p className="text-sm">
          <span className="font-bold">User ID:</span> {userData.user_id}
        </p>
        <p className="text-sm">
          <span className="font-bold">Username:</span> {userData.username}
        </p>
        <p className="text-sm">
          <span className="font-bold">Email:</span> {userData.email}
        </p>
        <p className="text-sm">
          <span className="font-bold">Date Joined:</span>{" "}
          {formatDate(userData.created_at)}
        </p>
        <p className="text-sm">
          <span className="font-bold">Campaigns Owned: </span>
          {userData.totalCampaigns}
        </p>
        <p className="text-sm">
          <span className="font-bold">Character Sheets Owned: </span>
          {userData.totalCharacterSheets}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
