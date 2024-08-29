import { request } from "@component/configs/axios";

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
