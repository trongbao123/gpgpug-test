import { request } from "@component/configs/axios";

const connect = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/device/connect`,
        ...options,
    });
    return data;
};

const createConnect = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/device`,
        ...options,
    });
    return data;
};

const confirmConnect = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/device/confirm`,
        ...options,
    });
    return data;
};

const detailDevice = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/device/detail`,
        ...options,
    });
    return data;
};

const detailDeviceMain = async (options?: any) => {
    const data = await request({
        method: "GET",
        url: `/device/detail`,
        ...options,
    });
    return data;
};
export { connect, createConnect, confirmConnect, detailDevice, detailDeviceMain };
