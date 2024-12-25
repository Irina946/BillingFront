import axios from "axios";
import { IClientInfo, IHistory, IServices, IServicesCategory, ITariff } from "./interface";

const API_URL = "http://51.250.8.218:8000/api";

export const userAuth = localStorage.getItem("user");


export const getUser = async (): Promise<IClientInfo> => {
    const response = await axios
        .get(API_URL, {
            headers: {
                Authorization: "Bearer " + userAuth?.slice(1, userAuth.length - 1)
            }
        })
    localStorage.setItem("user_id", response.data.client_info.id.toString());
    localStorage.setItem("number_id", response.data.number_info.id.toString());
    return response.data;
}

export const getTarifs = async (): Promise<ITariff[]> => {
    const response = await axios
        .get(API_URL + "/tarif");
    return response.data;
};

export const getServicesCategoryList = async (): Promise<IServicesCategory[]> => {
    const response = await axios
        .get(API_URL + "/category/");
    return response.data;
};

export const getServicesList = async (id: number): Promise<IServices[]> => {
    const response = await axios
        .get(API_URL + `/addition/category`, { params: { category_id: id } });
    return response.data;
};

const endDate = new Date()
const startDate = new Date()
startDate.setMonth(endDate.getMonth() - 1)


export const getHistory = async (id_number: number): Promise<IHistory[]> => {
    const response = await axios
        .post(API_URL + "/payment/history", {
            number_id: id_number,
            date_start: startDate,
            date_end: endDate
        });
    return response.data;

};