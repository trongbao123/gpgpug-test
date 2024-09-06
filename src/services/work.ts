import { request } from "@component/configs/axios";
import { USERKIT_TOKEN } from "@component/configs/setting";
import axios from "axios";

export const createWork = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/engineer/work`,
        ...options,
    });
    return data;
};

export const deleteWork = async (options?: any) => {
    const data = await request({
        method: "DELETE",
        url: `/engineer/work`,
        ...options,
    });
    return data;
};

export const metadataWorkList = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/engineer/work/metadata`,
        ...options,
    });
    return data;
};

export const deleteWorkMetada = async (options?: any) => {
    const data = await request({
        method: "DELETE",
        url: `/engineer/work/metadata`,
        ...options,
    });
    return data;
};

export const saveWorkMetada = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/engineer/work/metadata`,
        ...options,
    });
    return data;
};

export const updateWorkStatus = async (options?: any) => {
    const data = await request({
        method: "PUT",
        url: `/engineer/work/status`,
        ...options,
    });
    return data;
};

export const workSingleApi = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/engineer/work/single`,
        ...options,
    });
    return data;
};
export const getSasTokenWork = async (file: File, projectId: string, work_id: string): Promise<any> => {
    const storedData = localStorage.getItem(USERKIT_TOKEN);
    const parsedData = storedData ? storedData : null;
    const token = parsedData ?? null;
    try {
        const result = await axios.post<{ sas: string }>(
            `https://gpgpu-file.server-kit.com/project/${projectId}/work/${work_id}/file/upload/sas`,
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
export const deleteSasTokenWork = async (file: File, projectId: string, workId: string): Promise<any> => {
    const storedData = localStorage.getItem(USERKIT_TOKEN);
    const parsedData = storedData ? storedData : null;
    const token = parsedData ?? null;
    try {
        const result = await axios.delete<{ sas: string }>(
            `https://gpgpu-file.server-kit.com/project/${projectId}/work/${workId}/file/delete`,
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
