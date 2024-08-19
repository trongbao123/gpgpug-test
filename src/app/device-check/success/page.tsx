"use client";
import Image from "next/image";
import SigninContainer from "../_components/siginContainer";
import { useRouter } from "next/navigation";

const Success = () => {
    const router = useRouter();
    return (
        <SigninContainer>
            <h1>Success</h1>
            <div className="signin-notice" onClick={() => router.push("/")}>
                <p>The authentication process is complete. Please close this page.</p>
            </div>
        </SigninContainer>
    );
};

export default Success;
