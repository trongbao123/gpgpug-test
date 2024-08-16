"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "../../styles/index.scss";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Head from "next/head";
import { Suspense, useEffect } from "react";
import { LoadingProvider } from "@component/contexts/loadingContext";
import { AuthProvider } from "@component/contexts/AuthContext";
import AuthWrapper from "@component/components/auth-wrapper/authWrapper";
import AuthWrapperSession from "@component/contexts/authWrapper";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "GPGPU",
//     description: "GPGPU Dashboard",
// };

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    useEffect(() => {
        document.title = "GPGPU";
    }, []);
    return (
        <AuthWrapperSession>
            <html lang="en">
                <Head>
                    <link rel="shortcut icon" href="./logo.png" sizes="any" />
                    <title>{document.title}</title>
                </Head>
                <body className={inter.className}>
                    <LoadingProvider>
                        {/* <AuthProvider> */}
                        <Header />
                        <Suspense>{children}</Suspense>
                        <Footer />
                        {/* </AuthProvider> */}
                    </LoadingProvider>
                </body>
            </html>
        </AuthWrapperSession>
    );
};

export default AuthWrapper(RootLayout);
