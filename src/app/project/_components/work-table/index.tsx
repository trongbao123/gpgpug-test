"use client";
import Image from "next/image";
import "./index.scss";
import { Table } from "antd";
import StateComponent from "@component/components/state";
import { Pagination } from "antd";
type WorkTableProps = {
    [key: string]: any;
};
const WorkTable: React.FC<WorkTableProps> = ({ itemDetail }) => {
    const columns = [
        {
            title: "State",
            dataIndex: "state",
            key: "state",
            render: (text: any) => <StateComponent state={text} />,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Device",
            dataIndex: "device",
            key: "device",
        },

        {
            title: "Data",
            dataIndex: "data",
            key: "data",
            render: (text: any) => <div className="ulti">{text} GB</div>,
        },
        {
            title: "Uptime",
            dataIndex: "",
            key: "uptime",
            render: (text: any) => {
                return (
                    <div className="time" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
                        <p style={{ color: "#fff" }}>{text.upTimeHours}</p>Hrs
                        <p style={{ color: "#fff" }}>{text.upTimeMinutes}</p>Mins
                        <p style={{ color: "#fff" }}> {text.upTimeSeconds}</p>Sec
                    </div>
                );
            },
        },
        {
            title: "Create",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text: any) => <div className="hire">{text}</div>,
        },
        {
            title: "",
            key: "operation",
            width: 50,
            render: (item: any) => {
                return (
                    <Image style={{ cursor: "pointer" }} src="/images/action.svg" width={24} height={24} alt="menu" />
                );
            },
        },
    ];
    return (
        <div className="work-table">
            <div className="table-header">
                <div className="table-header-left">
                    <span>Work</span>
                    <div className="search">
                        <Image src="/images/search.svg" width={20} height={20} alt="search" />
                        <input placeholder="Search Work Name" />
                    </div>

                    {/* <Input size="large" placeholder="large size" prefix={<></>} /> */}
                </div>
                <div className="table-header-right">
                    <Image src="/images/menu-table.svg" width={32} height={32} alt="menu" />
                </div>
            </div>
            <Table
                columns={columns}
                dataSource={itemDetail?.listWork}
                bordered={false}
                pagination={{ position: ["none", "none"] }}
            />
            <Pagination align="center" defaultCurrent={1} total={itemDetail?.listWork.length / 20} />
        </div>
    );
};

export default WorkTable;
