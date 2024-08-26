import React, { useEffect } from "react";
import "./index.scss";
import { Button, Input, Radio } from "antd";
import { AppleIcon, IconSearch, NvidiaIcon } from "@component/constants/Icon";
import { icons } from "antd/es/image/PreviewGroup";
import { deviceGroups } from "@component/constants/constant";
import Image from "next/image";

type Props = {};

const ButtonType = [
    {
        id: 1,
        label: "All",
    },
    {
        id: 2,
        label: "Apple",
        icons: <AppleIcon size={20} />,
        icons_black: <AppleIcon size={20} color="black" />,
    },
    {
        id: 3,
        label: "Nvidia",
        icons: <NvidiaIcon size={20} />,
        icons_black: <NvidiaIcon size={20} color="black" />,
    },
];

const CreateWorkChooseProcessor = (props: Props) => {
    const [selectedProcessor, setSelectedProcessor] = React.useState<any>("All");
    const [processorList, setProcessorList] = React.useState<any>([]);
    const [selected, setSelected] = React.useState<any>([]);

    const changeSelected = (item: any) => {
        if (selected.includes(item.id)) {
            setSelected(selected.filter((i: any) => i !== item.id));
        } else {
            setSelected([item.id]);
        }
    };
    useEffect(() => {
        if (selectedProcessor !== "All") {
            setProcessorList(
                deviceGroups.find((item) => {
                    return item.brand === selectedProcessor;
                })?.devices
            );
            return;
        }
        setProcessorList(deviceGroups.map((item) => item.devices).flat());
    }, [selectedProcessor]);

    return (
        <div className="choose-processor-main">
            <div className="choose-processor-main-button">
                {ButtonType.map((item) => {
                    return (
                        <Button
                            className={`${selectedProcessor !== item.label ? "un-active" : ""}`}
                            icon={selectedProcessor !== item.label ? item.icons : item.icons_black}
                            key={item.id}
                            onClick={() => setSelectedProcessor(item.label)}
                        >
                            {item.label}
                        </Button>
                    );
                })}
            </div>
            <Input
                className="custom-placeholder"
                size="large"
                placeholder="Search Device"
                prefix={<IconSearch size={18} />}
                style={{
                    background: "inherit",
                    border: "1px solid #40444B",
                }}
            />
            <div className="processor-list">
                {processorList.map((item: any) => {
                    return (
                        <div key={item.id} className="processor-item">
                            <Radio
                                checked={selected.length > 0 && selected.includes(item.id)}
                                onClick={() => changeSelected(item)}
                            />
                            <div className="processor-item__icon">
                                <Image width={24} height={24} src={item.icon} alt="icon" />
                            </div>
                            <div className="processor-item__info">
                                <p className="text-secondary">{item.name}</p>
                                <p className="text-secondary">{item.quantity}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CreateWorkChooseProcessor;
