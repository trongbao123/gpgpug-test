"use client";
import { project } from "@component/constants/constant";

import HeaderMain from "../_components/header-main/page";
import NavToMain from "../_components/nav-to-main";
import Image from "next/image";
import DropzoneUpload from "../_components/drop-zone-upload";
import InformationProject from "../_components/information";
import WorkAndHistory from "../_components/work";
import ProjectContainer from "../_components/project-container/projectContainer";
import { metadataList, projectSingleApi, searchWorkList } from "@component/services/project";
import { useEffect, useState } from "react";
import { useLoading } from "@component/contexts/loadingContext";
import Notification from "@component/components/common/notification";
import { useSearchParams } from "next/navigation";

const ProjectDetail = ({ params }: { params: { id: string } }) => {
    const [projectSingle, setProjectSingle] = useState(null);
    const [metadata, setMetadata] = useState<any>([]);
    const [workList, setWorkList] = useState<any>([]);
    const [length, setLength] = useState(10);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState<string>("");
    const searchParams = useSearchParams();
    const workSize = searchParams?.get("workSize");
    const { setIsLoading } = useLoading();
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [metadataResponse, workListResponse, projectSingleResponse] = await Promise.all([
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
                projectSingleApi({
                    params: {
                        projectId: params?.id,
                    },
                }),
            ]);

            if (metadataResponse && (metadataResponse as any)?.result) {
                setMetadata((metadataResponse as any)?.result);
            } else {
                throw metadataResponse;
            }

            if (workListResponse && (workListResponse as any)?.data) {
                setWorkList((workListResponse as any).data);
            } else {
                throw workListResponse;
            }

            if (projectSingleResponse && (projectSingleResponse as any)?.data) {
                setProjectSingle((projectSingleResponse as any).data);
            } else {
                throw projectSingleResponse;
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
                    <p>{(projectSingle as any)?.name}</p>
                    <div className="nav-title-icon">
                        <Image width={32} height={32} src={"/images/detail.svg"} alt="detail" />
                    </div>
                </div>
                <InformationProject projectSingle={projectSingle} projectId={params?.id} resulting={workSize} />
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
                        projectId={params?.id}
                    />
                </div>
            </div>
        </ProjectContainer>
    );
};

export default ProjectDetail;
