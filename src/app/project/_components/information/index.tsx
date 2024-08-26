"use client";
import Image from "next/image";
import "./index.scss";
import { deleteProject } from "@component/services/project";
import Notification from "@component/components/common/notification";
import { useLoading } from "@component/contexts/loadingContext";
import { useRouter } from "next/navigation";

type InformationProps = {
    [key: string]: any;
};
const InformationProject: React.FC<InformationProps> = ({ projectId, resulting, createDate }) => {
    const { setIsLoading } = useLoading();

    const router = useRouter();
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete the project?")) {
            setIsLoading(true);
            try {
                const response: any = await deleteProject({
                    params: {
                        projectId: projectId,
                    },
                });
                if (response && response.statusCode === 200) {
                    Notification({
                        type: "success",
                        message: response.message,
                        placement: "top",
                    });

                    router.push("/project");
                } else {
                    throw response;
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
        }
    };
    return (
        <div className="infoproject">
            <div className="infoproject-description">
                <div className="infoproject-description-item">
                    <p>Resulting capacity: </p>
                    <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        {resulting} <Image src={"/images/cloud.svg"} width={16} height={16} alt="gpu" />
                    </p>
                </div>
                <div className="infoproject-description-item">
                    <p>Project ID: </p>
                    <p>{projectId}</p>
                </div>
                <div className="infoproject-description-item">
                    <p>Create date: </p>
                    <p>{createDate}</p>
                </div>
            </div>
            <div className="infoproject-right">
                <div className="infoproject-item" onClick={handleDelete} style={{ cursor: "pointer" }}>
                    <Image src={"/images/delete.svg"} width={16} height={16} alt="delete" />
                    <p>Terminate</p>
                </div>
            </div>
        </div>
    );
};

export default InformationProject;
