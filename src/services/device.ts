import { request } from "@component/configs/axios";

export const getDeivces = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/device`,
        ...options,
    });
    return data;
};

export const updateWorkDeviceChipset = async (options?: any) => {
    const data = await request({
        method: "PUT",
        url: `/engineer/work/chip-set`,
        ...options,
    });
    return data;
};
