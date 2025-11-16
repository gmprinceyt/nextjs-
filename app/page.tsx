import { getServerSession } from "next-auth";
import Userinfo from "./components/UserInfo";
import { AuthOptions } from "@/lib/auth";


async function getUser(){
  const session = await getServerSession(AuthOptions);
  return session
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      {JSON.stringify(session?.user)}
      <Userinfo/>
    </div>
  );
}