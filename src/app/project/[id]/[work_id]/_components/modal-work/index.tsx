"use client";
import React from "react";
import { Button, Modal } from "antd";
import "./index.scss";
import { useLoading } from "@component/contexts/loadingContext";
import { updateWorkStatus } from "@component/services/work";
import Notification from "@component/components/common/notification";
type Props = {
    [key: string]: any;
};

const ModalWork = ({ workId, modalWork, setModalWork, isRunning }: Props) => {
    const { setIsLoading } = useLoading();
    const handleUpdate = async () => {
        setIsLoading(true);
        try {
            const response: any = await updateWorkStatus({
                data: {
                    id: workId,
                    status: isRunning === "working" ? "pause" : "working",
                },
            });

            if (response && response.statusCode === 200) {
                Notification({
                    type: "success",
                    message: response.message,
                    placement: "top",
                });

                setModalWork(false);
            } else throw response;
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
        <Modal
            title={isRunning === "working" ? "PAUSE" : "RUN"}
            centered
            open={modalWork}
            onCancel={() => setModalWork(false)}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
        >
            <div className="modal-work-content">
                {isRunning !== "pause" ? (
                    <p>
                        Would you like me to restart it? <br />
                        It takes about 5 to 15 minutes to get it up and running.
                    </p>
                ) : (
                    <p>
                        Would you like to pause the operation? <br /> you can restart it later
                    </p>
                )}
                <div className="modal-work-button">
                    <button className="angree " onClick={handleUpdate}>
                        Agree
                    </button>
                    <p onClick={() => setModalWork(false)}>Cancel</p>
                </div>
            </div>
        </Modal>
    );
};

export default ModalWork;
