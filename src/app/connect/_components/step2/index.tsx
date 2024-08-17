"use client";
import { steps } from "@component/constants/constant";
import "./index.scss";
import Image from "next/image";
import { useState } from "react";
import Notification from "@component/components/common/notification";

type Props = {
    active: number;
};
const Step2: React.FC<Props> = ({ active }) => {
    const [copySuccess, setCopySuccess] = useState("");

    const copyToClipboard = async () => {
        const textToCopy = document.getElementsByClassName("copy-text")[0].textContent;
        console.log(textToCopy);
        try {
            if (!textToCopy) return;
            await navigator.clipboard.writeText(textToCopy);
            Notification({
                type: "success",
                message: "Copied!",
                placement: "top",
            });
            setCopySuccess("Copied!");
        } catch (err) {
            setCopySuccess("Failed to copy!");
        }
    };
    return (
        <div className="step2">
            <div className="step2-header">
                <p>Download docker desktop</p>
            </div>
            <div className="step2-body">
                {steps[active]?.content.map((item, index) => {
                    return (
                        <div key={item?.id} className="step2-body-item">
                            <div className="step2-body-item-content">
                                {item?.id}. {item?.title}
                            </div>
                            <div className="step2-body-item-icon">
                                <span className="copy-text">{item?.link}</span>

                                <Image
                                    src={item?.img}
                                    alt="logo"
                                    width={28}
                                    height={28}
                                    style={{
                                        padding: "7px",
                                        borderRadius: "7px",
                                        border: "1px solid #999EA7",
                                        cursor: "pointer",
                                    }}
                                    onClick={copyToClipboard}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Step2;
