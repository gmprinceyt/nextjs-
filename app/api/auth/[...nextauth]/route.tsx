import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter your Email " },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return {
          id: "user1",
          email: credentials?.username || "maihu422@gmail.com"
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { authOptions as GET, authOptions as POST }

