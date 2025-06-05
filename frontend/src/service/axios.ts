import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;



export const api = axios.create({
    baseURL: apiUrl || "http://localhost:3000",
    responseType: "json",
    headers: {
        accept: "application/json",
        "content-type": "application/json",
    },
});


api.interceptors.request.use(
    (config) => {
        const token = `Bearer ${localStorage.getItem('token')}`
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    },

)
