import NextAuth from 'next-auth';
import Credentials from "next-auth/providers/credentials";
import { dbQuery } from "@/utils/dbQuery";
import bcrypt from "bcrypt";
import { User } from '@/components/types/user-types';

//Type Interface
type Credentials = {
    username: string;
    password: string;
  };
  

export default NextAuth({

    providers: [
        Credentials({
          name: 'Credentials',
          credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
          },
          authorize: async (credentials) => {
            console.log("Received credentials:", credentials);
            if (!credentials) {
              throw new Error('Credentials object is missing.');
            }
            if (typeof credentials.username !== 'string') {
              throw new Error('Username is not a string.');
            }
            if (typeof credentials.password !== 'string') {
              throw new Error('Password is not a string.');
            }
          
          const { username, password } = credentials as Credentials;

          const users = await dbQuery(
            "SELECT user_id, username, user_password FROM users WHERE username = ?",
            [username]
          );

          const user: User | undefined = users[0] as User;
  
          if (!user) {
            console.log("User doesn't match");
            throw new Error('Invalid credentials. Bad user credentials.');
          }
  
          const passwordMatches = await bcrypt.compare(password, user.user_password);
          
          if (!passwordMatches) {
            console.log("Password doesn't match");
            throw new Error('Invalid credentials.  Bad user credentials.');
          }
  
          // If everything is okay, return a user object.
          return { id: user.user_id, name: user.username }
        }
      })
    ],
    // Add any other NextAuth options you want here...
  })