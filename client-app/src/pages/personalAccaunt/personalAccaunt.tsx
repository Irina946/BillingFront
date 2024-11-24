import { CardBalance } from "components/CardBalance";
import { InputModal } from "components/InputModal";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonExit } from "components/ButtonExit";
import { ModalTarif } from "components/ModalTarif";
import styles from "./personalAccaunt.module.css"
import { CardTarif } from "../../components/cardTarif/cardTarif";
import { CardService } from "../../components/cardServices/cardService";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
        return `+7 ${number.slice(1, 4)} ${number.slice(4, 7)} ${number.slice(7, 9)} ${number.slice(9, 11)}`;

    };

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
        <div className="font-sans p-[5%] h-max flex justify-between items-center gap-[80px] overflow-hidden">
            <div>
                <div className="font-bold text-3xl mb-[40px]">
                    Иванов Иван
                </div>
                <div className="font-bold text-[40px] mb-[60px]">
                    {formatPhoneNumber('79009009090')}
                </div>
                <CardBalance
                    user="client"
                    balance={10000}
                    payment={1000}
                    date="01.01.2023"
                    onClick={handleOpenModalFormPayment}
                />
            </div>
            <div
                className={`${styles.tarif}`}
            >
                <button className={styles.buttonTarif} onClick={handleOpenModalFormTarif}>
                    МегаТариф+
                </button>
                <div className="flex justify-start items-center h-[210px] gap-[4%]">
                    <CardTarif
                        name="Минуты"
                        remains={100}
                        full={300}
                    />

                    <CardTarif
                        name="Интернет"
                        remains={200}
                        full={300}
                    />

                    <CardTarif
                        name="СМС"
                        remains={300}
                        full={300}
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
                `}>
                    <CardService
                        name="Мобильная связь"
                        description="300 минут дополнительно "
                        price={100}
                    />
                    <CardService
                        name="Мобильная связь"
                        description="300 минут дополнительно "
                        price={100}
                    />
                    <CardService
                        name="Мобильная связь"
                        description="300 минут дополнительно "
                        price={100}
                    />


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
    )
}