"use client";
import React, { useState } from "react";
import "./index.scss";
import HeaderMain from "../home/_components/header-main/page";
import NavToMain from "../connect/_components/nav-to-main";

type Props = {};

const Page = (props: Props) => {
    const [active, setActive] = useState<number>(0);

    const handlePrevStep = () => {
        setActive((prevStep) => {
            if (prevStep > 0) {
                return prevStep - 1;
            }
            return prevStep;
        });
    };
    return (
        <div className="container">
            <NavToMain active={active} handlePrevStep={handlePrevStep} />
        </div>
    );
};

export default Page;
