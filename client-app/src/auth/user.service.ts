import axios from "axios";
import authHeader from "./auth";

const API_URL = "http://localhost:8000/api/auth/jwt";

export const getClientBoard = () => {
    return axios.get(API_URL + "/user", { headers: authHeader() });
};

