import React, { useEffect } from "react";
import "./index.scss";
import { networkTier } from "@component/constants/constant";
import { Radio } from "antd";
import Image from "next/image";
type Props = {
    [key: string]: any;
};

const CreateNetworkTier = ({ setChecked, selected, setSelected }: Props) => {
    const changeSelected = (item: any) => {
        if (selected.includes(item.id)) {
            setSelected(selected.filter((i: any) => i !== item.id));
            setChecked(true);
        } else {
            setSelected([item.id]);
            setChecked(true);
        }
    };

    useEffect(() => {
        if (selected.length <= 0) setChecked(false);
    }, []);
    return (
        <div className="create-work-network-tier">
            <div className="create-work-network-tier__content">
                {networkTier.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className="create-work-network-tier__content-item"
                            onClick={() => changeSelected(item)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="item-header">
                                <div className="item-title">
                                    <Image src={item.icon} alt="icon_net" width={24} height={24} />
                                    <span>{item.label}</span>
                                </div>
                                <Radio
                                    checked={selected.length > 0 && selected.includes(item.id)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                    }}
                                />
                            </div>
                            <div className="item-body">
                                <div className="item">
                                    <span>Download</span>
                                    <span className="speed-net">{item.downloadSpeed}</span>
                                </div>
                                <div className="item">
                                    <span>Upload</span>
                                    <span className="speed-net">{item.uploadSpeed}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CreateNetworkTier;
