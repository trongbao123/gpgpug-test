import { FileData } from "@component/constants/constant";
import Image from "next/image";
import React from "react";

type Props = {
    item: any;
    [key: string]: any;
};

const UploadedCard = ({ item, deleteFile }: Props) => {
    return (
        <div className="uploaded-card">
            <div className="icon">
                <Image src="/images/icon_file_loaded.svg" alt="file" width={18} height={18} />
            </div>
            <div className="file-info" style={{ color: "white" }}>
                <div className="header-info">
                    <p>{item.name}</p>
                </div>
                <div className="progress-info">
                    <p>{item.size}MB</p>
                </div>
            </div>
            <div className="icon_trash" style={{ cursor: "pointer" }} onClick={() => deleteFile(item?.id)}>
                <Image src="/images/icon_trash.svg" alt="file" width={15} height={15} />
            </div>
        </div>
    );
};

export default UploadedCard;
