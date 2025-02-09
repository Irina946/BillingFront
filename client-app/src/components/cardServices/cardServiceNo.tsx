import { useEffect, useState } from "react";
import styles from "./cardServices.module.css";
import { ButtonExit } from "components/ButtonExit";
import { ButtonBigViolet } from "components/ButtonBig";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonEmptyRed } from "components/ButtonEmptyRed";
import { ButtonEmptyViolet } from "components/ButtonEmptyViolet";
import { addService } from "../../request/requests";
import { AxiosError } from "axios";

interface CardServicesProps {
    title: string,
    price: number,
    id: number
}

export const CardServices = (props: CardServicesProps): JSX.Element => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenAlert, setIsOpenAlert] = useState(false);
    const [isOpenNoMoney, setIsOpenNoMoney] = useState(false)
    const [isOpenConnect, setIsOpenConnect] = useState(false)


    const phoneNumber = localStorage.getItem("number");


    const handleOutsideClick = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        if (event.target === event.currentTarget) {
            setIsOpenModal(false)
            setIsOpenNoMoney(false)
            setIsOpenConnect(false)
        }
    };

    const handleOpenAlert = (): void => {
        setIsOpenAlert(true);
    };

    const handleCloseAlert = (): void => {
        setIsOpenAlert(false);
    };

    const handleAddService = async () => {
        try {
            await addService(props.id, phoneNumber || '')
            setIsOpenAlert(false);
            setIsOpenModal(false);
            setIsOpenConnect(true);
            setTimeout(() => {
                setIsOpenConnect(false);
            }, 2000);
        } catch (error: AxiosError | any) {
            if (error.response?.data.detail === "На балансе недостаточно средств для подключения тарифа/услуги") {
                setIsOpenAlert(false)
                setIsOpenModal(false)
                setIsOpenNoMoney(true);
                setTimeout(() => {
                    setIsOpenNoMoney(false);
                }, 2000);
            }
        }
    }

    useEffect(() => {
        return () => {
            setIsOpenNoMoney(false);
            setIsOpenConnect(false);
        };
    }, []);

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    return (
        <div className={styles.cardService}>
            <div>
                <div className="font-medium text-black text-2xl">
                    {props.title}
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center py-[15px] border-gray border-t-[2px]">
                    <div className="text-black text-lg font-normal">
                        Абонентская плата
                    </div>
                    <div className="font-medium text-black text-2xl">
                        {props.price} ₽
                    </div>
                </div>
                <div className="text-right">
                    <ButtonEmptyViolet
                        title="Подключить"
                        onClick={handleOpenModal}
                    />
                </div>
            </div>
            {isOpenModal &&
                <div className={styles.modalBG} onClick={handleOutsideClick}>
                    <div className={`${styles.modal} h-[425px]`}>
                        <div className="absolute top-5 right-5">
                            <ButtonExit onClick={handleCloseModal} />
                        </div>
                        <div className="text-4xl font-bold">{props.title}</div>
                        <div>
                            <div className="text-2xl font-bold mb-[10px]">Описание</div>
                            <div className="text-lg font-thin text-blackGray">
                                {/* {props.description} */}
                            </div>
                        </div>

                        <div
                            className="
                                  mt-[15px]
                                  flex 
                                  justify-between 
                                  w-[480px] 
                                  py-[10px] 
                                  -ml-[20px] 
                                  px-[20px]   
                                  items-center 
                                  border-t-[3px] 
                                  border-gray"
                        >
                            <div className="text-xl font-light text-blackGray">
                                Абонентская плата
                            </div>
                            <div className="text-4xl font-bold text-black">{props.price} ₽</div>
                        </div>

                        <div className="self-center mt-[30px]">

                            <ButtonBigViolet
                                title={`Подключить за ${props.price} ₽`}
                                onClick={handleOpenAlert}
                            />

                        </div>
                    </div>
                    {isOpenAlert && (
                        <div className={styles.modalAlert}>
                            <div
                                className="text-xl 
                                  font-medium 
                                  text-black 
                                  pb-[30px] 
                                  text-center"
                            >
                                Вы уверны, что хотите подключить услугу?
                            </div>
                            <div className="flex justify-between">
                                <ButtonViolet
                                    size="small"
                                    title="Покдкючить"
                                    onClick={handleAddService}
                                />
                                <ButtonEmptyRed
                                    size="small"
                                    title="Отменить"
                                    onClick={handleCloseAlert}
                                />
                            </div>
                        </div>
                    )}
                </div>
            }
            {isOpenNoMoney && <div className={styles.modalBG} onClick={handleOutsideClick}>
                <div className="bg-white text-xl p-5 rounded-xl">
                    Недостаточно средств. Пополните баланс.
                </div>
            </div>
            }
            {isOpenConnect && <div className={styles.modalBG} onClick={handleOutsideClick}>
                <div className="bg-white text-xl p-5 rounded-xl">
                    Услуга подключена
                </div>
            </div>
            }
        </div>

    );
};