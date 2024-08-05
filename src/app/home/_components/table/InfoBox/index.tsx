import React from "react";
import "./styles.scss";
import Image from "next/image";

interface InfoBoxProps {
    title: string;
    value: string;
    icon: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, value, icon }) => {
    return (
        <div className="info-box">
            <div className="info-title">{title}</div>
            <div className="info-content">
                <span className="info-value">{value}</span>
                <Image width={24} height={24} src={icon} alt="icon" className="info-icon" />
            </div>
        </div>
    );
};

export default InfoBox;
