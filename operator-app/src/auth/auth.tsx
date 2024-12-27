import axios from "axios";

const API_URL = "http://158.160.67.235:8000/api/auth/jwt";

export const login = (email: string, password: string) => {
    return axios
    .post(API_URL + "/login", {
        email,
        password
    })
    .then((response) => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
}

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