import React from "react";
import "./index.scss";
import { networkTier } from "@component/constants/constant";
import { Radio } from "antd";
import Image from "next/image";
type Props = {};

const CreateNetworkTier = (props: Props) => {
    const [selected, setSelected] = React.useState<any>([]);

    const changeSelected = (item: any) => {
        if (selected.includes(item.id)) {
            setSelected(selected.filter((i: any) => i !== item.id));
        } else {
            setSelected([item.id]);
        }
    };
    return (
        <div className="create-work-network-tier">
            <div className="create-work-network-tier__content">
                {networkTier.map((item, index) => {
                    return (
                        <div key={item.id} className="create-work-network-tier__content-item">
                            <div className="item-header">
                                <div className="item-title">
                                    <Image src={item.icon} alt="icon_net" width={24} height={24} />
                                    <span>{item.label}</span>
                                </div>
                                <Radio
                                    checked={selected.length > 0 && selected.includes(item.id)}
                                    onClick={() => changeSelected(item)}
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
