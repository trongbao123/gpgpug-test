"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./index.scss";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <header className={isScrolled ? "header_background" : ""}>
            <div className="container">
                <div className="menu-header">
                    <div className="header-left">
                        <div className="logo">
                            <Image width={110} height={24} src={"/images/logo.svg"} alt="logo" />
                        </div>
                        <div className="line"></div>
                        <div className="select">
                            <div className="select-logo">
                                <Image width={16} height={16} src={"/images/icon-word.png"} alt="logo-word" />
                            </div>
                            <select className="select-provider" name="provider" id="provider" value="1" onChange={() => {}}>
                                <option value="1">Provider</option>
                            </select>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="icon-bell">
                            <Image width={32} height={32} src={"/images/bell.svg"} alt="bell" />
                        </div>
                        <div className="account">
                            <Image width={32} height={32} src={"/images/account.svg"} alt="account-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
