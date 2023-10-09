import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbQuery } from "@/utils/dbQuery";
import bcrypt from "bcrypt";
import { User } from "@/components/types/user-types";

//Type Interface
type Credentials = {
  username: string;
  password: string;
  id: string;
};

export default NextAuth({
  debug: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { username, password } = credentials as Credentials;

        const users = await dbQuery(
          "SELECT user_id, username, user_password FROM users WHERE username = ?",
          [username]
        );

        const user: User | undefined = users[0] as User;

        const creds = credentials as Credentials;

        //Generic error message for bad login credentials. Better practice to keep bad login info vague instead of
        //specifying if User or Pass is wrong. Gives bad players hints if they're trying to bruteforce.
        const invalidMessage = "Invalid Login Credentials";

        //If submitted user doesn't exist.
        if (!user) {
          console.log("User doesn't match");
          throw new Error(invalidMessage);
        }

        //Unhash password and compare to user submission
        const passwordMatches = await bcrypt.compare(
          password,
          user.user_password
        );

        // Check if credentials are provided at all
        if (!credentials) {
          throw new Error("Login credentials are missing.");
        }

        // Check if both username and password are of type string
        if (
          typeof creds.username !== "string" ||
          typeof creds.password !== "string"
        ) {
          throw new Error(invalidMessage);
        }

        // Check if the user exists
        if (!user) {
          throw new Error("Invalid Login credentials.");
        }
        //Check is password is correct from the
        if (!passwordMatches) {
          throw new Error(invalidMessage);
        }

        return { id: user.user_id.toString(), name: user.username };
      },
    }),
  ],
  
  // Session configuration
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      (session.user as any).id = token.sub;

      return session;
    },
  },
});
