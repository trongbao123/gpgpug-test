"use client";
import React, { useState } from "react";
import Navigation from "../_components/navigation";
import { deviceGroups, networkTier, stepCreateWork } from "@component/constants/constant";
import CreateWorkMain from "../_components/create-work-main/page";
import "./index.scss";
import CreateWorkNamePage from "../_components/create-work-name";
import CreateWorkSelectRegion from "../_components/create-work-select-region";
import CreateNetworkTier from "../_components/create-work-network-tier";
import CreateWorkChooseProcessor from "../_components/create-work-choose-processor";
import { createWork } from "@component/services/work";
import Notification from "@component/components/common/notification";
import { useRouter } from "next/navigation";
import { useLoading } from "@component/contexts/loadingContext";

interface PropData {
    params: {
        id: string;
    };
}

const Page: React.FC<PropData> = ({ params }) => {
    const router = useRouter();
    const [active, setActive] = useState<number>(0);
    const [activeItem, setActiveItem] = useState<null | number | string>(null);
    const [checked, setChecked] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
    const [selectedNetworkTier, setSelectedNetworkTier] = React.useState<any>([]);
    const [selectedDevice, setSelectedDevice] = React.useState<any>([]);
    const [processorList, setProcessorList] = React.useState<any>([]);
    const { setIsLoading } = useLoading();

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

    const handleFinish = async () => {
        setIsLoading(true);
        try {
            const res: any = await createWork({
                data: {
                    name: activeItem,
                    projectId: params?.id,
                    region: selectedCountry[0],
                    networkTear: networkTier[selectedNetworkTier[0]]?.label,
                    deviceChipSet: processorList[selectedDevice[0]]?.name,
                },
            });

            if (res && res.statusCode === 200) {
                Notification({
                    type: "success",
                    message: res.message,
                    placement: "top",
                });
                router.back();
            } else throw res;
        } catch (error: any) {
            Notification({
                type: "error",
                message: error?.message || error,
                placement: "top",
            });
        } finally {
            setIsLoading(false);
        }
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
                {active === 1 && (
                    <CreateWorkSelectRegion
                        setSelectedCountry={setSelectedCountry}
                        selectedCountry={selectedCountry}
                        setChecked={setChecked}
                    />
                )}
                {active === 2 && (
                    <CreateNetworkTier
                        selected={selectedNetworkTier}
                        setSelected={setSelectedNetworkTier}
                        setChecked={setChecked}
                    />
                )}
                {active === 3 && (
                    <CreateWorkChooseProcessor
                        selected={selectedDevice}
                        setSelected={setSelectedDevice}
                        processorList={processorList}
                        setProcessorList={setProcessorList}
                        setChecked={setChecked}
                    />
                )}
                {/* {active === 4 && <DropzoneUpload setChecked={setChecked} />} */}
            </CreateWorkMain>
        </div>
    );
};

export default Page;
