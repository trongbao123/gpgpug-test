import { request } from "./axios";

const login = async (options?: any) => {
    const data = await request({
        method: "POST",
        url: `/user/login`,
        ...options,
    });
    return data;
};

export { login };
