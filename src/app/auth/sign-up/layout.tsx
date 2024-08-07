import React from "react";

type Props = {};

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="sign_up-container">
            <div className="overlay" />
            {children}
        </div>
    );
};

export default layout;
