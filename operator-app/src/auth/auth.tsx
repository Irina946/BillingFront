import axios from "axios";

const API_URL = "http://158.160.67.235:8000/api/auth/jwt";
export const userAuth = localStorage.getItem("user");

export const login = (email: string, password: string) => {
    return axios
        .post(API_URL + "/login", {
            email,
            password
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data.access_token));
                localStorage.setItem("name", `${JSON.stringify(response.data.user.surname)} ${JSON.stringify(response.data.user.name)}`);
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
    return response;
};
export const logout = () => {
    localStorage.removeItem("user");
}

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
        return {Authorization: ""};
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