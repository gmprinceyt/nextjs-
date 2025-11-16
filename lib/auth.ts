import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const AuthOptions: NextAuthOptions = {
  providers: [
   GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Username",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return {
          id: "1",
          email: credentials?.email,
          name: credentials?.password,
          image: "",
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      token.id = token.sub;
      return token;
    },
    session({ session, token }: any) {
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
