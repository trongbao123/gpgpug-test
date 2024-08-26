"use client";
import { useState } from "react";
import CreateProjectMain from "./_components/create-project-main";
import Navigation from "./_components/navigation";
import "./index.scss";
import { stepCreateProject } from "@component/constants/constant";
import CreateProjectNamePage from "./_components/create-project-name-page";
import DropzoneUpload from "./_components/drop-zone-upload";
import { createProject } from "@component/services/project";
import Notification from "@component/components/common/notification";
import { useRouter } from "next/navigation";
import { useLoading } from "@component/contexts/loadingContext";

type Props = {};

const Page = (props: Props) => {
    const router = useRouter();
    const [active, setActive] = useState<number>(0);
    const [activeItem, setActiveItem] = useState<null | number | string>(null);
    const [checked, setChecked] = useState(false);
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
            if (prevStep < stepCreateProject.length) {
                return prevStep + 1;
            }
            return prevStep;
        });
    };

    const handleFinish = async () => {
        setIsLoading(true);
        try {
            const res: any = await createProject({
                data: {
                    name: activeItem,
                },
            });
            if (res && res.statusCode === 200) {
                Notification({
                    type: "success",
                    message: res.message,
                    placement: "top",
                });
                router.push("/project");
            } else {
                throw res;
            }
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
            <CreateProjectMain
                active={active}
                handleNextStep={handleNextStep}
                handleFinish={handleFinish}
                checked={checked}
            >
                {active === 0 && <CreateProjectNamePage handleChecked={handleChecked} active={active} />}
                {/* {active === 1 && <DropzoneUpload />} */}
            </CreateProjectMain>
        </div>
    );
};

export default Page;
