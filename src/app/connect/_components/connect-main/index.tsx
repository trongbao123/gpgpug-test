"use client";
import { useEffect, useState } from "react";
import "./index.scss";
import Image from "next/image";
import { steps } from "@component/constants/constant";
type Props = {
    children: React.ReactNode;
    active: number;
    handleNextStep: () => void;
    [key: string]: any;
};
const ConnectMain: React.FC<Props> = ({
    checked,
    isFinish,
    children,
    active,
    handleNextStep,
    handleFinish,
    deviceName,
    congratulation,
    handleBackDashboard,
    handleChecked,
    setChecked
}) => {
    const [deviceCode, setDeviceCode] = useState("");

    const handleDeviceCode = (e: any) => {
        setDeviceCode(e.target.value);
    }

    const onClickSubmitDeviceCode = () => {
        handleChecked(deviceCode);
    }

    return (
        <div className="connect-main">
            <div className="connect-main-left">
                <div className="connect-main-left-step">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex-row">
                            <div className={`connect-main-left-step-item ${active === index ? "active" : ""}`}>
                                {active > index ? (
                                    <Image
                                        src={"/images/check.svg"}
                                        alt="check"
                                        width={15}
                                        height={15}
                                        style={{ cursor: "pointer", marginTop: "4px" }}
                                    />
                                ) : (
                                    <p>{step.title}</p>
                                )}
                            </div>
                            {step.id < steps.length ? <div className="completed" /> : <div className="not-completed" />}
                        </div>
                    ))}
                </div>
                <h2 className="setup">{steps[active]?.subTitle}</h2>
                <p className="instruction">{steps[active]?.subContent}</p>

                {steps[active].isCLILog && (
                    <div className="connect-main-left-section-device">
                        <div className="connect-main-left-section-device-input">
                            <div className="input-name">Device Code</div>
                            <input
                                value={deviceCode}
                                className="input"
                                placeholder="Enter Device Code"
                                onChange={handleDeviceCode}
                            />
                        </div>
                        <button className="connect-main-left-section-device-button" onClick={onClickSubmitDeviceCode}>
                            Confirm
                        </button>
                    </div>
                )}

                {active !== 2 ? (
                    <button
                        disabled={checked ? false : true}
                        className={`${checked && "step-active "} next-step`}
                        onClick={handleNextStep}
                    >
                        Next Step
                    </button>
                ) : !congratulation ? (
                    <button
                        disabled={deviceName ? false : true}
                        className={`next-step ${deviceName ? "device-connect" : "disabled"}`}
                        onClick={handleFinish}
                    >
                        Connect {isFinish && <Image src={"/images/loading.svg"} alt="check" width={20} height={20} />}
                    </button>
                ) : (
                    <button className={`next-step device-connect`} onClick={handleBackDashboard}>
                        Done
                    </button>
                )}
            </div>

            {children}
        </div>
    );
};

export default ConnectMain;
