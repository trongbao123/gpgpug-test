"use client";

import { login } from "@component/services/login";
import TextInput from "../../sign-up/_components/TextInput";
import SigninContainer from "../_components/siginContainer";
import { useForm } from "react-hook-form";
import { USERKIT_TOKEN } from "@component/constants/setting";
import { useRouter } from "next/navigation";

type FormData = {
    email: string;
    password: string;
};
const Email = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();

    const handleSignIn = async (data: any) => {
        try {
            const response: any = await login({ data });
            if (response && response.token) {
                localStorage.setItem(USERKIT_TOKEN, JSON.stringify(response));
                alert("Login success");
                router.push("/");
            } else {
                throw response;
            }
        } catch (error: any) {
            alert(error?.message);
        }
    };

    return (
        <SigninContainer>
            <form onSubmit={handleSubmit(handleSignIn)} className="signin-email">
                <div className="signin-email-content">
                    <TextInput
                        name="email"
                        label="Email address"
                        type="email"
                        placeholder="Email address"
                        register={register}
                    />
                    {/* <p>Email address</p>
                    <input type="email" /> */}
                </div>
                <div className="signin-email-content">
                    <TextInput
                        register={register}
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter Password"
                    />
                    {/* <p>Email address</p>
                    <input type="email" /> */}
                </div>

                <div className="signin-email-content">
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </SigninContainer>
    );
};

export default Email;
