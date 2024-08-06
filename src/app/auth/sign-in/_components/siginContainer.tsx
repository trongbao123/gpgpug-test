"use client";
import Image from "next/image";
import "../index.scss";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { Google } from "@/constants/Icon";

type Props = {
    children?: React.ReactNode;
};
const SigninContainer: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    return (
        <div className="container-signin">
            <div className="overlay" />
            <div className="content">
                <div className="back" onClick={() => router.back()}>
                    <Image width={16} height={16} src={"/images/arrow.svg"} alt="arrow" />
                    <p> Return to GPGPU</p>
                </div>

                <div className="signin">
                    <div className="signin-logo">
                        <Image width={22} height={23} src={"/images/icon-footer.svg"} alt="logo" />
                    </div>

                    <div>
                        <div className="signin-title">Sign in</div>
                        <div className="signin-content">By logging in to GPGPU, </div>
                        <div className="signin-content">you agree to Terms of Service and Privacy Policy.</div>
                    </div>
                    {children}
                    <div className="signin-account">
                        <p>Do you need a new account?</p>
                        <Link href="/auth/sign-up">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninContainer;
