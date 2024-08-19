"use client";
import HeaderMain from "../home/_components/header-main/page";
import Image from "next/image";
import { logo, provider } from "@/constants/constant";
import StateComponent from "@component/components/state";
import HireStatus from "./_components/hire-status";
import Reward from "./_components/reward-chart";
import NavBack from "./_components/NavBack";
import { useEffect, useState } from "react";
import { detailDeviceMain } from "@component/services/connect";
import Notification from "@component/components/common/notification";

// export async function generateStaticParams() {
//     return provider.map((path) => ({
//         id: path.key,
//     }));
// }
const PageDetail = ({ params }: { params: { id: string } }) => {
    const [deviceDetail, setDeviceDetail] = useState<any>(null);

    const getDetailDevice = async () => {
        try {
            const response: any = await detailDeviceMain({
                params: {
                    deviceId: params.id,
                },
            });
            if (response && response.result) {
                setDeviceDetail(response.result);
            } else {
                throw response;
            }
        } catch (error: any) {
            Notification({
                type: "error",
                message: error.message || error,
                placement: "top",
            });
        }
    };

    useEffect(() => {
        getDetailDevice();
    }, [params.id]);

    return (
        <div className="detail-container">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                <div className="container">
                    <div className="nav">
                        <NavBack />
                        <div className="nav-title">
                            <p>{deviceDetail?.name}</p>
                            <div className="nav-title-icon">
                                <Image width={32} height={32} src={"/images/detail.svg"} alt="detail" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="nav-description">
                                <div className="nav-description-item active">
                                    <Image src={(logo as any)[deviceDetail?.os]} alt="logo" width={16} height={16} />
                                    <p>{deviceDetail?.os}</p>
                                </div>
                                <div className="nav-description-item">
                                    <StateComponent state={deviceDetail?.status} />
                                </div>
                                <div className="nav-description-item">
                                    <p>Device ID: </p>
                                    <p>{deviceDetail?.id}</p>
                                </div>
                                <div className="nav-description-item">
                                    <p>{deviceDetail?.poolType}</p>
                                </div>
                            </div>
                            <div className="flex-right">
                                <div className="nav-description-item">
                                    <StateComponent state={deviceDetail?.status} />
                                </div>
                                <div className="flex-item">
                                    <Image src={"/images/delete.svg"} width={16} height={16} alt="delete" />
                                    <p>Terminate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-detail" />
                <div className="container">
                    <div className="body">
                        <HireStatus state={deviceDetail?.status} />
                        <Reward />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageDetail;
