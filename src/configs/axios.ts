import handleError from "@/utilities/handle-errors";
import { USERKIT_TOKEN } from "@component/constants/setting";
import axios, { AxiosRequestConfig } from "axios";

type RequestType = {
    method: string;
    url: string;
    data?: any;
    params?: any;
};
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        serverkit_instance_id: process.env.NEXT_PUBLIC_SERVERKIT_INSTANCE_ID,
        serverkit_project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
    },
    validateStatus: (status) => status >= 200 && status <= 504,
});

const addTokenToRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const storedData = localStorage.getItem(USERKIT_TOKEN);
    const parsedData = storedData ? storedData : null;
    const token = parsedData ?? null;

    if (token)
        config.headers = {
            ...config.headers,
            USERKIT_TOKEN: token,
        };
    return config;
};

const handleRequestError = (error: any): Promise<never> => {
    const { error: errorResponse } = error || {};
    throw errorResponse;
};

const sendRequest = async <T>(options: RequestType): Promise<T | undefined> => {
    const { method, url, data: requestData, params } = options || {};

    const config: AxiosRequestConfig = addTokenToRequest({
        url,
        method,
        data: requestData,
        params,
    });
    try {
        const response = await axiosInstance.post(url, requestData, config);
        const [data, error, statusText, status] = handleError(response);

        if (error) {
            throw {
                error,
                status,
                statusText,
                data,
            };
        }

        return data;
    } catch (errorResponse: any) {
        handleRequestError(errorResponse);
    }
};

export const request = async <T>(options: RequestType): Promise<T | undefined> => {
    return sendRequest<T>({ ...options });
};
