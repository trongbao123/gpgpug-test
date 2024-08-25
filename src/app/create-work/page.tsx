"use client";
import React, { useState } from "react";
import Navigation from "./_components/navigation";
import { stepCreateProject, stepCreateWork } from "@component/constants/constant";
import CreateWorkMain from "./_components/create-work-main/page";
import "./index.scss";
import CreateWorkNamePage from "./_components/create-work-name";
import CreateWorkSelectRegion from "./_components/create-work-select-region";
import CreateNetworkTier from "./_components/create-work-network-tier";
import CreateWorkChooseProcessor from "./_components/create-work-choose-processor";
import DropzoneUpload from "./_components/create-work-upload";

type Props = {};

const Page = (props: Props) => {
    const [active, setActive] = useState<number>(0);
    const [activeItem, setActiveItem] = useState<null | number | string>(null);
    const [checked, setChecked] = useState(false);

    const handleChecked = (e: number | string) => {
        if (e) {
            setChecked(true);
        } else {
            setChecked(false);
        }
        setActiveItem(e);
    };

    const handlePrevStep = () => {
        setActive((prevStep) => {
            if (prevStep > 0) {
                return prevStep - 1;
            }
            return prevStep;
        });
    };

    const handleNextStep = () => {
        setActive((prevStep) => {
            if (prevStep < stepCreateWork.length) {
                return prevStep + 1;
            }
            return prevStep;
        });
    };

    const handleFinish = () => {
        console.log("done");
    };
    return (
        <div className="container">
            <Navigation handlePrevStep={handlePrevStep} active={active} />
            <CreateWorkMain
                active={active}
                handleNextStep={handleNextStep}
                handleFinish={handleFinish}
                checked={checked}
            >
                {active === 0 && <CreateWorkNamePage handleChecked={handleChecked} active={active} />}
                {active === 1 && <CreateWorkSelectRegion />}
                {active === 2 && <CreateNetworkTier />}
                {active === 3 && <CreateWorkChooseProcessor />}
                {active === 4 && <DropzoneUpload />}
            </CreateWorkMain>
        </div>
    );
};

export default Page;
