"use client";

import { SessionProvider } from "next-auth/react";
import { Appbar } from "./Appbar";

export default function Provider({children}: {children: React.ReactNode }) {
    return (
        <SessionProvider>
            <Appbar/>
            {children}
        </SessionProvider>
    )
}