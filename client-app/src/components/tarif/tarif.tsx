import { useState } from 'react'
import { ButtonEmptyViolet } from "components/ButtonEmptyViolet";
import styles from './card.module.css'
import { ButtonExit } from "components/ButtonExit"
import { ButtonBigViolet } from "components/ButtonBig"
import { addService, changeTariff } from '../../request/requests';
import { AxiosError } from 'axios';
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonEmptyRed } from "components/ButtonEmptyRed";
import { InputModal } from "components/InputModal";
import { useForm } from "react-hook-form";
import { postPayment } from "../../request/requests";

interface CardTariffProps {
    title: string,
    description: string,
    price: number,
    minutes: number,
    sms: number,
    internet: number,
    service_id: number,
    phone: string
}

interface IForm {
    number: string;
    cardNumber: string;
    amount: string;
}

export const CardTariffs = (props: CardTariffProps): JSX.Element => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenNoMoney, setIsOpenNoMoney] = useState(false)
    const [isOpenModalConnecting, setIsOpenModalConnecting] = useState(false)

    const [isOpenPayment, setIsOpenPayment] = useState(false);

    const { register, handleSubmit } = useForm<IForm>();

    const numberId = Number(localStorage.getItem("number_id"));
    const number = localStorage.getItem("number");

    const handleOpenModalFormPayment = (): void => {
        setIsOpenPayment(true);
        setIsOpenNoMoney(false)
    };

    const handleCloseModalConnecting = () => {
        setIsOpenModalConnecting(false)
    }

    const handleOutsideClick = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        if (event.target === event.currentTarget) {
            setIsOpenPayment(false);
            setIsOpenNoMoney(false)
            setIsOpenModalConnecting(false)
        }
    };

    const handleSubmitFormPayment = async (formValue: IForm) => {
        const amount = formValue.amount.slice(0, -2)
        await postPayment(numberId, Number(amount));
        setIsOpenPayment(false);
    };

    const handleOpenModal = () => {
        setIsOpenModal(true)

    }

    const handleClosesetNoMoney = (): void => {
        setIsOpenNoMoney(false)
    }

    const handleConnecting = async () => {
        try {
            if (localStorage.getItem('tarif') === '') {
                await addService(props.service_id, props.phone);
            } else {
                await changeTariff(props.service_id, props.phone);
            }
            localStorage.removeItem('tarif');
            localStorage.setItem('tarif', props.service_id.toString());
            setIsOpenModal(false);
            setIsOpenModalConnecting(true);
        }
        catch (error: AxiosError | any) {
            if (error.response?.data.detail === "На балансе недостаточно средств для подключения тарифа/услуги") {
                setIsOpenNoMoney(true);
            }
        }
    }

    return (
        <div className={styles.cardTarif}>
            <div className='text-4xl font-bold'>
                {props.title}
            </div>
            <div className='text-sm font-bold text-gray'>
                {props.description}
            </div>
            <div className="text-2xl text-blackGray font-medium">{props.minutes} минут</div>
            <div className="text-2xl text-blackGray font-medium">{props.internet} ГБ</div>
            <div className="text-2xl text-blackGray font-medium">{props.sms} СМС</div>
            <div className='flex justify-between w-full items-center'>
                <div className='text-2xl font-bold'>{props.price} <span className="text-blackGray font-medium text-lg">руб/мес</span></div>
                <ButtonEmptyViolet
                    title='Подключить'
                    onClick={handleOpenModal}
                />
            </div>
            {isOpenModal &&
                <div className={styles.modalBG}
                    onClick={() => setIsOpenModal(false)}>
                    <div className={styles.modal}>
                        <div className="absolute top-5 right-5">
                            <ButtonExit onClick={() => setIsOpenModal(false)} />
                        </div>
                        <div className='text-4xl font-bold'>
                            {props.title}
                        </div>
                        <div className='text-xl font-medium text-blackGray'>
                            {props.description}
                        </div>
                        <div className={styles.modalInner}>
                            Абонентская плата
                            <p className="pt-[15px] text-6xl font-bold text-black">{props.price} ₽ <span className="text-4xl font-medium">в месяц</span></p>
                        </div>
                        <div className='text-4xl font-bold'>
                            В тариф входит
                        </div>
                        <div className="text-3xl text-blackGray font-medium">{props.minutes} минут</div>
                        <div className="text-3xl text-blackGray font-medium">{props.internet} ГБ</div>
                        <div className="text-3xl text-blackGray font-medium">{props.sms} СМС</div>
                        <div className='self-center'>
                            <ButtonBigViolet
                                title={`Подключить за ${props.price} ₽`}
                                onClick={handleConnecting}
                            />
                        </div>

                    </div>

                </div>}
            {isOpenNoMoney && <div className={styles.modalBG} onClick={handleOutsideClick}>
                <div className="bg-white text-xl p-5 rounded-xl">
                    Недостаточно средств. Хотите пополнить баланс?
                    <div className="flex justify-around mt-4">
                        <ButtonViolet title='Пополнить' onClick={handleOpenModalFormPayment} />
                        <ButtonEmptyRed title='Отмена' onClick={handleClosesetNoMoney} />
                    </div>
                </div>
                {isOpenPayment && (
                    <div className={styles.modalBG} onClick={handleOutsideClick}>
                        <div className="w-[475px]
                                    h-[500px]
                                    bg-white
                                    flex
                                    flex-col 
                                    justify-between 
                                    items-start 
                                    py-[45px]
                                    px-[30px] 
                                    font-bold
                                    relative">
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
                                    valueInput={number}
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
            </div>}
            {isOpenModalConnecting &&
                <div className={styles.modalBG} onClick={handleOutsideClick}>
                    <div className='p-[25px] bg-white rounded-md absolute top-[50%] right-[33%] w-[400px] text-center text-3xl'>
                        Тариф подключен
                        <div className='mt-4'>
                            <ButtonViolet title="ОК" onClick={handleCloseModalConnecting} />
                        </div>
                    </div>
                </div>}
        </div>
    )
}