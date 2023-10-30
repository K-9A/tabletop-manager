//Api to fetch user data for the dashboard
import { NextApiRequest, NextApiResponse } from "next";
import { dbQuery } from "@/utils/dbQuery";
import { isErrorWithMessage } from "@/components/types/error-typeguard";

const getUserData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const userId = req.query.userId;

    try {
      // Fetch user from your MySQL database using userId
      const userData = await dbQuery(
        "SELECT user_id, oauth_id, username, email, avatar, created_at FROM users WHERE user_id = ?",
        [userId]
      );

      // Ensure data was found before sending response
      if (userData.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      // Fetch total number of campaigns created by the user
      const totalCampaigns = await dbQuery(
        "SELECT COUNT(*) as total FROM campaign WHERE user_id = ?",
        [userId]
      );

      // Fetch total number of character sheets created by the user
      const totalCharacterSheets = await dbQuery(
        "SELECT COUNT(*) as total FROM character_sheet WHERE user_id = ?",
        [userId]
      );

      // Combine user data with campaign and character sheet counts
      const response = {
        ...userData[0],
        totalCampaigns: totalCampaigns[0].total,
        totalCharacterSheets: totalCharacterSheets[0].total,
      };

      return res.status(200).json(response);
    } catch (error) {
      // Use type guard to check for error with message
      if (isErrorWithMessage(error)) {
        return res.status(500).json({ error: error.message });
      } else {
        // If the error doesn't fit the expected shape, send a generic message
        return res
          .status(500)
          .json({ error: "An unexpected internal error occurred" });
      }
    }
  }

  // Handle other HTTP methods if necessary
  return res.status(405).end();
};

export default getUserData;
