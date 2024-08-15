"use client";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { USERKIT_TOKEN } from "@component/constants/setting";

export const AuthContext = createContext<any>(null);

const AuthProvider = (props: any) => {
    const { children } = props || {};

    const [user, setUser] = useState(null);

    const checkLogin = useCallback(() => {
        const storedUser = localStorage.getItem(USERKIT_TOKEN);
        if (storedUser) setUser(JSON.parse(storedUser));
        else setUser(null);
    }, [setUser]);

    useEffect(() => {
        checkLogin();
    }, [checkLogin]);

    const value = { user, checkLogin };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};

export { AuthProvider, useAuth };
