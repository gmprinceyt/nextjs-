"use client"

import { useSession } from "next-auth/react";

export default  function Userinfo() {
    const session = useSession();


  return <div>
    {JSON.stringify(session.data)}
    login
    
  </div>;
}
