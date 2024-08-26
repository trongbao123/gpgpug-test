import React, { useCallback, useRef, useState } from "react";
import "./index.scss";
import Image from "next/image";
import { fileData } from "@component/constants/constant";
import UploadingCard from "./UploadingCard";
import UploadedCard from "./UploadedCard";
import { deleteMetadata, saveMetaData } from "@component/services/project";
import Notification from "@component/components/common/notification";
type Props = {
    [key: string]: any;
};

const DropzoneUpload: React.FC<Props> = ({ metadata, projectId, fetchData }) => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
            const file = fileInputRef.current.files[0];
            const fileUrl = URL.createObjectURL(file);
            setFile(file);
            try {
                const res: any = await saveMetaData({
                    data: {
                        data: [
                            {
                                name: file.name,
                                extension: "2",
                                size: file.size,
                                url: fileUrl,
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
            }
        } else {
            setFile(null);
        }
    };
    const handleCancelUpload = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const handleUploadClick = () => {
        fileInputRef.current?.click();
        if (file) {
            try {
            } catch (error) {}
        }
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
                    <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
                    <div className="icon-upload" style={{ cursor: "pointer" }} onClick={handleUploadClick}>
                        <Image src="/images/upload.svg" alt="upload" width={24} height={24} />
                    </div>
                </div>
            </div>
            {file && (
                <div className="upload-container-uploading">
                    <UploadingCard item={file} deleteFile={handleCancelUpload} />
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
