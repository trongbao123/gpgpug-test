"use client";
import { project } from "@component/constants/constant";

import HeaderMain from "../_components/header-main/page";
import NavToMain from "../_components/nav-to-main";
import Image from "next/image";
import DropzoneUpload from "../_components/drop-zone-upload";
import InformationProject from "../_components/information";
import WorkAndHistory from "../_components/work";
import ProjectContainer from "../_components/project-container/projectContainer";
import { metadataList, searchWorkList } from "@component/services/project";
import { useEffect, useState } from "react";
import { useLoading } from "@component/contexts/loadingContext";
import Notification from "@component/components/common/notification";
import { useSearchParams } from "next/navigation";

// export async function generateStaticParams() {
//     return project.map((path) => ({
//         id: path.id,
//     }));
// }
const ProjectDetail = ({ params }: { params: { id: string } }) => {
    const itemDetail: any = project.find((item: any) => item.id === params.id);
    const [metadata, setMetadata] = useState<any>([]);
    const [workList, setWorkList] = useState<any>([]);
    const [length, setLength] = useState(10);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState<string>("");
    const searchParams = useSearchParams();
    const name = searchParams?.get("name");
    const createdAt = searchParams?.get("createdAt");
    const workSize = searchParams?.get("workSize");
    const { setIsLoading } = useLoading();
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [metadataResponse, workListResponse] = await Promise.all([
                metadataList({
                    params: {
                        projectId: params?.id,
                    },
                }),
                searchWorkList({
                    params: {
                        page,
                        length,
                        projectId: params?.id,
                        keyword,
                    },
                }),
            ]);

            if ((metadataResponse as any)?.result) {
                setMetadata((metadataResponse as any)?.result);
            } else {
                throw metadataResponse;
            }

            if ((workListResponse as any)?.data) {
                setWorkList((workListResponse as any).data);
            } else {
                throw workListResponse;
            }
        } catch (error: any) {
            Notification({ type: "error", message: error?.message, placement: "top" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (e: any) => {
        setKeyword(e.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 500);

        return () => clearTimeout(timer);
    }, [page, length, keyword]);

    return (
        <ProjectContainer>
            <div className="project-container">
                <NavToMain />
                <div className="nav-title">
                    <p>{name}</p>
                    <div className="nav-title-icon">
                        <Image width={32} height={32} src={"/images/detail.svg"} alt="detail" />
                    </div>
                </div>
                <InformationProject projectId={params?.id} resulting={workSize} createDate={createdAt} />
            </div>
            <div className="line-detail" />
            <div className="project-container">
                <div className="body">
                    <DropzoneUpload fetchData={fetchData} metadata={metadata} projectId={params?.id} />
                    <WorkAndHistory
                        keyword={keyword}
                        workList={workList}
                        page={page}
                        length={length}
                        handleSearch={handleSearch}
                        itemDetail={itemDetail}
                    />
                </div>
            </div>
        </ProjectContainer>
    );
};

export default ProjectDetail;
