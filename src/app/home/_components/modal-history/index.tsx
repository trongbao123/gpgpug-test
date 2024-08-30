import React, { useState } from "react";
import { Button, Modal, Pagination, Table } from "antd";
import Image from "next/image";
import { Select } from "antd";
import "./index.scss";
import StateComponent from "@component/components/state";
import { history_hire, system_log } from "@component/constants/constant";
import { Option } from "antd/es/mentions";

type Props = {
    [key: string]: any;
};

const ModalHistory: React.FC<Props> = ({ tableData, open, setOpen }) => {
    const [selected, setSelected] = useState("hiredHistory");
    const handleChange = (event: any) => {
        setSelected(event);
    };

    const columns = [
        {
            title: "Device",
            dataIndex: "device",
            key: "device",
        },
        {
            title: "Period(UTC + 0)",
            dataIndex: "",
            key: "",
            render: (text: any) => {
                console.log(text);
                return (
                    <span>
                        {text.startTime} ~ {text.endTime}
                    </span>
                );
            },
        },
        {
            title: "Hire fee",
            dataIndex: "hireFee",
            key: "hireFee",
        },

        {
            title: "State",
            dataIndex: "state",
            key: "state",
            render: (text: any) => <StateComponent state={text} />,
        },
    ];

    const columnsSystemlog = [
        {
            title: "Device",
            dataIndex: "device",
            key: "device",
        },
        {
            title: "Device ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Message",
            dataIndex: "message",
            key: "message",
        },

        {
            title: "State",
            dataIndex: "state",
            key: "state",
            render: (text: any) => <StateComponent state={text} />,
        },
        {
            title: "Time(UTC + 0)",
            dataIndex: "time",
            key: "time",
        },
    ];
    return (
        <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            cancelButtonProps={{ style: { display: "none" } }}
            okButtonProps={{ style: { display: "none" } }}
            closable={false}
            width={1000}
        >
            <section className="history-table-container">
                <div className="table-header">
                    <div className="table-header-left">
                        <Select className="select-provider" value={selected} onChange={handleChange}>
                            <Option value="hiredHistory">Hired History</Option>
                            <Option value="systemLog">System Log</Option>
                        </Select>
                        {selected === "hiredHistory" && (
                            <div className="search">
                                <Image src="/images/search.svg" width={20} height={20} alt="search" />
                                <input placeholder="Search Device Name" />
                            </div>
                        )}

                        {/* <Input size="large" placeholder="large size" prefix={<></>} /> */}
                    </div>
                    {selected === "hiredHistory" && (
                        <div className="table-header-right">
                            <div className="all">All 112</div>
                            <div className="completed">Completed 112</div>
                            <div className="failed">Failed 112</div>
                        </div>
                    )}
                </div>
                <div className="table-body">
                    {selected === "hiredHistory" ? (
                        <Table
                            columns={columns}
                            dataSource={history_hire}
                            bordered={false}
                            pagination={{ position: ["none", "none"] }}
                        />
                    ) : (
                        <Table
                            columns={columnsSystemlog}
                            dataSource={system_log}
                            bordered={false}
                            pagination={{ position: ["none", "none"] }}
                        />
                    )}
                </div>
            </section>
            {selected === "hiredHistory" && (
                <Pagination align="center" defaultCurrent={1} defaultPageSize={10} total={history_hire.length / 20} />
            )}
        </Modal>
    );
};

export default ModalHistory;
