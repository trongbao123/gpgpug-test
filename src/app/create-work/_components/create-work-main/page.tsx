import { stepCreateWork } from "@component/constants/constant";
import Image from "next/image";
import React, { FC } from "react";
import "./index.scss";

type Props = {
    children?: React.ReactNode;
    active: number;
    handleNextStep?: () => void;
    [key: string]: any;
};

const CreateWorkMain: FC<Props> = ({ activeItem, children, active, handleNextStep, ...rest }) => {
    const { checked, isFinish, handleFinish, deviceName, congratulation, handleBackDashboard } = rest;

    return (
        <div className="create-work-main">
            <div className="create-work-main-left">
                <div className="create-work-main-left-step">
                    {stepCreateWork.map((step, index) => (
                        <div key={step.id} className="flex-row">
                            <div className={`create-work-main-left-step-item ${active === index ? "active" : ""}`}>
                                {active > index ? (
                                    <Image
                                        src={"/images/check.svg"}
                                        alt="check"
                                        width={15}
                                        height={15}
                                        style={{ cursor: "pointer", marginTop: "4px" }}
                                    />
                                ) : (
                                    <p>{step.id}</p>
                                )}
                            </div>
                            {step.id < stepCreateWork.length ? (
                                <div className="completed" />
                            ) : (
                                <div className="not-completed" />
                            )}
                        </div>
                    ))}
                </div>
                <h2 className="setup">{stepCreateWork[active]?.title}</h2>
                <span className="instruction">{stepCreateWork[active]?.subTitle}</span>
                {active !== stepCreateWork.length - 1 ? (
                    <button
                        disabled={checked ? false : true}
                        className={`${checked && "step-active "} next-step`}
                        onClick={handleNextStep}
                    >
                        Next Step
                    </button>
                ) : (
                    <button
                        // disabled={checked ? false : true}
                        className={`${checked && "step-active "} next-step`}
                        onClick={handleFinish}
                    >
                        Done
                    </button>
                )}
            </div>
            {children}
        </div>
    );
};

export default CreateWorkMain;
