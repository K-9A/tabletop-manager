import NextAuth from "next-auth";
import { authOptions } from "@/components/helper/authOptions";

export default NextAuth(authOptions);