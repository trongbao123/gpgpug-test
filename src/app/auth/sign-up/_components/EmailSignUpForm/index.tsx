"use client";
import { useState } from "react";
import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";
import TextInput from "../TextInput";
import "./index.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { IconV, IconX } from "@component/constants/Icon";

type Props = {};

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    verificationCode: yup.string().required("Verification code is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(/\d/, "Password must include a number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must include a special character"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Confirm password is required"),
});
const Page = (props: Props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const password = watch("password", "");
    const [isSendingCode, setIsSendingCode] = useState(false);

    const handleSendCode = () => {
        // Logic to send verification code
        setIsSendingCode(true);
    };

    const handleCheckCode = (e: any) => {
        e.preventDefault();
        setIsSendingCode(false);
    };

    const handleCreateAccount = (data: any) => {
        // Logic to create account
        console.log(data);
    };

    return (
        <>
            <h1>Sign up</h1>

            <form onSubmit={handleSubmit(handleCreateAccount)}>
                <Text className="terms-text">
                    By logging in to GPGPU, <br /> you agree to Terms of Service and Privacy Policy.
                </Text>

                <TextInput
                    name="email"
                    label="Email address"
                    type="email"
                    register={register}
                    buttonText={isSendingCode ? "Sended" : "Send a code"}
                    onButtonClick={handleSendCode}
                />
                {errors.email ? <p className="error">{errors.email.message}</p> : <p className="no-error"></p>}

                <TextInput
                    name="verificationCode"
                    label="Verification Code"
                    type="text"
                    register={register}
                    buttonText={isSendingCode ? "Check" : ""}
                    onButtonClick={handleCheckCode}
                />
                {errors.verificationCode ? (
                    <p className="error">{errors.verificationCode.message}</p>
                ) : (
                    <p className="no-error"></p>
                )}

                <TextInput name="password" label="Password" type="password" register={register} />
                {password || errors.password ? (
                    <div className="validation-rules">
                        <p className={password.length >= 8 ? "valid" : "invalid"}>
                            {password.length >= 8 ? <IconV /> : <IconX />} 8 characters or more
                        </p>
                        <p className={/\d/.test(password) ? "valid" : "invalid"}>
                            {/\d/.test(password) ? <IconV /> : <IconX />} Including numbers
                        </p>
                        <p className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid" : "invalid"}>
                            {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? <IconV /> : <IconX />} Include special characters
                        </p>
                    </div>
                ) : null}
                <TextInput name="confirmPassword" label="Re-enter password" type="password" register={register} />
                {errors.confirmPassword ? (
                    <p className="error mb-24">{errors.confirmPassword.message}</p>
                ) : (
                    <p className="no-error mb-24"></p>
                )}
                <Button text="Create account" type="submit" />
            </form>
        </>
    );
};

export default Page;
