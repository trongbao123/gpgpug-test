import { request } from "@component/configs/axios";
import { USERKIT_TOKEN } from "@component/constants/setting";
import axios from "axios";

export const createProject = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/engineer/project`,
        ...options,
    });
    return data;
};

export const listProject = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/engineer/project`,
        ...options,
    });
    return data;
};

export const metadataList = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/engineer/project/metadata`,
        ...options,
    });
    return data;
};

export const searchWorkList = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/engineer/work`,
        ...options,
    });
    return data;
};

export const deleteProject = async (options?: any) => {
    const data = await request({
        method: "DELETE",
        url: `/engineer/project`,
        ...options,
    });
    return data;
};

export const deleteMetadata = async (options?: any) => {
    const data = await request({
        method: "DELETE",
        url: `/engineer/project/metadata`,
        ...options,
    });
    return data;
};

export const getSasToken = async (file: File, projectId: string): Promise<any> => {
    const storedData = localStorage.getItem(USERKIT_TOKEN);
    const parsedData = storedData ? storedData : null;
    const token = parsedData ?? null;
    try {
        const result = await axios.post<{ sas: string }>(
            `https://gpgpu-file.server-kit.com/project/${projectId}/file/upload/sas`,
            {
                originalname: file.name,
            },
            {
                headers: {
                    Serverkit_instance_id: process.env.NEXT_PUBLIC_SERVERKIT_INSTANCE_ID,
                    serverkit_project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
                    Userkit_token: token,
                },
            }
        );

        return result.data;
    } catch (err) {
        console.error(err);
    }
};
export const deleteSasToken = async (file: File, projectId: string): Promise<any> => {
    const storedData = localStorage.getItem(USERKIT_TOKEN);
    const parsedData = storedData ? storedData : null;
    const token = parsedData ?? null;
    try {
        const result = await axios.delete<{ sas: string }>(
            `https://gpgpu-file.server-kit.com/project/${projectId}/file/upload/sas`,
            {
                data: { originalname: file.name },
                headers: {
                    Serverkit_instance_id: process.env.NEXT_PUBLIC_SERVERKIT_INSTANCE_ID,
                    serverkit_project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
                    Userkit_token: token,
                },
            }
        );

        return result.data;
    } catch (err) {
        console.error(err);
    }
};

export const saveMetaData = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/engineer/project/metadata`,
        ...options,
    });
    return data;
};

export const projectTotal = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/engineer/project/total`,
        ...options,
    });
    return data;
};

export const projectSingleApi = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/engineer/project/single`,
        ...options,
    });
    return data;
};
