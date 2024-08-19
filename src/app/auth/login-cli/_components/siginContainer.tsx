"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../index.scss";

import Link from "next/link";

type Props = {
    children?: React.ReactNode;
};
const SigninContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className="container-signin">
            <div className="overlay" />
            <div className="content">
                <div className="signin">
                    <div className="signin-logo">
                        <Image width={22} height={23} src={"/images/icon-footer.svg"} alt="logo" />
                    </div>

                    <div className="signin-title">Login CLI</div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SigninContainer;
