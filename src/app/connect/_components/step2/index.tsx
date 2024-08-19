"use client";
import Notification from "@component/components/common/notification";
import { steps } from "@component/constants/constant";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./index.scss";

type Props = {
    active: number;
};
const Step2: React.FC<Props> = ({ active }) => {
    const params = useSearchParams();
    const deviceName = params.get("deviceName");
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
        } catch (err) {}
    };
    return (
        <div className="step2">
            <div className="step2-header">
                <p>Download docker desktop</p>
            </div>
            <div className="step2-body">
                {deviceName !== "Linux" &&
                    steps[active]?.content.map((item, index) => (
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
                    ))}
                {deviceName === "Linux" && (
                    <div className="shell-container">
                        <div className="shell-content">
                            <div style={{ padding: "20px", overflowY: "auto" }}>
                                {steps[active]?.markdown &&
                                    steps[active]?.markdown.map((key, index) => (
                                        <div key={index}>
                                            <h2 style={{ color: "white" }}>{key.title}</h2>
                                            <div>
                                                <div className="shell-header">
                                                    <p className="shell-header-title">Shell</p>
                                                    <button className="shell-header-icon">
                                                        <Image
                                                            src={"/images/icon_copy.svg"}
                                                            alt="logo"
                                                            width={15}
                                                            height={15}
                                                            style={{
                                                                color: "white",
                                                                display: "block",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={copyToClipboard}
                                                        />
                                                    </button>
                                                </div>
                                                <SyntaxHighlighter
                                                    language="bash"
                                                    style={docco}
                                                    customStyle={{
                                                        background: "#202020",
                                                        color: "white",
                                                        padding: "10px",
                                                        overflowX: "hidden",
                                                        marginBottom: "7px",
                                                    }}
                                                    className="copy-text syntax-highlighter-container"
                                                >
                                                    {key.content}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Step2;
