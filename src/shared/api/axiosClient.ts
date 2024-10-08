import axios from "axios";
import { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Accept": "text/plain",
        "Content-Type": "application/json",
    },
});
