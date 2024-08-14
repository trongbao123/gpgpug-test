import { ArrowBack } from "@component/constants/Icon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import "./index.scss";

type Props = {
    handlePrevStep: () => void;
    active: number;
};

const Navigation: FC<Props> = ({ handlePrevStep, active }) => {
    const router = useRouter();
    return active === 0 ? (
        <div className="create-project-nav-back" onClick={() => router.back()}>
            <ArrowBack size={16} color={"white"}/>
            <p> Back to main</p>
        </div>
    ) : (
        <div className="create-project-nav-back" onClick={handlePrevStep}>
            <Image width={16} height={16} src={"/images/arrow.svg"} alt="arrow" />
            <p> Back to step {active}</p>
        </div>
    );
};

export default Navigation;
