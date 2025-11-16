import { AuthOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const auth = NextAuth(AuthOptions);

export { auth as GET, auth as POST }

