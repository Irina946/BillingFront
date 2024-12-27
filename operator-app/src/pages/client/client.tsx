import { ButtonEmptyViolet } from "components/ButtonEmptyViolet";
import { CardBalance } from "components/CardBalance";
import { ButtonBigViolet } from "components/ButtonBig";
import styles from "./client.module.css";
import { RowHistory } from "../../components/row/rowHistory";
import { Card } from "../../components/card/card";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ClientInfo, IHistory } from "../../requests/interface";
import { getClient, getHistory } from "../../requests/requests";
import { formatPhoneNumber } from "../../components/row/row";

export const formatDate = (date: string) => {
  return `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`;
};

export const ClientPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [client, setClient] = useState<ClientInfo>();
  const [history, setHistory] = useState<IHistory[]>([]);

  const numberClient = location.state?.number;
  useEffect(() => {
    const getThisClient = async () => {
      try {
        const data = await getClient(numberClient);
        const dataHistory = await getHistory(data.number_info.id)
        setClient(data);
        setHistory(dataHistory)
      } catch (error) {
        console.error(error);
      }
    };

    if (numberClient) {
        getThisClient();
      }
  }, [numberClient]);



  return (
    <div className="m-[45px]">
      <div className="flex justify-between items-center mb-[60px]">
        <ButtonEmptyViolet title="Назад" onClick={() => navigate(-1)} />
        <div className="flex gap-[30px] text-4xl font-bold relative">
          <div>
            {client?.client_info.surname} {client?.client_info.name}{" "}
            {client?.client_info.patronymic}
          </div>
          <div>
            {client ? formatPhoneNumber(client?.client_info.number) : ""}
          </div>
          <p className="absolute text-xl font-normal text-blackGray -bottom-[30px] right-0">
            Лицевой счет: 12345-678-9-1011-1213141
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="grid gap-[30px]">
          <CardBalance
            user="operator"
            balance={client?.number_info.balance}
            payment={client?.number_info.activated_tarif.service.price}
            date={
              client
                ? formatDate(
                    client?.number_info.activated_tarif.expiration_date
                  )
                : ""
            }
          />
          {client ? (
            <Card
              tariff={{
                name: client.number_info.activated_tarif.service.name,
                price: client.number_info.activated_tarif.service.price,
                minutes: client.number_info.activated_tarif.service.minute,
                sms: client.number_info.activated_tarif.service.sms,
                internet: client.number_info.activated_tarif.service.internet,
                id: client.number_info.activated_tarif.service.id
              }}
              services={client.number_info.activated_additions}
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.tableBg}>
          <div className={styles.tableHeader}>
            <div>Наименование</div>
            <div className="text-center">Дата</div>
            <div className="text-center">Сумма</div>
          </div>
          <div className="pr-[15px] py-[15px]">
            <div className={styles.customScrollbar}>
              {history.slice().reverse().map((row, idx) => (
                <RowHistory key={idx} {...row} />
              ))}
            </div>
            <div className="flex justify-center items-center pt-[15px] border-t-[1px] border-blackGray h-[80px]">
              <ButtonBigViolet title="сформировать отчет" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
