//API for "Traditional" login method. Username, Email, Pass

import { NextApiRequest, NextApiResponse } from "next";
import { dbQuery } from "@/utils/dbQuery";
import bcrypt from "bcrypt";

interface User {
  user_id: string;
  username: string;
  user_password: string;
}

const loginHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== "POST") {
    return void res.status(405).end(); // Method not allowed if not POST
  }

  //Destructure username and password data from body
  const { username, password } = req.body;

  //Do user validation
  if (!username || !password) {
    //If either user or pass are empty.
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  //If password data is submitted, check to see if its valid.
  try {
    //Lookup a user in the database to see if there's a match
    const users = await dbQuery<User>(
      "SELECT user_id, username, user_password FROM users WHERE username = ?",
      [username]
    );

    //Pull out the first item from the query table for further validation. Smoother than just checking array length.
    const user: User | undefined = users[0] as User;

    if (!user) {
      //If what was pulled out was empty
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const passwordMatches = await bcrypt.compare(password, user.user_password);

    if (!passwordMatches) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    // TODO: Handle session creation or JWT generation here

    return res.status(200).json({ message: "Logged in successfully." });
  } catch (error) {
    res.status(500).json({ error: "Database or server error." });
  }
};

export default loginHandler;
