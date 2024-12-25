import { CardBalance } from "components/CardBalance";
import { InputModal } from "components/InputModal";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonExit } from "components/ButtonExit";
import { ModalTarif } from "components/ModalTarif";
import styles from "./personalAccaunt.module.css"
import { CardTarif } from "../../components/cardTarif/cardTarif";
import { CardService } from "../../components/cardServices/cardService";
import React, { useEffect, useState } from "react";
import { get, useForm } from "react-hook-form";
import { getUser } from "../../request/requests";
import { IClientInfo } from "../../request/interface";

interface IForm {
    number: string
    cardNumber: string
    price: string
}



export const PersonalAccaunt = (): JSX.Element => {
    const [isOpenPayment, setIsOpenPayment] = useState(false);
    const [isOpenTarif, setIsOpenTarif] = useState(false);

    const { register, handleSubmit } = useForm<IForm>()

    const formatPhoneNumber = (number: string) => {
        return `+7 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8, 10)}`;

    };

    const formatData = (date: string) => {
        return `${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`;
    };

    const [user, setUser] = useState<IClientInfo | null>(null);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                setError("Ошибка при получении тарифов");
                console.error("Error fetching tariffs:", error);
            }
        };

        fetchTariffs();
    }, []);

    if (user !== null) {
        console.log(user.number_info)
    }



    const handleSubmitFormPayment = (formValue: IForm) => {
        console.log(formValue);
        setIsOpenPayment(false);
    }

    const handleOpenModalFormPayment = (): void => {
        setIsOpenPayment(true);
    }

    const handleOpenModalFormTarif = (): void => {
        setIsOpenTarif(true);
    }

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) {
            setIsOpenPayment(false);
            setIsOpenTarif(false);
        }
    }


    return (
        <>
            {user === null ? (
                <div>Загрузка...</div>
            ) : (
                <div className="font-sans p-[5%] h-max flex justify-between items-center gap-[80px] overflow-hidden">
                    <div>
                        <div className="font-bold text-3xl mb-[40px]">
                            {user.client_info.surname} {user.client_info.name} {user.client_info.patronymic}
                        </div>
                        <div className="font-bold text-[40px] mb-[60px]">
                            {formatPhoneNumber(user?.client_info.number || "")}
                        </div>

                        <CardBalance
                            user={user.client_info.role}
                            balance={user.number_info.balance}
                            payment={user.number_info.activated_tarif.service.price}
                            date={formatData(user.number_info.activated_tarif.expiration_date)}
                            onClick={handleOpenModalFormPayment}
                        />
                    </div>
                    <div
                        className={`${styles.tarif}`}
                    >
                        <button className={styles.buttonTarif} onClick={handleOpenModalFormTarif}>
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

                        <div className="font-bold text-3xl mb-[15px] pl-[15px]">
                            Услуги
                        </div>
                        <div className=
                            {`
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
                                    key={addition.service.id}
                                    name={addition.service.name}
                                    description={''}
                                    price={addition.service.price}
                                />
                            ))}


                        </div>
                    </div>
                    {isOpenPayment &&
                        <div className={styles.modalBG}
                            onClick={handleOutsideClick}>
                            <div
                                className={styles.modal}>
                                <div className="absolute top-5 right-5">
                                    <ButtonExit onClick={() => setIsOpenPayment(false)} />
                                </div>
                                <div className="text-3xl">
                                    Пополнение баланса
                                </div>
                                <form onSubmit={handleSubmit(handleSubmitFormPayment)}>
                                    <InputModal
                                        title="Номер телефона"
                                        type="tel"
                                        placeholder="+7 (___) ___-__-__"
                                        register={register}
                                        id="number"
                                        name="number"
                                    />

                                    <InputModal
                                        title="Номер карты"
                                        type="number"
                                        placeholder="0000 0000 0000 0000"
                                        register={register}
                                        id="cardNumber"
                                        name="cardNumber"
                                    />

                                    <InputModal
                                        title="Сумма пополнения"
                                        type="number"
                                        placeholder="0 ₽"
                                        register={register}
                                        id="price"
                                        name="price"
                                    />
                                    <div className="flex justify-center items-center w-full">
                                        <ButtonViolet
                                            title="Пополнить"
                                            type="submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                    {isOpenTarif && <ModalTarif
                        title="МегаТариф+"
                        description="Идеальное решение для тех, кто ценит безграничные возможности общения и развлечений!"
                        price={1000}
                        minute={300}
                        sms={300}
                        internet={300}
                        isConnect={true}
                        onClose={() => setIsOpenTarif(false)} />
                    }
                </div>
            )}
        </>
    )

}