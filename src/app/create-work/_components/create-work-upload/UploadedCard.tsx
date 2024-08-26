import { FileData } from "@component/constants/constant";
import Image from "next/image";
import React from "react";

type Props = {
    item: FileData;
};

const CreateWorkUploadedCard = ({ item }: Props) => {
    return (
        <div className="uploaded-card">
            <div className="icon">
                <Image src="/images/icon_file_loaded.svg" alt="file" width={18} height={18} />
            </div>
            <div className="file-info" style={{ color: "white" }}>
                <div className="header-info">
                    <p>{item.fileName}</p>
                </div>
                <div className="progress-info">
                    <p>{item.fileSize}MB</p>
                </div>
            </div>
            <div className="icon_trash">
                <Image src="/images/icon_trash.svg" alt="file" width={15} height={15} />
            </div>
        </div>
    );
};

export default CreateWorkUploadedCard;
