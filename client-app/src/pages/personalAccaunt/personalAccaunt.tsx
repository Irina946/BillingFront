import { CardBalance } from "components/CardBalance";
import { InputModal } from "components/InputModal";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonExit } from "components/ButtonExit";
import { ModalTarif } from "components/ModalTarif";
import styles from "./personalAccaunt.module.css";
import { CardTarif } from "../../components/cardTarif/cardTarif";
import { CardService } from "../../components/cardServices/cardService";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getTarif, getUser, postPayment } from "../../request/requests";
import { IClientInfo, ITarifById } from "../../request/interface";
import {
  formatData,
  formatPhoneNumber,
} from "../../function/function";

interface IForm {
  number: string;
  cardNumber: string;
  amount: string;
}

export const PersonalAccaunt = (): JSX.Element => {
  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [isOpenTarif, setIsOpenTarif] = useState(false);
  const [clientTarif, setClientTarif] = useState<ITarifById | null>();

  const { register, handleSubmit } = useForm<IForm>();

  const [user, setUser] = useState<IClientInfo | null>(null);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.error("Error fetching tariffs:", error);
      }
    };

    fetchTariffs();
  }, []);

  if (clientTarif !== undefined) {
    console.log(clientTarif);
  }

  const handleSubmitFormPayment = async (formValue: IForm) => {
    const amount = formValue.amount.slice(0, -2)
    if (user !== null) {
      await postPayment(user?.number_info.id, Number(amount));
    }
    setUser(await getUser())
    setIsOpenPayment(false);
  };

  const handleOpenModalFormPayment = (): void => {
    setIsOpenPayment(true);
  };

  const handleOpenModalFormTarif = async (): Promise<void> => {

    if (user !== null) {
      setClientTarif(
        await getTarif(user?.number_info.activated_tarif.activated_id)
      );
    }
    setIsOpenTarif(true);
  };

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      setIsOpenPayment(false);
      setIsOpenTarif(false);
    }
  };

  return (
    <>
      {user === null ? (
        <div className={'flex justify-center items-center h-[90vh]'}>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="font-sans p-[5%] h-max flex justify-between items-center gap-[80px] overflow-hidden">
          <div>
            <div className="font-bold text-3xl mb-[40px]">
              {user.client_info.surname} {user.client_info.name}{" "}
              {user.client_info.patronymic}
            </div>
            <div className="font-bold text-[40px] mb-[60px]">
              {formatPhoneNumber(user?.client_info.number || "")}
            </div>

            <CardBalance
              user={user.client_info.role}
              balance={user.number_info.balance}
              payment={user.number_info.activated_tarif.service.price}
              date={formatData(
                user.number_info.activated_tarif.expiration_date
              )}
              onClick={handleOpenModalFormPayment}
            />
          </div>
          <div className={`${styles.tarif}`}>
            <button
              className={styles.buttonTarif}
              onClick={handleOpenModalFormTarif}
            >
              {user.number_info.activated_tarif.service.name}
            </button>
            <div className="flex justify-start items-center h-[210px] gap-[4%]">
              <CardTarif
                name="Минуты"
                remains={user.number_info.rests.minute}
                full={user.number_info.activated_tarif.service.minute}
              />

              <CardTarif
                name="Интернет"
                remains={user.number_info.rests.internet}
                full={user.number_info.activated_tarif.service.internet}
              />

              <CardTarif
                name="СМС"
                remains={user.number_info.rests.sms}
                full={user.number_info.activated_tarif.service.sms}
              />
            </div>

            <div className="font-bold text-3xl mb-[15px] pl-[15px]">Услуги</div>
            <div
              className={`
                                flex 
                                flex-wrap 
                                justify-start 
                                items-center 
                                overflow-scroll 
                                h-[220px] 
                                gap-[4%] 
                                ${styles.customScrollbar}
                            `}
            >
              {user.number_info.activated_additions.map((addition) => (
                <CardService
                  key={addition.activated_id}
                  id={addition.activated_id}
                  name={addition.service.name}
                  description={""}
                  price={addition.service.price}
                  number={user.client_info.number}
                />
              ))}
            </div>
          </div>
          {isOpenPayment && (
            <div className={styles.modalBG} onClick={handleOutsideClick}>
              <div className={styles.modal}>
                <div className="absolute top-5 right-5">
                  <ButtonExit onClick={() => setIsOpenPayment(false)} />
                </div>
                <div className="text-3xl">Пополнение баланса</div>
                <form onSubmit={handleSubmit(handleSubmitFormPayment)}>
                  <InputModal
                    title="Номер телефона"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    mask="+7 (999) 999-99-99"
                    valueInput={user?.client_info.number}
                    register={register}
                    id="number"
                    name="number"
                  />

                  <InputModal
                    title="Номер карты"
                    type="string"
                    placeholder="0000 0000 0000 0000"
                    mask="9999 9999 9999 9999"
                    register={register}
                    id="cardNumber"
                    name="cardNumber"
                  />

                  <InputModal
                    title="Сумма пополнения"
                    type="string"
                    placeholder="0 "
                    mask="999 ₽"
                    register={register}
                    id="amount"
                    name="amount"
                  />
                  <div className="flex justify-center items-center w-full">
                    <ButtonViolet title="Пополнить" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          )}
          {isOpenTarif && (
            <ModalTarif
              title={clientTarif?.name}
              description={clientTarif?.description}
              price={clientTarif?.price}
              minute={clientTarif?.minute}
              sms={clientTarif?.sms}
              internet={clientTarif?.internet}
              isConnect={true}
              onClose={() => setIsOpenTarif(false)}
            />
          )}
        </div>
      )}
    </>
  );
};
