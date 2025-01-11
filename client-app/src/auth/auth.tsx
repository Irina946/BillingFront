import axios from "axios";
import { userAuth } from "../request/requests";

const API_URL = "http://158.160.67.235:8000/api/auth/jwt";


export const login = (number: string, password: string) => {
    return axios
        .post(API_URL + "/login", {
            number,
            password
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data.access_token));
            }
        });
};

export const refreshToken = () => {
    const response = axios
        .post(API_URL + "/refresh", {
            headers: {
                Authorization: "Bearer " + userAuth?.slice(1, userAuth.length - 1)
            }
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data.access_token));
            }
        });
    console.log(response)
    return response;
};

export const logout = () => {
    localStorage.clear();
};


export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user")!);
}

export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr) user = JSON.parse(userStr);
    if (user && user.token) {
        return { Authorization: "Bearer " + user.token };
    } else {
        return { Authorization: "" };
    }
}

axios.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        
        // Проверка на статус ошибки (например, 401)
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newToken = await refreshToken(); // здесь имейте в виду, что вам нужно корректно обработать новую токен и возвращать ее
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
                return axios(originalRequest);
            } catch (refreshError) {
                logout(); // если не удалось обновить токен, выход из системы
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);