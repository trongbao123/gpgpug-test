import React from "react";
import "./index.scss";

type Props = {
    children: React.ReactNode;
    title: string;
};

const InfoSection = ({ children,title}: Props) => {
    return (
        <div className="info-section">
            <div className="info-section-header">
                <p>{title}</p>
            </div>
            <div className="info-section-body">{children}</div>
        </div>
    );
};

export default InfoSection;
