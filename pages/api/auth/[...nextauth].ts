import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbQuery } from "@/utils/dbQuery";
import bcrypt from "bcrypt";
import { User } from "@/components/types/user-types";

//Type Interface
type Credentials = {
  username: string;
  password: string;
};

export default NextAuth({
  debug: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { username, password } = credentials;

        const users = await dbQuery(
          "SELECT user_id, username, user_password FROM users WHERE username = ?",
          [username]
        );

        const user: User | undefined = users[0] as User;

        if (!user) {
          console.log("User doesn't match");
          return null;
        }

        const passwordMatches = await bcrypt.compare(
          password,
          user.user_password
        );

        // Check if credentials are provided
        if (!credentials) {
          throw new Error("Credentials object is missing.");
        }

        // Check if both username and password are of type string
        if (
          typeof credentials.username !== "string" ||
          typeof credentials.password !== "string"
        ) {
          throw new Error("Invalid type of credentials.");
        }

        // Check if the user exists
        if (!user) {
          throw new Error("Invalid credentials. Bad user credentials.");
        }

        return { id: user.user_id.toString(), name: user.username };
      },
    }),
  ],
  // Session configuration
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },

});
