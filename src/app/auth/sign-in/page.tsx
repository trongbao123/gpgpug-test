"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Google } from "@/constants/Icon";

import SigninContainer from "./_components/siginContainer";

type Props = {};
const Signin: React.FC<Props> = ({}) => {
    const router = useRouter();
    return (
        <SigninContainer>
            <div className="signin-option">
                {/* <div className="signin-google">
                    <Google />
                    <p>Google Sign in</p>
                </div> */}
                <div className="signin-google" onClick={() => router.push("/auth/sign-in/email")}>
                    <Image width={18} height={18} src={"/images/email.svg"} alt="google" />
                    <p>Email Sign in</p>
                </div>
            </div>
        </SigninContainer>
    );
};

export default Signin;
