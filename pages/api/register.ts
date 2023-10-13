// API for "Traditional" user registration using Username and Password
import { NextApiRequest, NextApiResponse } from "next";
import { dbQuery } from "@/utils/dbQuery";
import bcrypt from "bcrypt";
import { customAlphabet } from "nanoid";
import validator from "validator";

// Tyepscript Interface for user data structure
interface User {
  user_id: string;
  username: string;
  email: string;
  user_password: string;
}

const registerHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // Ensure only POST method is allowed
  if (req.method !== "POST") {
    return void res.status(405).end(); // Method not allowed if not POST
  }

  // Extract username and password data from the request body
  const { username, email, password } = req.body;

  // Validate user data and make sure the submission for each field aren't empty.
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "Username, email and password are required." });
  }

  const sanitizedData = {
    username: validator.escape(username),
    email: validator.escape(email),
    password: validator.escape(password),
  };

  try {
    // Check if the username is already taken
    const existingUsers = await dbQuery<User>(
      "SELECT user_id, username FROM users WHERE username = ?",
      [sanitizedData.username]
    );

    //If it exists, throw a 409 error.
    if (existingUsers.length) {
      return res.status(409).json({ error: "Username already exists." }); // 409 Conflict
    }

    //At this point we know that the registration submission is valid and will now be processed with necessary additions
    
    // Define a custom nanoid alphabet function: 8-character length with the full alphabet and numbers
    const nanoid = customAlphabet(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      8
    );
    // Generate a unique 8-character ID using nanoid
    const userId = nanoid();

    //Hash the password for storage with 10 salt rounds, as is the standard which is around 10-12 rounds.
    const hashedPassword = await bcrypt.hash(sanitizedData.password, 10);

    // Insert the new user into the database
    await dbQuery(
      "INSERT INTO users (user_id, username, email, user_password) VALUES (?, ?, ?, ?)",
      [userId, sanitizedData.username, sanitizedData.email, hashedPassword] // Include userId in the values to insert
    );

    // Respond to the client. Depending on your application, you might also want to
    // auto-login the user or send back some user data.
    return res.status(201).json({ message: "Registration successful." }); // 201 Created
  } catch (error) {
    res.status(500).json({ error: "Database or server error." });
  }
};

export default registerHandler;
