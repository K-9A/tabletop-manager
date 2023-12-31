import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import validator from "validator";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { customAlphabet } from "nanoid";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";

//THIS ROUTE IS RESPONSIBLE FOR BOTH, SUBMITTING CAMPAIGN DATA AND FETCHING TO A LIST
const submitCreateSheet = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "POST") {
    try {
      const { campaign_name, campaign_description, userId } = req.body;

      const sanitizedData = {
        campaign_name: validator.escape(campaign_name),
        campaign_description: validator.escape(campaign_description),
      };

      // Define a custom nanoid alphabet function: 8-character length with the full alphabet and numbers
      const nanoid = customAlphabet(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        12
      );
      // Generate a unique 12-character ID using nanoid
      const campaign_id = nanoid();

      const result = await dbQuery(
        "INSERT INTO campaign (campaign_id, campaign_name, campaign_description, user_id) VALUES (?, ?, ?, ?)",
        [
          campaign_id,
          sanitizedData.campaign_name,
          sanitizedData.campaign_description,
          userId,
        ]
      );

      res.status(200).json({ success: true, data: result });
    } catch (error) {
      //Something went wrong
      res.status(500).json({ success: false, error: error.message });
    }
  } else if (req.method === "GET") {
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    try {
      const campaigns = await dbQuery(
        "SELECT campaign_id, campaign_name, date_created FROM campaign WHERE user_id = ?",
        [userId]
      );
      return res.status(200).json({ success: true, data: campaigns });
    } catch (error) {
      //Something went wrong
      res.status(500).json({ success: false, error: error.message });
    }
  } else if (req.method === "DELETE") {
    const { campaignId } = req.body;

    if (!campaignId) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }

    try {
      await dbQuery("DELETE FROM campaign WHERE campaign_id = ?", [campaignId]);
      return res
        .status(200)
        .json({ success: true, message: "Campaign deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(withCreateRateLimit(submitCreateSheet))
);
