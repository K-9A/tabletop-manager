import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/custom-hooks/character-sheet-hooks/create-character-hooks/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";

const submitCreateSheet = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }
  if (req.method === "GET") {
    const campaignId = req.query.campaignId;

    if (!campaignId) {
      return res.status(400).json({ error: "Campaign ID not found" });
    }

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
      
      return res.status(200).json({ success: true, data: campaignData[0] });
    } catch (error) {
      //Something went wrong
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(withCreateRateLimit(submitCreateSheet))
);
