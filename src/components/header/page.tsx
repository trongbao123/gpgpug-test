"use client";
import { USERKIT_TOKEN } from "@component/constants/setting";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Popover, Select } from "antd";
import type { PopoverProps } from "antd";
import { Option } from "antd/es/mentions";

const SELECTED_PROVIDER = "selectedProvider";
const Header = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [selected, setSelected] = useState("provider");

    const handleChange = (event: any) => {
        console.log(event);
        // const select = event.target.value;
        setSelected(event);
        localStorage.setItem("selectedProvider", event);
        if (event === "provider") {
            router.push("/");
        } else if (event === "cloud") {
            router.push("/project");
        }
    };
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

    useEffect(() => {
        const storedValue = localStorage.getItem(SELECTED_PROVIDER);
        if (storedValue) setSelected(storedValue);
    }, []);
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
                        {session?.user && (
                            <>
                                <div className="line"></div>
                                <div className="select">
                                    <div className="select-logo">
                                        <Image
                                            width={18}
                                            height={18}
                                            src={`/images/${
                                                selected === "provider" ? "icon-word.png" : "cloudicon.svg"
                                            }`}
                                            alt="logo-word"
                                        />
                                    </div>
                                    {/* <select
                                        className="select-provider"
                                        name="provider"
                                        id="provider"
                                        value={selected}
                                        onChange={handleChange}
                                    >
                                        <option value="provider">Provider</option>
                                        <option value="cloud">Cloud</option>
                                    </select> */}
                                    <Select className="select-provider" value={selected} onChange={handleChange}>
                                        <Option value="provider">Provider</Option>
                                        <Option value="cloud">Cloud</Option>
                                    </Select>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="header-right">
                        {session?.user && (
                            <div className="header-right-buttons">
                                {selected === "provider" ? (
                                    <div className="add-new-deivce" onClick={() => router.push("/connect")}>
                                        <p>Connect New Device</p>
                                        <Image width={16} height={16} src={"/images/icon_plus.svg"} alt="search" />
                                    </div>
                                ) : (
                                    <div className="add-new-project" onClick={() => router.push("/create-project")}>
                                        <p>Create project</p>
                                        <Image width={16} height={16} src={"/images/icon_plus.svg"} alt="search" />
                                    </div>
                                )}
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
                                <Popover
                                    style={{ cursor: "pointer" }}
                                    placement="bottomRight"
                                    content={
                                        <div
                                            style={{ cursor: "pointer" }}
                                            className="account-popover"
                                            onClick={() => {
                                                signOut({ redirect: true, callbackUrl: "/auth/sign-in" });
                                                localStorage.removeItem(USERKIT_TOKEN);
                                                localStorage.removeItem(SELECTED_PROVIDER);
                                            }}
                                        >
                                            logout
                                        </div>
                                    }
                                    trigger="click"
                                >
                                    <Image
                                        width={32}
                                        height={32}
                                        src={"/images/account.svg"}
                                        alt="account-icon"
                                        className="account-icon"
                                    />
                                </Popover>
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
