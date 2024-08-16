"use client";
import { useState } from "react";
import CreateProjectMain from "./_components/create-project-main";
import Navigation from "./_components/navigation";
import "./index.scss";
import { stepCreateProject } from "@component/constants/constant";
import CreateProjectNamePage from "./_components/create-project-name-page";
import DropzoneUpload from "./_components/drop-zone-upload";

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
            if (prevStep < stepCreateProject.length) {
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
            <CreateProjectMain
                active={active}
                handleNextStep={handleNextStep}
                handleFinish={handleFinish}
                checked={checked}
            >
                {active === 0 && <CreateProjectNamePage handleChecked={handleChecked} active={active} />}
                {active === 1 && <DropzoneUpload />}
            </CreateProjectMain>
        </div>
    );
};

export default Page;
