"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import "./index.scss";

type Props = {
    handlePrevStep: () => void;
    active: number;
};

function NavToMain({ handlePrevStep, active }: Props) {
    const router = useRouter();
    return active === 0 ? (
        <div className="nav-back" onClick={() => router.back()}>
            <Image width={16} height={16} src={"/images/arrow.svg"} alt="arrow" />
            <p> Back to main</p>
        </div>
    ) : (
        <div className="nav-back" onClick={handlePrevStep}>
            <Image width={16} height={16} src={"/images/arrow.svg"} alt="arrow" />
            <p> Back to step {active}</p>
        </div>
    );
}

export default NavToMain;
