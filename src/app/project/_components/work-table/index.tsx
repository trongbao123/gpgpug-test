"use client";
import Image from "next/image";
import "./index.scss";
import { Table } from "antd";
import StateComponent from "@component/components/state";
import { Pagination } from "antd";
import { usePathname, useRouter } from "next/navigation";
import formatDate from "@component/utilities/format-time";
type WorkTableProps = {
    [key: string]: any;
};
const WorkTable: React.FC<WorkTableProps> = ({ keyword, workList, page, length, handleSearch, itemDetail }) => {
    const columns = [
        {
            title: "State",
            dataIndex: "status",
            key: "status",
            render: (text: any) => <StateComponent state={text} />,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Device",
            dataIndex: "deviceChipSet",
            key: "deviceChipSet",
        },

        {
            title: "Data",
            dataIndex: "workFileSize",
            key: "workFileSize",
            render: (text: any) => <div className="ulti">{text} GB</div>,
        },
        {
            title: "Region",
            dataIndex: "region",
            key: "region",
        },
        {
            title: "Create",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text: any) => <div className="hire">{formatDate(text)}</div>,
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
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className="work-table">
            <div className="table-header">
                <div className="table-header-left">
                    <span>Work</span>
                    <div className="search">
                        <Image src="/images/search.svg" width={20} height={20} alt="search" />
                        <input onChange={handleSearch} value={keyword} placeholder="Search Work Name" />
                    </div>

                    {/* <Input size="large" placeholder="large size" prefix={<></>} /> */}
                </div>
                <div className="table-header-right">
                    <Image src="/images/menu-table.svg" width={32} height={32} alt="menu" />
                </div>
            </div>
            <Table
                columns={columns}
                dataSource={workList}
                bordered={false}
                pagination={{ position: ["none", "none"] }}
                onRow={(record, index) => {
                    return {
                        onClick: (event) => {
                            router.push(
                                `${pathname}/${record.id}?name=${record.name}&createdAt=${record.createdAt}&deviceChipSet=${record.deviceChipSet}&region=${record.region}&status=${record.status}`
                            );
                        },
                    };
                }}
            />
            <Pagination align="center" defaultCurrent={page} defaultPageSize={length} total={workList.length / 20} />
        </div>
    );
};

export default WorkTable;
