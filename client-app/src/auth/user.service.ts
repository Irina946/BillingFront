import axios from "axios";
import authHeader from "./auth";

const API_URL = "http://51.250.8.218:8000/api/auth/jwt";

export const getClientBoard = () => {
    return axios.get(API_URL + "/user", { headers: authHeader() });
};

