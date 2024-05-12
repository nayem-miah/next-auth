
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    handlers:{GET,POST},
    auth,
    signIn,
    signOut
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientIdSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
