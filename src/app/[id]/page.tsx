import HeaderMain from "../home/_components/header-main/page";
import Image from "next/image";
import { logo, provider } from "@/constants/constant";
import StateComponent from "@component/components/state";
import HireStatus from "./_components/hire-status";
import Reward from "./_components/reward-chart";
import NavBack from "./_components/NavBack";

export async function generateStaticParams() {
    return provider.map((path) => ({
        id: path.key,
    }));
}
const PageDetail = ({ params }: { params: { id: string } }) => {
    const itemDetail: any = provider.find((item: any) => item.key === params.id);

    return (
        <div className="detail-container">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                <div className="container">
                    <div className="nav">
                        <NavBack />
                        <div className="nav-title">
                            <p>{itemDetail?.name}</p>
                            <div className="nav-title-icon">
                                <Image width={32} height={32} src={"/images/detail.svg"} alt="detail" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="nav-description">
                                <div className="nav-description-item active">
                                    <Image src={(logo as any)[itemDetail.chip]} alt="logo" width={16} height={16} />
                                    <p>{itemDetail?.chip}</p>
                                </div>
                                <div className="nav-description-item">
                                    <StateComponent state={itemDetail?.state} />
                                </div>
                                <div className="nav-description-item">
                                    <p>Device ID: </p>
                                    <p>{itemDetail?.key}</p>
                                </div>
                                <div className="nav-description-item">
                                    <p>{itemDetail?.pool}</p>
                                </div>
                            </div>
                            <div className="flex-right">
                                <div className="nav-description-item">
                                    <StateComponent state={itemDetail?.state} />
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
                        <HireStatus state={itemDetail?.state} />
                        <Reward />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageDetail;
