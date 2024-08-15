import { project } from "@component/constants/constant";
import "@/app/project/[id]/index.scss";
import HeaderMain from "./_components/header-main/page";
import NavToMain from "./_components/nav-to-main";
import Image from "next/image";

import DropzoneUpload from "./_components/drop-zone-upload";
import WorkAndHistory from "./_components/work";
import InformationProject from "./_components/information";
export async function generateStaticParams() {
    return project.map((path) => ({
        id: path.id,
    }));
}
const ProjectDetail = ({ params }: { params: { id: string } }) => {
    const itemDetail: any = project.find((item: any) => item.id === params.id);
    return (
        <div className="project-detail">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                <div className="project-container">
                    <NavToMain />
                    <div className="nav-title">
                        <p>{itemDetail?.name}</p>
                        <div className="nav-title-icon">
                            <Image width={32} height={32} src={"/images/detail.svg"} alt="detail" />
                        </div>
                    </div>
                    <InformationProject
                        projectId={itemDetail?.id}
                        resulting={itemDetail?.resulting}
                        createDate={itemDetail?.createDate}
                    />
                </div>
                <div className="line-detail" />
                <div className="project-container">
                    <div className="body">
                        <DropzoneUpload />
                        <WorkAndHistory itemDetail={itemDetail} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
