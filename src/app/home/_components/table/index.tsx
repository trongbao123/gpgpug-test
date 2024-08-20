"use client";
import StateComponent from "@component/components/state";
import { logo, provider } from "@/constants/constant";
import { Popover, Skeleton, Table } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./index.scss";

type Props = {
    tableData: any[];
    loading?: boolean;
};

export const DeviceTable = ({ tableData, loading }: Props) => {
    console.log(tableData);
    console.log(loading);
    const router = useRouter();

    function timeDifference(createdAt: string): string {
        const createdDate = new Date(createdAt);
        const currentDate = new Date();

        const diffInMs = currentDate.getTime() - createdDate.getTime();
        const diffInMins = Math.floor(diffInMs / (1000 * 60));
        const diffInHrs = Math.floor(diffInMins / 60);
        const diffInDays = Math.floor(diffInHrs / 24);

        const minutes = diffInMins % 60;
        const hours = diffInHrs % 24;
        const days = diffInDays;

        return `${-days}D ${hours}Hrs ${minutes}Mins`;
    }

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
            title: "Chip",
            dataIndex: "deviceType",
            key: "deviceType",
            render: (props: any) => {
                return (
                    <div className="chip-container">
                        {/* <Image src={(logo as any)[props]} alt="logo" width={16} height={16} /> */}
                        <p>{props}</p>
                    </div>
                );
            },
        },

        {
            title: "Ultilitization",
            dataIndex: "ulti",
            key: "ulti",
            render: (text: any) => <div className="ulti">{text}</div>,
        },
        {
            title: "Network",
            dataIndex: "network",
            key: "network",
            render: (text: any) => (
                <div className="chip-container">
                    <Image src={"/images/network.svg"} alt="logo" width={16} height={16} />
                    <p>{text}</p>
                </div>
            ),
        },
        {
            title: "Uptime",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (text: any) => <div className="chip-cointainer">{timeDifference(text)}</div>,
        },
        {
            title: "Hire Status",
            dataIndex: "hireStatus",
            key: "hireStatus",
            render: (text: any) => <div className="hire">{text}</div>,
        },
        {
            title: "Pool Type",
            dataIndex: "poolType",
            key: "poolType",
        },
        {
            title: "",
            key: "operation",
            width: 50,
            render: (item: any) => {
                return (
                    <Image
                        style={{ cursor: "pointer" }}
                        src="/images/action.svg"
                        width={24}
                        height={24}
                        alt="menu"
                        onClick={() => router.push(`/${item.key}`)}
                    />
                );
            },
        },
    ];

    return (
        <section className="table-container">
            <div className="table-header">
                <div className="table-header-left">
                    <span>Device Status</span>
                    <div className="search">
                        <Image src="/images/search.svg" width={20} height={20} alt="search" />
                        <input placeholder="Search Device Name" />
                    </div>

                    {/* <Input size="large" placeholder="large size" prefix={<></>} /> */}
                </div>
                <div className="table-header-right">
                    <Image src="/images/menu-table.svg" width={32} height={32} alt="menu" />
                </div>
            </div>
            <div className="table-body">
                {!loading ? (
                    <Table
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: () => router.push(`/${record.id}`),
                            };
                        }}
                        columns={columns}
                        dataSource={tableData}
                        // dataSource={provider}
                        bordered={false}
                        pagination={{ position: ["none", "none"] }}
                    />
                ) : (
                    <Skeleton />
                )}
            </div>
        </section>
    );
};
