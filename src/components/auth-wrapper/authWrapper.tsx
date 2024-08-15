"use client";
import { USERKIT_TOKEN } from "@component/constants/setting";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthWrapper = (Component: any) => {
    return function ProtectedRoute(props: any) {
        const router = useRouter();
        const pathname = usePathname();
        const auth = localStorage.getItem(USERKIT_TOKEN);
        const skipAuth = ["/auth/sign-in", "/auth/sign-in/email", "/auth/sign-up",];

        useEffect(() => {
            if (!auth && !skipAuth.includes(pathname)) {
                router.push("/auth/sign-in");
            }
        }, []);
        if (!auth && !skipAuth.includes(pathname)) {
            return null;
        }
        return <Component {...props} />;
    };
};

export default AuthWrapper;
