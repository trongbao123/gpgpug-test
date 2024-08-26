import { FileData } from "@component/constants/constant";
import Image from "next/image";
import React from "react";

type Props = {
    item: any;
    [key: string]: any;
};

const UploadingCard = ({ item, deleteFile }: Props) => {
    return (
        <div className="uploading-card">
            <div className="icon">
                <Image src="/images/icon_file_loading.svg" alt="file" width={18} height={18} />
            </div>
            <div className="file-info" style={{ color: "white" }}>
                <div style={{ cursor: "pointer" }} className="header-info" onClick={() => deleteFile()}>
                    <p>{item?.name}</p>
                    <Image src="/images/icon_close.svg" alt="file" width={10} height={10} />
                </div>
                <div className={!item?.error ? "progress-bar" : "error-progress"}>
                    <div
                        className={!item?.error ? "progress" : "error-progress-bar"}
                        style={{ width: `${item?.progress}%` }}
                    ></div>
                </div>
                <div className="progress-info">
                    <p>
                        {item?.size} / {item?.size} MB
                    </p>
                    {/* <p>{`${((item?.uploadedSize / item?.fileSize) * 100).toFixed(2)}%`} </p> */}
                </div>
            </div>
        </div>
    );
};

export default UploadingCard;
