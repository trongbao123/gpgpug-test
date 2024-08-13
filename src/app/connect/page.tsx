"use client";
import { useEffect, useState } from "react";
import HeaderMain from "../home/_components/header-main/page";
import ConnectMain from "./_components/connect-main";
import NavToMain from "./_components/nav-to-main";
import "./index.scss";
import { steps } from "@component/constants/constant";
import Step1 from "./_components/step1";
import Step2 from "./_components/step2";
import Step3 from "./_components/step3";

const Connect = () => {
    const [active, setActive] = useState(0);
    const [deviceName, setDeviceName] = useState("");
    const [congratulation, setCongratulation] = useState("");
    const [isFinish, setIsFinish] = useState(false);
    const [checked, setChecked] = useState(false);
    const [activeItem, setActiveItem] = useState<null | number>(null);

    const handleChecked = (e: number) => {
        setChecked(true);
        setActiveItem(e);
    };
    const handleDeviceName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeviceName(e.target.value);
        setIsFinish(true);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsFinish(false);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [deviceName]);

    const handleNextStep = () => {
        setActive((prevStep) => {
            if (prevStep < steps.length) {
                return prevStep + 1;
            }
            return prevStep;
        });
    };

    const handlePrevStep = () => {
        setActive((prevStep) => {
            if (prevStep > 0) {
                return prevStep - 1;
            }
            return prevStep;
        });
    };

    const handleFinish = () => setCongratulation("congratulation");

    return (
        <div className="connect">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                <div className="container">
                    <NavToMain active={active} handlePrevStep={handlePrevStep} />
                    <ConnectMain
                        handleFinish={handleFinish}
                        deviceName={deviceName}
                        active={active}
                        handleNextStep={handleNextStep}
                        isFinish={isFinish}
                        checked={checked}
                    >
                        {active === 0 && (
                            <Step1 activeItem={activeItem} handleChecked={handleChecked} active={active} />
                        )}
                        {active === 1 && <Step2 active={active} />}
                        {active === 2 && (
                            <Step3
                                congratulation={congratulation}
                                active={active}
                                handleDeviceName={handleDeviceName}
                                deviceName={deviceName}
                            />
                        )}
                    </ConnectMain>
                </div>
            </div>
        </div>
    );
};

export default Connect;
