import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import authOptions from "@/pages/api/auth/[...nextauth]";

const submitCreateSheet = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  const { campaignId, fieldName, value } = req.query;

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (!campaignId) {
    return res.status(400).json({ error: "Campaign ID not provided" });
  }

  if (req.method === "GET") {
    try {
      const campaignData = await dbQuery(
        `SELECT 
        c.campaign_id, 
        c.campaign_name,
        c.campaign_description,
        u.user_id, 
        u.username 
      FROM 
        campaign c
      JOIN 
        users u ON c.user_id = u.user_id
      WHERE 
        c.campaign_id = ?`,
        [campaignId]
      );

      if (campaignData.length === 0) {
        return res.status(404).json({ error: "Campaign not found" });
      }

      const { campaign_name, campaign_description, ...readOnlyData } =
        campaignData[0];

        res.status(200).json({ success: true, data: campaignData[0] });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else if (req.method === "PUT") {
    if (!campaignId || !fieldName || !value) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    try {
      await dbQuery(
        `UPDATE campaign SET ${fieldName} = ? WHERE campaign_id = ?`,
        [value, campaignId]
      );
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(withCreateRateLimit(submitCreateSheet))
);
