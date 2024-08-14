import React from "react";
import HeaderMain from "../home/_components/header-main/page";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <div className="create-project">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                {children}
            </div>
        </div>
    );
};

export default layout;
