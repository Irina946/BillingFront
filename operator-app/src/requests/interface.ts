export interface IClient {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  number: string;
  tarif_name: string;
  balance: number;
}

export interface IRegisterClient {
  name: string;
  surname: string;
  patronymic: string;
  id: number;
  login_number: string;
  role: string;
}

export interface IClientInfo {
  name: string;
  surname: string;
  patronymic: string;
  number: string;
  contract_number: string;
  passport: string;
  password: string;
}

export interface IUser {
  name: string;
  surname: string;
  patronymic: string;
  number: string;
  role: string;
  token: string;
  id: number;
}

export interface INumberInfo {
  id: number;
  clientId: number;
  balance: number;
  rests: {
    internet: number;
    minute: number;
    sms: number;
  };
  activated_tarif: {
    activated_id: number;
    activated_date: string;
    expiration_date: string;
    service: {
      name: string;
      internet: number;
      minute: number;
      sms: number;
      price: number;
      is_unlimited_internet: boolean;
      id: number;
    };
  };
  activated_additions: [
    {
      activated_id: number;
      activated_date: string;
      expiration_date: string;
      service: {
        name: string;
        price: number;
        amount: number;
        is_unlimited: boolean;
        id: number;
      };
    }
  ];
}

export interface ClientInfo {
  client_info: IUser;
  number_info: INumberInfo;
}

export interface IHistory {
  amount: number;
  date: string;
  name: string;
  price: number;
}

export interface ITariff {
  service_id: number;
  internet: number;
  is_unlimited_internet: boolean;
  minute: number;
  sms: number;
  name: string;
  price: number;
}

export interface IServicesCategory {
  name: string;
  id: number;
  count: number;
  ru_name: string
}

export interface IServices {
  name: string;
  price: number;
  service_id: number;
  amount: number;
  is_unlimited: boolean;
}
