"use client";
import { useEffect, useState } from "react";
import ListProject from "./_components/list-project/listProject";
import ProjectContainer from "./_components/project-container/projectContainer";
import Rate from "./_components/rate/page";
import Search from "./_components/search";
import "./index.scss";
import { listProject } from "@component/services/project";
import Notification from "@component/components/common/notification";
import { useLoading } from "@component/contexts/loadingContext";
const Project = () => {
    const [projectList, setProjectList] = useState(null);
    const [page, setPage] = useState(1);
    const [length, setLength] = useState(10);
    const [searchProject, setSearchProject] = useState<string>("");
    const { setIsLoading } = useLoading();
    const apiProject = async (searchProject?: string) => {
        setIsLoading(true);
        try {
            const res: any = await listProject({
                params: {
                    page,
                    length,
                    projectName: searchProject,
                },
            });
            if (res && res.data) {
                setProjectList(res.data);
            } else {
                throw res;
            }
        } catch (error: any) {
            Notification({
                type: "error",
                message: error?.message || error,
                placement: "top",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (e: any) => {
        setSearchProject(e.target.value);
    };

    useEffect(() => {
        apiProject();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            apiProject(searchProject);
        }, 500);

        return () => clearTimeout(timer);
    }, [page, length, searchProject]);

    return (
        <ProjectContainer>
            <Rate />
            <div className="container-project">
                <Search searchProject={searchProject} handleSearch={handleSearch} />
                <ListProject projectList={projectList} />
            </div>
        </ProjectContainer>
    );
};

export default Project;
