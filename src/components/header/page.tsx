"use client";
import { USERKIT_TOKEN } from "@component/constants/setting";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const { data: session } = useSession();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0.5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (session && session.user?.email) localStorage.setItem(USERKIT_TOKEN, JSON.stringify(session.user.email));
    }, [session]);
    return (
        <header className={isScrolled ? "header_background" : ""}>
            <div className="container">
                <div className="menu-header">
                    <div className="header-left">
                        <div className="logo" onClick={() => router.push("/")}>
                            <Image
                                width={25}
                                height={24}
                                src={"/images/icon-footer.svg"}
                                alt="footer"
                                className="logo-mob"
                            />
                            <Image width={110} height={24} src={"/images/logo.svg"} alt="logo" className="logo-desk" />
                        </div>
                        <div className="line"></div>
                        <div className="select">
                            <div className="select-logo">
                                <Image width={16} height={16} src={"/images/icon-word.png"} alt="logo-word" />
                            </div>
                            <select
                                className="select-provider"
                                name="provider"
                                id="provider"
                                value="1"
                                onChange={() => {}}
                            >
                                <option value="1">Provider</option>
                            </select>
                        </div>
                    </div>

                    <div className="header-right">
                        {session?.user && (
                            <div className="header-right-buttons">
                                <div className="add-new-deivce" onClick={() => router.push("/connect")}>
                                    <p>Connect New Device</p>
                                    <Image width={16} height={16} src={"/images/icon_plus.svg"} alt="search" />
                                </div>

                                <div className="add-new-deivce" onClick={() => router.push("/create-project")}>
                                    <p>Create project</p>
                                    <Image width={16} height={16} src={"/images/icon_plus.svg"} alt="search" />
                                </div>
                            </div>
                        )}

                        <div className="icon-bell">
                            <Image width={32} height={32} src={"/images/bell.svg"} alt="bell" />
                        </div>
                        {session?.user ? (
                            <div className="account">
                                <Image
                                    width={40}
                                    height={40}
                                    src={"/images/menu-mob.svg"}
                                    alt="account-icon"
                                    className="menu-table"
                                />
                                <Image
                                    width={32}
                                    height={32}
                                    src={"/images/account.svg"}
                                    alt="account-icon"
                                    className="account-icon"
                                />
                            </div>
                        ) : (
                            <div className="account_no_login">
                                <Link href="/auth/sign-in">Sign in</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
