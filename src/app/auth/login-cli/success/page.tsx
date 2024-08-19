"use client";
import Image from "next/image";
import SigninContainer from "../_components/siginContainer";
import { useRouter } from "next/navigation";

const Success = () => {
    const router = useRouter();
    return (
        <SigninContainer>
            <h1>Success</h1>
            <div className="signin-google" onClick={() => router.push("/")}>
                <Image width={18} height={18} src={"/images/arrow.svg"} alt="arrow" />
                <p>Return to home</p>
            </div>
        </SigninContainer>
    );
};

export default Success;
