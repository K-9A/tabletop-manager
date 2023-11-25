import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";

const linkCampaign = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }

  if (req.method === "GET") {
    
    //Grab campaign ID
    const { campaignId } = req.query;

    if (!campaignId) {
      return res.status(400).json({ error: "Campaign ID not found." });
    }

    try {
      const campaign = await dbQuery(
        "SELECT campaign_id FROM campaign WHERE campaign_id = ?",
        [campaignId]
      );

      if (campaign.length === 0) {
        return res.status(404).json({ success: false, message: "Campaign not found" });
      }

      return res.status(200).json({ success: true, data: campaign });
    } catch (error) {
      //Something went wrong
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(withCreateRateLimit(linkCampaign))
);
