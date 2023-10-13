import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import validator from "validator";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { customAlphabet } from "nanoid";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";

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

      const result = (await dbQuery(
        "INSERT INTO campaign (campaign_id, campaign_name, campaign_description, user_id) VALUES (?, ?, ?, ?)",
        [campaign_id, sanitizedData.campaign_name, sanitizedData.campaign_description, userId]
      ));

      res.status(200).json({ success: true });
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
