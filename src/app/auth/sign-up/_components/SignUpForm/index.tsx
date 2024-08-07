"use client";
import { Envelope, Google } from "@component/constants/Icon";
import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";
import "./index.scss";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
    const router = useRouter();
    return (
        <div className="signup-form">
            <Icon src="/images/logo_no-slogan.svg" alt="icon" height={24} width={24} />

            <h1>Sign up</h1>

            <Text className="terms-text">
                By logging in to GPGPU, <br />
                you agree to Terms of Service and Privacy Policy.
            </Text>

            <div className="form-button">
                <Button
                    icon={<Google />}
                    text="Google Sign up"
                    onClick={() => {
                        /* Handle Google sign up */
                    }}
                />
                <Button
                    icon={<Envelope />}
                    text="Email Sign up"
                    onClick={() => {
                        /* Handle Email sign up */
                        router.push("/auth/sign-up?isEmail=true");
                    }}
                />
            </div>

            <Text className="signin-text">
                Do you already have an account? <a href="/auth/sign-in">Sign in</a>
            </Text>
        </div>
    );
};

export default Page;
