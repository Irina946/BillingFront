import { useState } from 'react'
import { ButtonEmptyViolet } from "components/ButtonEmptyViolet";
import styles from './card.module.css'
import { ButtonExit } from "components/ButtonExit"
import { ButtonBigViolet } from "components/ButtonBig"
import { addService, changeTariff } from '../../requests/requests';
import { AxiosError } from 'axios';
import { ButtonViolet } from "components/ButtonViolet";
import { INumberInfo } from '../../requests/interface';

interface CardTariffProps {
    title: string,
    description: string,
    price: number,
    minutes: number,
    sms: number,
    internet: number,
    service_id: number,
    phone: string,
    number_info: INumberInfo
}


export const CardTariffs = (props: CardTariffProps): JSX.Element => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenNoMoney, setIsOpenNoMoney] = useState(false)
    const [isOpenModalConnecting, setIsOpenModalConnecting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleCloseModalConnecting = () => {
        setIsOpenModalConnecting(false)
    }

    const handleOutsideClick = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        if (event.target === event.currentTarget) {
            setIsOpenNoMoney(false)
            setIsOpenModalConnecting(false)
        }
    };

    const handleOpenModal = () => {
        setIsOpenModal(true)

    }

    const handleClosesetNoMoney = (): void => {
        setIsOpenNoMoney(false)
    }

    const handleConnecting = async () => {
        setIsLoading(true)
        try {
            if (props.number_info.activated_tarif === null) {
                await addService(props.service_id, props.phone);
            } else {
                await changeTariff(props.service_id, props.phone);
            }
            setIsOpenModal(false);
            setIsOpenModalConnecting(true);
        }
        catch (error: AxiosError | any) {
            if (error.response?.data.detail === "На балансе недостаточно средств для подключения тарифа/услуги") {
                setIsOpenNoMoney(true);
            }
        } finally {
            setIsLoading(false)
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
                    Недостаточно средств. Необходимо пополнить баланс
                    <div className="flex justify-around mt-4">
                        <ButtonViolet title='ОК' onClick={handleClosesetNoMoney} />
                    </div>
                </div>
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
            {isLoading && <div className={styles.modalBG}>
                <div className='loader'></div>
            </div>}
        </div>
    )
}