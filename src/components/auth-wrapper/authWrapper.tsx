"use client";
import { unAuthenticatedRoute } from "@component/constants/constant";
import { USERKIT_TOKEN } from "@component/constants/setting";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthWrapper = (Component: any) => {
    return function ProtectedRoute(props: any) {
        const router = useRouter();
        const pathname = usePathname();
        const auth = localStorage.getItem(USERKIT_TOKEN);

        useEffect(() => {
            if (auth) {
                router.push(!unAuthenticatedRoute.includes(pathname) ? pathname : "/");
            }
            if (!auth && !unAuthenticatedRoute.includes(pathname)) {
                router.push("/auth/sign-in");
            }
        }, [auth, pathname]);
        if (!auth && !unAuthenticatedRoute.includes(pathname)) {
            return null;
        }
        return <Component {...props} />;
    };
};

export default AuthWrapper;
