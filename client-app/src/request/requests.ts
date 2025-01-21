import axios from "axios";
import {
  IAddition,
  IClientInfo,
  IHistory,
  IServices,
  IServicesCategory,
  ITarifById,
  ITariff,
} from "./interface";

const API_URL = "http://158.160.67.235:8000/api";

export const userAuth = localStorage.getItem("user");

export const getUser = async (): Promise<IClientInfo> => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: "Bearer " + userAuth?.slice(1, userAuth.length - 1),
    },
  });
  localStorage.setItem("user_id", response.data.client_info.id.toString());
  localStorage.setItem("number_id", response.data.number_info.id.toString());
  localStorage.setItem("number", response.data.client_info.number);
  return response.data;
};

export const getTarifs = async (): Promise<ITariff[]> => {
  const response = await axios.get(API_URL + "/tarif");
  return response.data;
};

export const getServicesCategoryList = async (): Promise<
  IServicesCategory[]
> => {
  const response = await axios.get(API_URL + "/category/");
  return response.data;
};

export const getServicesList = async (id: number): Promise<IServices[]> => {
  const response = await axios.get(API_URL + `/addition/category`, {
    params: { category_id: id },
  });
  return response.data;
};

const endDate = new Date();
const startDate = new Date();
startDate.setFullYear(endDate.getFullYear() - 1);

export const getHistory = async (id_number: number): Promise<IHistory[]> => {
  const response = await axios.post(API_URL + "/transaction/history", {
    number_id: id_number,
    date_start: startDate,
    date_end: endDate,
  });
  return response.data;
};

export const getTarif = async (id: number): Promise<ITarifById> => {
  const response = await axios.get(`${API_URL}/tarif/${id}`);
  return response.data;
};

export const getAddition = async (id: number): Promise<IAddition> => {
  const response = await axios.get(`${API_URL}/addition/${id}`);
  return response.data;
};

export const postPayment = async (id_number: number, amount: number) => {
  await axios.post(`${API_URL}/payment`, {
    amount: amount,
    date: endDate,
    number_id: id_number,
  });
};

export const deleteService = async (id: number, phone_number: string) => {
  await axios.delete(`${API_URL}/activated`, {
    data: {
      activated_id: id,
      phone_number: phone_number,
    },
  });
};

export const addService = async (id: number, phone_number: string) => {
  await axios.post(`${API_URL}/activated`, {
    service_id: id,
    phone_number: phone_number,
  });
};

export const changeTariff = async (id: number, phone_number: string) => {
  await axios.post(`${API_URL}/activated/change`, {
    tarif_id: id,
    phone_number: phone_number,
  });
};


