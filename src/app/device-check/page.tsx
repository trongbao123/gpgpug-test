"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Google } from "@/constants/Icon";

import SigninContainer from "./_components/siginContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Notification from "@component/components/common/notification";
import { useLoading } from "@component/contexts/loadingContext";
import * as yup from "yup";

import { loginCli } from "@component/services/auth";
import TextInput from "../auth/sign-up/_components/TextInput";

type Props = {};
const Signin: React.FC<Props> = ({}) => {
    const router = useRouter();
    const { setIsLoading } = useLoading();
    const searchParams = useSearchParams();
    const deviceCode = searchParams.get("device_code");
    const schema = yup
        .object({
            email: yup.string().email("Invalid email").required("Email is required"),
            password: yup.string().required("Password is required"),
        })
        .required();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handlNextAuth = async (data: any) => {
        setIsLoading(true);
        try {
            const response: any = await loginCli({
                data: {
                    email: data.email,
                    password: data.password,
                    deviceCode: deviceCode,
                },
            });
            if (response && response.statusCode) {
                throw response;
            } else {
                Notification({
                    type: "success",
                    message: "Sign in successfully!",
                    placement: "top",
                });
                router.push("/device-check/success");
            }
        } catch (error: any) {
            Notification({
                type: "error",
                message: error?.message || error,
                placement: "top",
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <SigninContainer>
            <div className="signin-option">
                <form onSubmit={handleSubmit(handlNextAuth)} className="signin-email">
                    {errors && <p className="error">{errors.email?.message || errors.password?.message}</p>}
                    <div className="signin-email-content">
                        <TextInput
                            name="email"
                            label="ID"
                            type="email"
                            placeholder="Email address"
                            register={register}
                        />
                    </div>
                    <div className="signin-email-content">
                        <TextInput
                            register={register}
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="signin-email-content">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </SigninContainer>
    );
};

export default Signin;
