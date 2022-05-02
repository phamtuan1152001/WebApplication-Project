import { AxiosError } from "axios";
import axiosClient from "./axiosClient";

const registerApi = {
    getAll: (params) => {
        const url = '/';
        return axiosClient.get(url, {params});
    },
    get: (id) => {
        const url = '/';
        return axiosClient.post(url);
    },
}

export default registerApi;

