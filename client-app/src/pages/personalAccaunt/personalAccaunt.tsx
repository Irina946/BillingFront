import { CardBalance } from "components/CardBalance";
import { InputModal } from "components/InputModal";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonExit } from "components/ButtonExit";
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
                <button className="font-bold text-3xl mb-[20px] pl-[15px]" onClick={handleOpenModalFormTarif}>
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
                        className={`${styles.modal} items-center`}>
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
            {isOpenTarif && <div className={styles.modalBG} onClick={handleOutsideClick}>
                <div className={`${styles.modal} items-start`}>
                    <div className="absolute top-5 right-5">
                        <ButtonExit onClick={() => setIsOpenTarif(false)} />
                    </div>
                    <div className="text-3xl pt-[15px]">
                        Мегатариф+
                    </div>
                    <div className="text-lg text-blackGray">
                        Идеальное решение для тех, кто ценит безграничные возможности общения и развлечений!
                    </div>
                    <div className="place-self-start text-gray font-medium text-lg border-y-[3px] border-gray w-[calc(30vw-20px)] py-[15px] -ml-[20px] px-[20px]">
                        Абонентская плата
                        <p className="pt-[15px] text-4xl font-bold text-black">200 ₽ <span className="text-3xl font-light">в месяц</span></p>
                    </div>
                    <div className="text-3xl font-bold">
                        В тариф входит
                    </div>
                    <div className="text-3xl text-blackGray font-medium">300 минут</div>
                    <div className="text-3xl text-blackGray font-medium">3000 ГБ</div>
                    <div className="text-3xl text-blackGray font-medium pb-[15px]">100 СМС</div>
                </div>
            </div>}
        </div>
    )
}