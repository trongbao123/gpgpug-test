"use client";
import { IconLeft } from "@component/constants/Icon";
import EmailSignUpForm from "./_components/EmailSignUpForm";
import SignUpForm from "./_components/SignUpForm";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isEmail = searchParams.get("isEmail");

    return (
        <div className="content">
            <div className="sign-in_navigation" onClick={() => router.push("/")}>
                <IconLeft /> Return to GPGPU
            </div>

            {isEmail ? <EmailSignUpForm /> : <SignUpForm />}
        </div>
    );
};

export default page;
