import axios, { all } from "axios";
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
    return axios
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