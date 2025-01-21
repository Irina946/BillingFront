import axios from "axios";
import { ClientInfo, IClient, IClientInfo, IHistory, IRegisterClient, IServices, IServicesCategory, ITariff } from "./interface";

const API_URL = "http://158.160.67.235:8000/api";

export const getClients = async (): Promise<IClient[]> => {
  const response = await axios.get(`${API_URL}/operator/clients?page=1&size=50`,
  );
  return response.data;
};

export const postRegisterClient = async (
  clientInfo: IClientInfo
): Promise<IRegisterClient> => {
  const response = await axios.post(`${API_URL}/auth/jwt/register`, {
    name: clientInfo.name,
    surname: clientInfo.surname,
    patronymic: clientInfo.patronymic,
    number: clientInfo.number,
    contract_number: clientInfo.contract_number,
    passport: clientInfo.passport,
    password: clientInfo.password,
  });
  return response.data;
};

export const getClient = async (number: string): Promise<ClientInfo> => {
  const response = await axios.get(
    `${API_URL}/operator/client?number=${number}`,
    {}
  );
  return response.data;
};

const endDate = new Date();
const startDate = new Date();
startDate.setMonth(endDate.getMonth() - 1);

export const getHistory = async (id_number: number): Promise<IHistory[]> => {
  const response = await axios.post(API_URL + "/transaction/history", {
    number_id: id_number,
    date_start: startDate,
    date_end: endDate,
  });
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

