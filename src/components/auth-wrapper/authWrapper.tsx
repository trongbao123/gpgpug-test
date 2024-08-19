"use client";
import { unAuthenticatedRoute } from "@component/constants/constant";
import { USERKIT_TOKEN } from "@component/constants/setting";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, type ReactNode } from "react";

interface AuthWrapperProps {
    children: ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const skipAuth = [
        "/auth/sign-in",
        "/auth/sign-in/email",
        "/auth/sign-up",
        "/",
        "/device-check",
        "/device-check/success",
    ];

    const handleAuthentication = () => {
        const localToken = localStorage.getItem(USERKIT_TOKEN);

        if (session?.accessToken || localToken) {
            if (session?.accessToken) {
                localStorage.setItem(USERKIT_TOKEN, session.accessToken);
            }
            // if (skipAuth.includes(pathname)) {
            //     router.push("/");
            // }
        }
        // else if (!skipAuth.includes(pathname)) {
        //     router.push("/auth/sign-in");
        // }
    };

    useEffect(() => {
        if (status !== "loading") {
            handleAuthentication();
        }
    }, [pathname, status]);
    return <>{children}</>;
    // return status === "loading" ||
    //     (!session?.accessToken && !localStorage.getItem(USERKIT_TOKEN) && !skipAuth.includes(pathname)) ? null : (
    //     <>{children}</>
    // );
};

export default AuthWrapper;
