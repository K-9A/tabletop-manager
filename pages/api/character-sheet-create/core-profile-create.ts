import { NextApiRequest, NextApiResponse } from "next";
import { coreProfileSchema } from "@/components/character-sheet/validation-schema/core-profile-schema";
import { dbQuery } from "@/utils/dbQuery";



const validatedCoreProfileCreate = (schema, handler) => async (req, res) => {
  // ... validation logic
};

const submitCoreProfileData = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    try {
      // Extract data from the request body
      const { name, char_class, race, proficiency, char_level, experience, next_level, affinity } = req.body;
      //await dbQuery("INSERT INTO coreProfileTable SET ?", [coreProfileData]);
      console.log(name, char_class, race, proficiency, char_level, experience, next_level, affinity );

      //res.status(200).json({ success: true });
      res.status(200).json({ success: true, message: "Data received!" });
    } catch (error) {
        //Something went wrong
        res.status(500).json({ success: false, error: error.message });
    }
  }else{
    res.status(405).end(); // Method Not Allowed
  }
};

export default submitCoreProfileData;
