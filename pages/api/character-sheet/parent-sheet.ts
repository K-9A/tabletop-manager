import { NextApiRequest, NextApiResponse } from "next";
import { withCreateRateLimit } from "@/components/character-sheet/create/create-subsections/submission/with-rate-limit";
import headersMiddleware from "@/utils/headers-middleware";
import { loggerMiddleware } from "@/utils/logging/logger-middleware";
import { dbQuery } from "@/utils/dbQuery";
import { getServerSession } from "next-auth";
import authOptions from "@/pages/api/auth/[...nextauth]";
import { OkPacketParams } from "mysql2"; //For Typescript

const submitCreateSheet = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ success: false, message: "Not authenticated" });
  }
  

  if (req.method === "POST") {
    const {
      userId
    } = req.body;

    const result = await dbQuery("INSERT INTO character_sheet (user_id) VALUES (?)", [userId]) as OkPacketParams;
    const characterId = result.insertId;


    res.status(200).json({ success: true, characterId });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default loggerMiddleware(
  headersMiddleware(
    withCreateRateLimit(
      submitCreateSheet
    )
  )
);