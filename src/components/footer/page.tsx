"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Footer = () => {
    const path = usePathname();
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer-icon">
                        <Image width={23} height={22} src={"/images/icon-footer.svg"} alt="footer" />
                    </div>
                    <div className="footer-text">© Copyright by gpgpu.ai, inc.</div>
                    <div className="footer-right">
                        <div className="footer-right-send">
                            <Image width={20} height={20} src={"/images/footer-sent.svg"} alt="footer-sent-icon" />
                        </div>
                        <div className="footer-right-close">
                            <Image width={18} height={17} src={"/images/footer-close.svg"} alt="footer-close-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
