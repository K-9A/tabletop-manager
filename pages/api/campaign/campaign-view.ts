import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/custom-hooks/character-sheet-hooks/create-character-hooks/with-rate-limit";
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

    const allowedFields = ['campaign_name', 'campaign_description'];

    //Check to see if the route includes a campaign_id payload. If it does, this should
    //trigger a retrieval for name and description rather than everything, beacuse this data can be edited.
    if (campaignId) {

      const { campaignId } = req.query;

      //Ensure field is always a string
      const field = Array.isArray(fieldName) ? fieldName[0] : fieldName;

      if (!allowedFields.includes(field)) {
        return res.status(400).json({ error: "Invalid field name" });
      }
      try {
        const campaignData = await dbQuery(
          `SELECT ${fieldName} FROM campaign WHERE campaign_id = ?`,
          [campaignId]
        );

        if (campaignData.length === 0) {
          return res.status(404).json({ error: "Campaign not found" });
        }
        return res.status(200).json({ success: true, data: campaignData[0] });
      } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
      }
    } else {//Otherwise this is an initial get request to populate the view page.
      try {

        const { campaignId } = req.query;

        const campaignData = await dbQuery(
          `SELECT 
          c.campaign_id, 
          u.user_id, 
          u.username 
         FROM 
          campaign c
         JOIN 
          users u ON c.user_id = u.user_id
         WHERE 
          u.user_id = ?`,
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
