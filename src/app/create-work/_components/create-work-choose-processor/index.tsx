import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "./index.scss";
import { Button, Input, Radio } from "antd";
import { AppleIcon, IconSearch, NvidiaIcon } from "@component/constants/Icon";
import { icons } from "antd/es/image/PreviewGroup";
import { deviceGroups } from "@component/constants/constant";
import Image from "next/image";
import Notification from "@component/components/common/notification";

type Props = {
    [key: string]: any;
};

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

const CreateWorkChooseProcessor = ({
    setChecked,
    selected,
    setSelected,
    processorList,
    setProcessorList,
    deviceChipSetCount,
    setDeviceChipSetCount,
}: Props) => {
    const [selectedProcessor, setSelectedProcessor] = React.useState<any>("All");
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProcess = processorList.filter((processor: any) =>
        processor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const changeSelected = (item: any) => {
        if (selected.includes(item.id)) {
            setSelected(selected.filter((i: any) => i.id !== item.id));
            setChecked(true);
        } else {
            setSelected([
                {
                    ...item,
                    maxQuantity: item.quantity,
                    quantity: 1,
                },
            ]);

            setChecked(true);
        }
    };

    const increaseQuantity = (item: any) => {
        const index = selected.findIndex((i: any) => i.id === item.id);
        if (selected[index].quantity < selected[index].maxQuantity) {
            selected[index].quantity += 1;
            setSelected([...selected]);
            setDeviceChipSetCount((prev: any) => {
                return (prev += 1);
            });
        } else {
            Notification({
                type: "error",
                message: "Quantity can't exceed the maximum quantity",
                placement: "top",
            });
        }
    };

    const decreaseQuantity = (item: any) => {
        const index = selected.findIndex((i: any) => i.id === item.id);
        if (selected[index].quantity > 1) {
            selected[index].quantity -= 1;
            setSelected([...selected]);
            setDeviceChipSetCount((prev: any) => {
                return (prev -= 1);
            });
        } else {
            Notification({
                type: "error",
                message: "Quantity can't be less than 1",
                placement: "top",
            });
        }
    };

    useEffect(() => {
        if (selectedProcessor !== "All") {
            setProcessorList(
                deviceGroups.find((item: any) => {
                    return item.brand === selectedProcessor;
                })?.devices
            );
            return;
        }
        setProcessorList(deviceGroups.map((item: any) => item.devices).flat());
    }, [selectedProcessor]);

    useEffect(() => {
        if (selected.length <= 0) setChecked(false);
    }, []);
    console.log(selected);

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
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="processor-list">
                {filteredProcess.length > 0 ? (
                    filteredProcess.map((item: any, index: number) => {
                        return (
                            <div key={item.id} className="processor-item">
                                <Radio
                                    checked={
                                        selected.length > 0 && selected.findIndex((i: any) => i.id === item.id) !== -1
                                    }
                                    onClick={() => changeSelected(item)}
                                />
                                <div className="processor-item__icon">
                                    <Image width={24} height={24} src={item.icon} alt="icon" />
                                </div>
                                <div className="processor-item__info">
                                    <p className="text-secondary">{item.name}</p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        {selected.findIndex((i: any) => i.id === item.id) !== -1 && (
                                            <p
                                                className="text-secondary"
                                                style={{ cursor: "pointer", padding: "2px 5px" }}
                                                onClick={() => decreaseQuantity(item)}
                                            >
                                                -
                                            </p>
                                        )}
                                        <p className="text-secondary">
                                            {selected.findIndex((i: any) => i.id === item.id) !== -1
                                                ? deviceChipSetCount
                                                : item.quantity}
                                        </p>
                                        {selected.findIndex((i: any) => i.id === item.id) !== -1 && (
                                            <p
                                                className="text-secondary"
                                                style={{ cursor: "pointer", padding: "2px 5px" }}
                                                onClick={() => increaseQuantity(item)}
                                            >
                                                +
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p
                        style={{
                            textAlign: "center",
                            color: "white",
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "50%",
                        }}
                    >
                        No device found
                    </p>
                )}
            </div>
        </div>
    );
};
export default CreateWorkChooseProcessor;
