"use client";
import { useState } from "react";
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
}) => {
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
                            {active > index ? <div className="completed" /> : <div className="not-completed" />}
                        </div>
                    ))}
                </div>
                <h2 className="setup">{steps[active]?.subTitle}</h2>
                <p className="instruction">{steps[active]?.subContent}</p>

                {active !== 2 ? (
                    <button
                        disabled={checked ? false : true}
                        className={`${checked && "step-active "} next-step`}
                        onClick={handleNextStep}
                    >
                        Next Step
                    </button>
                ) : (
                    <button
                        disabled={deviceName ? false : true}
                        className={`next-step ${deviceName ? "device-connect" : "disabled"}`}
                        onClick={handleFinish}
                    >
                        Connect {isFinish && <Image src={"/images/loading.svg"} alt="check" width={20} height={20} />}
                    </button>
                )}
            </div>

            {children}
        </div>
    );
};

export default ConnectMain;
