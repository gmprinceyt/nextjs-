import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your Email ",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return {
          id: "1",
          email: credentials?.username,
          name: credentials?.password,
          image: ""
        };
      },
    }),
  ],
  callbacks: {
     jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      token.id = token.sub
      return token;
    },
    session({session,token}: any){
        session.user.id  = token.id
        return session 
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};
