"use client";
import React, { useEffect, useRef, useState } from "react";
import ProjectContainer from "../../_components/project-container/projectContainer";
import NavToMain from "../../_components/nav-to-main";
import { project } from "@component/constants/constant";
import Image from "next/image";
import InformationWork from "./_components/information-work";
import "./index.scss";
import { Button } from "antd";
import { DownloadIcon, IconFile, IconFilePending, IconPause, IconPlay, NvidiaIcon } from "@component/constants/Icon";
import InfoSection from "./_components/info-section";
import Notification from "@component/components/common/notification";
import { useLoading } from "@component/contexts/loadingContext";
import {
    deleteSasTokenWork,
    deleteWorkMetada,
    getSasTokenWork,
    metadataWorkList,
    saveWorkMetada,
    workSingleApi,
} from "@component/services/work";
import gbToMb from "@component/utilities/gbToMb";
import ModalWork from "./_components/modal-work";
import StateComponent from "@component/components/state";
import { updateWorkDeviceChipset } from "@component/services/device";
import { BlobServiceClient } from "@azure/storage-blob";
type Props = {
    params: {
        id: string;
        work_id: string;
    };
};

const Page = ({ params }: Props) => {
    const { id, work_id } = params;
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [metadataList, setMetadataList] = useState([]);
    const [modalWork, setModalWork] = useState(false);
    const [workSingle, setWorkSingle] = useState<any>(null);
    const workDetail = project.find((item: any) => item.id === id);
    const workItemDetail = workDetail && workDetail.listWork.find((item: any) => item.id.toString() === work_id);
    const [updateTimeout, setUpdateTimeout] = useState<NodeJS.Timeout | null>(null);
    const [progress, setProgress] = useState(0);
    const [errorFile, setErrorFile] = useState<File | null>(null);
    const { setIsLoading } = useLoading();
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [metadataResponse, workSingleResponse] = await Promise.all([
                metadataWorkList({
                    params: {
                        workId: work_id,
                    },
                }),
                workSingleApi({
                    params: {
                        workId: work_id,
                    },
                }),
            ]);

            if (metadataResponse && (metadataResponse as any).result) {
                setMetadataList((metadataResponse as any).result);
            } else {
                throw metadataResponse;
            }

            if (workSingleResponse && (workSingleResponse as any).data) {
                setWorkSingle((workSingleResponse as any).data);
            } else {
                throw workSingleResponse;
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

    useEffect(() => {
        fetchData();
    }, []);

    const updateChipset = async (item: any) => {
        setIsLoading(true);
        try {
            const res: any = await updateWorkDeviceChipset({
                data: {
                    workId: work_id,
                    deviceChipSetName: workSingle.deviceChipSet,
                    deviceChipSetCount: item,
                },
            });
            if (res && res.statusCode === 200) {
                Notification({
                    type: "success",
                    message: res.message,
                    placement: "top",
                });
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
    const handleQuantityChange = (change: any) => {
        if (workSingle) {
            const newCount = workSingle.deviceChipSetCount + change;
            if (newCount >= 0) {
                setWorkSingle((prev: any) => ({
                    ...prev,
                    deviceChipSetCount: newCount,
                }));

                if (updateTimeout) clearTimeout(updateTimeout);

                const timeout = setTimeout(() => updateChipset(newCount), 500);

                setUpdateTimeout(timeout);
            }
        }
    };

    const handldeDeleteWorkMetadata = async (id: any, file: any) => {
        if (window.confirm("Are you sure you want to delete this file?")) {
            setIsLoading(true);
            // @ts-ignore
            try {
                const [deleteSasToken, deleteWork] = await Promise.all([
                    deleteSasTokenWork(file, id, work_id),
                    deleteWorkMetada({
                        data: {
                            workId: work_id,
                            metaDataId: id,
                        },
                    }),
                ]);

                if (deleteSasToken && deleteSasToken.statusCode === 401) throw deleteSasToken;

                if (deleteWork && (deleteWork as any).statusCode !== 200) throw deleteWork;

                Notification({
                    type: "success",
                    message: (deleteWork as any).message,
                    placement: "top",
                });
                fetchData();
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

    const onProgress = ({ loadedBytes }: { loadedBytes: number }) => {
        setProgress(loadedBytes);
    };
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
            const file = fileInputRef.current.files[0];
            if (file && (file.type === "application/zip" || file.type === "text/html")) {
                const fileUrl = URL.createObjectURL(file);
                const { sas, blobPath } = await getSasTokenWork(file, id, work_id);
                const baseUrl = `https://${process.env.NEXT_PUBLIC_ACCOUNT}.blob.core.windows.net`;
                const blobServiceClient = new BlobServiceClient(`${baseUrl}?${sas}`);
                const containerClient = blobServiceClient.getContainerClient(process.env.NEXT_PUBLIC_CONTAINER_NAME!);
                const blockBlobClient = containerClient.getBlockBlobClient(blobPath);
                setFile(file);

                //we can check upload progress by onProgress function
                const result = await blockBlobClient.uploadData(file, {
                    onProgress,
                });
                if (!result.errorCode) {
                    try {
                        const res: any = await saveWorkMetada({
                            data: {
                                data: [
                                    {
                                        name: file.name,
                                        extension: file.name.split(".").pop() || "",
                                        size: file.size,
                                        url: fileUrl,
                                        workId: work_id,
                                    },
                                ],
                            },
                        });

                        if (res && res.statusCode === 200) {
                            Notification({
                                type: "success",
                                message: res.message,
                                placement: "top",
                            });
                            fetchData?.();
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
                        setFile(null);
                        setProgress(0);
                    }
                    fileInputRef.current.value = "";
                } else {
                    setErrorFile(file);
                    Notification({
                        type: "error",
                        message: "Upload failed",
                        placement: "top",
                    });
                }
            } else {
                setFile(null);
                Notification({
                    type: "error",
                    message: "Please select a valid ZIP or HTML file.",
                    placement: "top",
                });
            }
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleCancelUpload = () => {
        if (window.confirm("Are you sure you want to cancel this file?")) {
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const handleModalWork = () => {
        setModalWork(!modalWork);
    };

    return (
        <ProjectContainer>
            <div className="infomation-work-container">
                <NavToMain />
                <div className="nav-title">
                    <p>{workSingle?.name}</p>
                    <div className="nav-title-icon">
                        <Image width={32} height={32} src={"/images/detail.svg"} alt="detail" />
                    </div>
                </div>
                <InformationWork
                    work_id={work_id}
                    projectId={id}
                    resulting={workDetail?.resulting}
                    createDate={workSingle?.createdAt}
                />
            </div>
            <div className="line-detail" />
            <div className="work-item-detail-container">
                <div className="work-status">
                    <div className="work-status-header">
                        <div className="infowork-tag-item">
                            <p>Work status:</p>
                            <StateComponent state={workSingle?.status} />
                        </div>
                        <Image src={"/images/01.png"} width={272} height={272} alt="progress" />
                        <Button onClick={handleModalWork} shape="round" className="btn-gradient">
                            {workSingle?.status === "pause" ? <IconPlay size={20} /> : <IconPause size={20} />}
                        </Button>
                    </div>
                    <div className="line" />
                    <div className="work-status-body">
                        <div className="infowork-tag-item">
                            <p>Billing</p>
                        </div>
                        <div className="infowork-info">
                            <div className="info-time">
                                <p>Uptime</p>
                                <p className="time">
                                    <span>{workItemDetail?.upTimeHours}</span>H{" "}
                                    <span>{workItemDetail?.upTimeMinutes}</span>M{" "}
                                    <span>{workItemDetail?.upTimeSeconds}</span>S
                                </p>
                            </div>
                            <div className="info-fee">
                                <div>
                                    <p>Hour fee</p>
                                    <p className="fee">
                                        <span>{workItemDetail?.hourFee}</span>$
                                    </p>
                                </div>
                                <div>
                                    <p>Daily fee</p>
                                    <p className="fee">
                                        <span>{workItemDetail?.dailyFee}</span>$
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-item-info">
                    <InfoSection title="Device">
                        <div className="device-info">
                            <div className="title">
                                <NvidiaIcon color="#77B900" size={20} />
                                <p className="text-primary">{workSingle?.deviceChipSet}</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div
                                    className="count"
                                    onClick={(e) => {
                                        handleQuantityChange(-1);
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    -
                                </div>
                                <div className="count">{workSingle?.deviceChipSetCount}</div>
                                <div
                                    className="count"
                                    onClick={(e) => {
                                        handleQuantityChange(1);
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    +
                                </div>
                            </div>
                        </div>
                    </InfoSection>
                    <InfoSection title="Monitoring">
                        {workItemDetail?.error_logs.map((item, index) => {
                            return (
                                <div key={index} className="monitoring-section">
                                    <p className="timestamps">{item.timestamp}</p>
                                    <p className="traceback">{item.traceback}</p>
                                </div>
                            );
                        })}
                    </InfoSection>
                    <InfoSection title="Run Script">
                        <div className="run-script-container-select-zone">
                            <div className="icon-text">
                                <IconFile size={32} />
                                <p>{file?.name || "Click to select a files"} </p>
                            </div>
                            <div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                                <div className="icon-upload" style={{ cursor: "pointer" }} onClick={handleUploadClick}>
                                    <Image src="/images/upload.svg" alt="upload" width={24} height={24} />
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                            {file && (
                                <div className="uploading-card">
                                    <div className="icon">
                                        <Image src="/images/icon_file_loading.svg" alt="file" width={18} height={18} />
                                    </div>
                                    <div className="file-info" style={{ color: "white" }}>
                                        <div className="header-info">
                                            <p>{file?.name}</p>
                                            <Image
                                                style={{ cursor: "pointer" }}
                                                onClick={handleCancelUpload}
                                                src="/images/icon_close.svg"
                                                alt="file"
                                                width={10}
                                                height={10}
                                            />
                                        </div>
                                        <div className={true ? "progress-bar" : "error-progress"}>
                                            <div
                                                className={true ? "progress" : "error-progress-bar"}
                                                style={{ width: `${(progress / file?.size) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="progress-container">
                                            <div
                                                className="progress-bar"
                                                style={{ width: `${((progress / file?.size) * 100).toFixed(2)}%` }}
                                            ></div>
                                        </div>
                                        <div className="progress-info">
                                            <p>
                                                {file?.size} / {file?.size} MB
                                            </p>
                                            {!errorFile && <p>{`${((progress / file?.size) * 100).toFixed(2)}%`}</p>}
                                            {errorFile && <p style={{ color: "#cc2929" }}>Error</p>}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {metadataList.length > 0 &&
                                metadataList.map((item: any, index: number) => (
                                    <div className="uploaded-card" key={index}>
                                        <IconFilePending size={32} />
                                        <div className="file-info" style={{ color: "white" }}>
                                            <div className="header-info">
                                                <p>{item?.name}</p>
                                            </div>
                                            <div className="progress-info">
                                                <p>{gbToMb(item?.size)} MB</p>
                                            </div>
                                        </div>
                                        <div
                                            className="icon_trash"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handldeDeleteWorkMetadata(item?.id, file)}
                                        >
                                            <Image src="/images/icon_trash.svg" alt="file" width={15} height={15} />
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </InfoSection>
                    <InfoSection title="Result">
                        <div className="result-card">
                            <IconFilePending size={32} />
                            <div className="file-info" style={{ color: "white" }}>
                                <div className="header-info">
                                    <p>Refeat_test.co.py</p>
                                </div>
                                <div className="progress-info">
                                    <p>10MB</p>
                                </div>
                            </div>
                            <div className="result-btn">Working on...</div>
                        </div>
                        <div className="result-card">
                            <IconFilePending size={32} />
                            <div className="file-info" style={{ color: "white" }}>
                                <div className="header-info">
                                    <p>Refeat_test.co.py</p>
                                </div>
                                <div className="progress-info">
                                    <p>10MB</p>
                                </div>
                            </div>
                            <div className="result-btn">
                                <DownloadIcon size={14} /> Download
                            </div>
                        </div>
                    </InfoSection>
                </div>
            </div>
            <ModalWork
                workId={work_id}
                isRunning={workSingle?.status}
                modalWork={modalWork}
                setModalWork={setModalWork}
                fetchData={fetchData}
            />
        </ProjectContainer>
    );
};

export default Page;
