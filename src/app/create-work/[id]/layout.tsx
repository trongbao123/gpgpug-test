import HeaderMain from "@component/app/home/_components/header-main/page";
import React from "react";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <div className="create-work">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                {children}
            </div>
        </div>
    );
};

export default layout;
