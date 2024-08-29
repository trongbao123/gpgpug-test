import { request } from "@component/configs/axios";

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
