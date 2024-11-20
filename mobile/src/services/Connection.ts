import axios from "axios";

export const BASE_URL = "http://10.0.0.206:8080";

export const Connection = axios.create({
    baseURL: BASE_URL
});