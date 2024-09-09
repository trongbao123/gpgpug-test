import { BlobServiceClient } from "@azure/storage-blob";
import Notification from "@component/components/common/notification";
import { deleteMetadata, deleteSasToken, getSasToken, saveMetaData } from "@component/services/project";
import Image from "next/image";
import React, { useRef, useState } from "react";
import "./index.scss";
import UploadedCard from "./UploadedCard";
import UploadingCard from "./UploadingCard";
import { finished } from "stream";
type Props = {
    [key: string]: any;
};

const DropzoneUpload: React.FC<Props> = ({ metadata, projectId, fetchData }) => {
    const [file, setFile] = useState<File | null>(null);
    const [errorFile, setErrorFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onProgress = ({ loadedBytes }: { loadedBytes: number }) => {
        setProgress(loadedBytes);
    };
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
            const file = fileInputRef.current.files[0];
            if (file) {
                const { sas, blobPath } = await getSasToken(file, projectId);
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
                        const res: any = await saveMetaData({
                            data: {
                                data: [
                                    {
                                        name: file.name,
                                        extension: file.name.split(".").pop() || "",
                                        size: file.size,
                                        url: blobPath,
                                        projectId: projectId,
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
    const handleCancelUpload = () => {
        if (window.confirm("Are you sure you want to delete this file?")) {
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };
    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };
    const deleteFile = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this file?")) {
            try {
                const res: any = await deleteMetadata({
                    data: {
                        projectId: projectId,
                        metaDataId: id,
                    },
                });
                if (res && res.statusCode === 200) {
                    Notification({
                        type: "success",
                        message: res.message,
                        placement: "top",
                    });
                    fetchData?.();
                }
                return res;
            } catch (error: any) {
                Notification({
                    type: "error",
                    message: error?.message || error,
                    placement: "top",
                });
            }
        }
    };

    return (
        <div className="upload-container">
            <div className="upload-container-select-zone">
                <div className="upload-container-select-zone-data">
                    <p>Data</p>
                    <div className="data-number">{metadata?.length}</div>
                </div>
                <div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        accept=".zip"
                    />
                    <div className="icon-upload" style={{ cursor: "pointer" }} onClick={handleUploadClick}>
                        <Image src="/images/upload.svg" alt="upload" width={24} height={24} />
                    </div>
                </div>
            </div>

            {file && (
                <div className="upload-container-uploading">
                    <UploadingCard item={file} deleteFile={handleCancelUpload} progress={progress} />
                </div>
            )}
            {errorFile && (
                <div className="upload-container-uploading">
                    <UploadingCard
                        item={errorFile}
                        deleteFile={handleCancelUpload}
                        progress={progress}
                        isError={true}
                    />
                </div>
            )}
            <div className="upload-container-uploaded">
                {metadata.map((item: any) => (
                    <UploadedCard key={item?.id} item={item} deleteFile={deleteFile} />
                ))}
            </div>
        </div>
    );
};

export default DropzoneUpload;
