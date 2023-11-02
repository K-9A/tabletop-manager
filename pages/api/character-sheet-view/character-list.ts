import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/helper/with-rate-limit";
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
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    try {
      const characters = await dbQuery(
        "SELECT cp.character_ID, cp.character_name, cp.char_class, cp.char_level, cs.date_created, c.campaign_id FROM character_sheet cs JOIN core_profile cp ON cs.character_ID = cp.character_ID LEFT JOIN campaign c ON cs.campaign_id = c.campaign_id WHERE cs.user_id = ?",
        [userId]
      );
      return res.status(200).json({ success: true, data: characters });
    } catch (error) {
      //Something went wrong
      res.status(500).json({ success: false, error: error.message });
    }
  } else if (req.method === "DELETE") {
    const { characterId } = req.body;

    if (!characterId) {
      return res.status(400).json({ error: "Character ID is required" });
    }

    try {
      await dbQuery("DELETE FROM character_sheet WHERE character_id = ?", [characterId]);
      return res
        .status(200)
        .json({ success: true, message: "Character deleted successfully" });
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
