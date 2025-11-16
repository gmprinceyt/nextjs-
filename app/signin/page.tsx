"use client";
import { signIn } from "next-auth/react";

import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter your email "
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="passsword"
        placeholder="Enter your password "
      />
      <button
        onClick={async () => {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/"
          });
          console.log(res);
        }}
      >
        Signin
      </button>
    </div>
  );
}
