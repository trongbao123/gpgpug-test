"use client";
import { SessionProvider } from "next-auth/react";

const AuthWrapperSession = ({ children }: { children: React.ReactNode }) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default AuthWrapperSession;
