import React from "react";
import Icon from "./Icon";
import Text from "./Text";
import Link from "next/link";
import "./FormLayout.scss";

type Props = {
    children?: React.ReactNode;
};

const FormLayout = ({ children }: Props) => {
    return (
        <div className="signup-form">
            <Icon src="/images/logo_no-slogan.svg" alt="icon" height={24} width={24} />
            {children}
            <Text className="signin-text">
                Do you already have an account? <Link href="/auth/sign-in">Sign in</Link>
            </Text>
        </div>
    );
};

export default FormLayout;
