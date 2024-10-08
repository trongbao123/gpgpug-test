"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import AuthWrapper from "@component/components/auth-wrapper/authWrapper";
import { LoadingProvider } from "@component/contexts/loadingContext";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { Suspense, useEffect } from "react";
import "../../styles/index.scss";
import Footer from "../components/footer/page";
import Header from "../components/header/page";

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
        if (typeof window !== "undefined") {
            window.document.title = "GPGPU";
        }
    }, []);
    return (
        <SessionProvider>
            <html lang="en">
                <Head>
                    <link rel="shortcut icon" href="./logo.png" sizes="any" />
                </Head>
                <body className={inter.className}>
                    <LoadingProvider>
                        <AuthWrapper>
                            <Header />
                            <Suspense>{children}</Suspense>
                            <Footer />
                        </AuthWrapper>
                    </LoadingProvider>
                </body>
            </html>
        </SessionProvider>
    );
};

export default RootLayout;
