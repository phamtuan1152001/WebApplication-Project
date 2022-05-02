import { AxiosError } from "axios";
import axiosClient from "./axiosClient";

const registerApi = {
    getAll: (params) => {
        const url = '/sign-up';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = '/sign-up/${id}';
        return axiosClient.post(url);
    },
}

export default registerApi;

