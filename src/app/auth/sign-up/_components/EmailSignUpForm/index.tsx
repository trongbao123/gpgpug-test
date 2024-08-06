"use client";
import { useState, type FC } from "react";
import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";
import TextInput from "../TextInput";
import "./index.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";

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
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
});
const EmailSignUpForm: FC<Props> = (props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const password = watch("password", "");
    console.log(errors);
    const [isSendingCode, setIsSendingCode] = useState(false);

    const handleSendCode = () => {
        // Logic to send verification code
        setIsSendingCode(true);
    };

    const handleCreateAccount = (data: any) => {
        // Logic to create account
        console.log(data);
    };

    return (
        <div className="signupForm">
            <Icon src="/images/logo_no-slogan.svg" alt="icon" height={24} width={24} />

            <h1>Sign up</h1>

            <form onSubmit={handleSubmit(handleCreateAccount)}>
                <Text className="terms-text">
                    By logging in to GPGPU, <br /> you agree to Terms of Service and Privacy Policy.
                </Text>

                <TextInput
                    name="email"
                    label="Email address"
                    type="email"
                    buttonText={isSendingCode ? "Sending..." : "Send a code"}
                    onButtonClick={handleSendCode}
                    register={register}
                />
                {errors.email ? <p className="error">{errors.email.message}</p> : <p className="no-error"></p>}
                <TextInput name="verificationCode" label="Verification Code" type="text" register={register} />
                {errors.verificationCode ? (
                    <p className="error">{errors.verificationCode.message}</p>
                ) : (
                    <p className="no-error"></p>
                )}

                <TextInput name="password" label="Password" type="password" register={register} />
                {errors.password ? (
                    <div className="validation-rules">
                        <p className={password.length >= 8 ? "valid" : "invalid"}>8 characters or more</p>
                        <p className={/\d/.test(password) ? "valid" : "invalid"}>Including numbers</p>
                        <p className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid" : "invalid"}>
                            Include special characters
                        </p>
                    </div>
                ) : null}
                <TextInput name="confirm-password" label="Re-enter password" type="password" register={register} />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                <Button text="Create account" type="submit" />
            </form>

            <Text className="signin-text">
                Do you already have an account? <a href="/signin">Sign in</a>
            </Text>
        </div>
    );
};

export default EmailSignUpForm;
