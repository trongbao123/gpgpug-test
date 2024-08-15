import axios from "axios";
import React, { useCallback, useState } from "react";
import "./index.scss";
import Image from "next/image";
import { fileData } from "@component/constants/constant";
import UploadingCard from "./UploadingCard";
import UploadedCard from "./UploadedCard";
type Props = {};

const DropzoneUpload = (props: Props) => {
    return (
        <div className="upload-container">
            <div className="upload-container-select-zone">
                <div className="upload-container-select-zone-data">
                    <p>Data</p>
                    <div className="data-number">4</div>
                </div>
                <div className="icon-upload">
                    <Image src="/images/upload.svg" alt="upload" width={24} height={24} />
                </div>
            </div>
            <div className="upload-container-uploading">
                {fileData.uploadingOrFail.map((item, index) => (
                    <UploadingCard key={index} item={item} />
                ))}
            </div>
            <div className="upload-container-uploaded">
                {fileData.uploaded.map((item, index) => (
                    <UploadedCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default DropzoneUpload;
