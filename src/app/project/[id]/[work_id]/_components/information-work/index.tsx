"use client";
import Image from "next/image";
import "./index.scss";
import formatDate from "@component/utilities/format-time";
import { useLoading } from "@component/contexts/loadingContext";
import Notification from "@component/components/common/notification";
import { useRouter } from "next/navigation";
import { deleteWork } from "@component/services/work";

type InformationProps = {
    [key: string]: any;
};
const InformationWork: React.FC<InformationProps> = ({ work_id, projectId, resulting, createDate }) => {
    const { setIsLoading } = useLoading();
    const router = useRouter();
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete the work?")) {
            setIsLoading(true);
            try {
                const response: any = await deleteWork({
                    data: {
                        workId: work_id,
                    },
                });
                if (response && response.statusCode === 200) {
                    Notification({
                        type: "success",
                        message: response.message,
                        placement: "top",
                    });

                    router.back();
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
        <div className="infowork">
            <div className="infowork-description">
                <div className="infowork-description-item">
                    <p>Project ID: </p>
                    <p>{projectId}</p>
                </div>
                <div className="infowork-description-item">
                    <p>Create date: </p>
                    <p>{formatDate(createDate)}</p>
                </div>
            </div>
            <div className="infowork-right">
                <div className="infowork-item" style={{ cursor: "pointer" }} onClick={handleDelete}>
                    <Image src={"/images/delete.svg"} width={16} height={16} alt="delete" />
                    <p>Terminate</p>
                </div>
            </div>
        </div>
    );
};

export default InformationWork;
