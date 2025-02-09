import axios from "axios";

const API_URL = "http://158.160.67.235:8000/api/auth/jwt";
export const userAuth = JSON.parse(localStorage.getItem("user")!);
const refresh = JSON.parse(localStorage.getItem("refresh")!)

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
                localStorage.setItem("refresh", JSON.stringify(response.data.refresh_token))
            }
        });
};

export const refreshToken = () => {
    const response = axios
        .post(API_URL + "/refresh", {
            refresh_token: refresh
        },
             {
            headers: {
                Authorization: "Bearer " + userAuth,
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

const scheduleTokenRefresh = () => {
    const REFRESH_INTERVAL = 29 * 60 * 1000;

    setInterval(async () => {
        try {
            await refreshToken();
        } catch (error) {
            console.error("Ошибка обновления токена:", error);
        }
    }, REFRESH_INTERVAL);
};

scheduleTokenRefresh();

