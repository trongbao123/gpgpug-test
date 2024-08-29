"use client";
import { project } from "@component/constants/constant";
import "./index.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Popover } from "antd";
import { useState } from "react";
import formatDate from "@component/utilities/format-time";
import gbToMb from "@component/utilities/gbToMb";

type Props = {
    [key: string]: any;
};
const ListProject: React.FC<Props> = ({ projectList }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleContainerClick = (item: any) => {
        router.push(`/project/${item.id}?&workSize=${item.fileSize}`);
    };

    const handleImageClick = (e: any, item: any) => {
        e.stopPropagation();
        setOpen(!open);
    };
    const renderProject = () => {
        return projectList?.data.map((item: any) => {
            return (
                <div
                    style={{ cursor: "pointer" }}
                    key={item.id}
                    className="project-list-item"
                    onClick={() => handleContainerClick(item)}
                >
                    <div className="item-header">
                        <div className="item-header-left">
                            <span>{item.name}</span>
                            <p>{formatDate(item.createdAt)}</p>
                        </div>
                        <Popover trigger="click" placement="bottomRight" content={<div></div>}>
                            <Image
                                style={{ cursor: "pointer" }}
                                src="/images/action.svg"
                                width={24}
                                height={24}
                                alt="menu"
                                onClick={(e) => handleImageClick(e, item)}
                            />
                        </Popover>
                    </div>
                    <div className="billing-data">
                        <div className="billing-data-content">
                            Work: <p>{item.workSize}</p>
                        </div>
                        <div className="billing-data-content">
                            Data: <p>{item.fileSize} GB</p>{" "}
                        </div>
                        {/* <div className="billing-data-content">
                            Billing: <p>{item.fileSize}</p>
                        </div> */}
                    </div>
                    <div className="item-line"></div>
                    <div className="captancy">
                        <p>Resulting capacity</p>
                        <div className="data-result">
                            <p>{gbToMb(item?.fileSize)} MB</p>
                            <Image src="/images/cloud.svg" width={16} height={16} alt="cloud" />
                        </div>
                    </div>
                </div>
            );
        });
    };
    return <div className="project-list">{renderProject()}</div>;
};

export default ListProject;
