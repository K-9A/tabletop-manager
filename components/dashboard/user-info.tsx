import { Typography } from "@material-tailwind/react";
import { UserInfoProps } from "../types/dash-types";


const UserInfo: React.FC<UserInfoProps> = ({ user, labelBgColor }) => {
  return (
    <div className="border border-gray-500 p-4 py-2 relative rounded-lg">
      <Typography
        variant="h6"
        color="blue-gray"
        className={`absolute -top-4 left-4 px-2 cursor-pointer inline-flex items-center ${labelBgColor}`}
      >
        User Information
      </Typography>
      <div className="flex flex-col items-center space-y-3 py-6">
      <p className="text-sm">
            <span className="font-bold">User ID:</span> {user.user_id}
          </p>
          <p className="text-sm">
            <span className="font-bold">Username:</span> {user.username}
          </p>
          <p className="text-sm">
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p className="text-sm">
            <span className="font-bold">Date Joined:</span> {user.created_at}
          </p>
          <p className="text-sm">
            <span className="font-bold">Campaigns Owned:</span>{" "}
            {user.campaignsOwned}
          </p>
          <p className="text-sm">
            <span className="font-bold">Character Sheets Owned:</span>{" "}
            {user.characterSheetsOwned}
          </p>
      </div>
    </div>
  );
};

export default UserInfo;
