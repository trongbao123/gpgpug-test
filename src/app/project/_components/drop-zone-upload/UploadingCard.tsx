import { FileData } from "@component/constants/constant";
import Image from "next/image";
import React from "react";

type Props = {
    item: any;
    [key: string]: any;
};

const UploadingCard = ({ item, deleteFile, progress, isError }: Props) => {
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
                <div className={!isError ? "progress-bar" : "error-progress"}>
                    <div
                        className={!isError ? "progress" : "error-progress-bar"}
                        style={{ width: `${((progress / item?.size) * 100).toFixed(2)}%` }}
                    ></div>
                </div>
                <div className="progress-info">
                    <p>
                        {item?.size} / {item?.size} MB
                    </p>
                    {!isError && <p>{`${((progress / item?.size) * 100).toFixed(2)}%`}</p>}
                    {isError && <p style={{ color: "#cc2929" }}>Error</p>}
                </div>
            </div>
        </div>
    );
};

export default UploadingCard;
