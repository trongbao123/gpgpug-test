import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "../../styles/index.scss";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Head from "next/head";
import { Suspense } from "react";
import { LoadingProvider } from "@component/contexts/loadingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GPGPU",
    description: "GPGPU Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link rel="shortcut icon" href="./logo.png" sizes="any" />
            </Head>
            <body className={inter.className}>
                <LoadingProvider>
                    <Header />
                    <Suspense>{children}</Suspense>
                    <Footer />
                </LoadingProvider>
            </body>
        </html>
    );
}
