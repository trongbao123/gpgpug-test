import Image from "next/image";
import React, { FC } from "react";
import "./index.scss";
import { stepCreateProject } from "@component/constants/constant";

type Props = {
    children?: React.ReactNode;
    active: number;
    handleNextStep?: () => void;
    [key: string]: any;
};

const CreateProjectMain: FC<Props> = ({ children, active, handleNextStep, ...rest }) => {
    const { checked, isFinish, handleFinish, deviceName, congratulation, handleBackDashboard } = rest;
    return (
        <div className="create-project-main">
            <div className="create-project-main-left">
                <div className="create-project-main-left-step">
                    {stepCreateProject.map((step, index) => (
                        <div key={step.id} className="flex-row">
                            <div className={`create-project-main-left-step-item ${active === index ? "active" : ""}`}>
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
                            {step.id < stepCreateProject.length ? (
                                <div className="completed" />
                            ) : (
                                <div className="not-completed" />
                            )}
                        </div>
                    ))}
                </div>
                <h2 className="setup">{stepCreateProject[active]?.title}</h2>
                <p className="instruction">{stepCreateProject[active]?.subTitle}</p>
                {active !== 1 ? (
                    <button
                        // disabled={checked ? false : true}
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

export default CreateProjectMain;
