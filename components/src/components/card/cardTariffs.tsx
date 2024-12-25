import { useState } from 'react'
import { ButtonEmptyViolet } from '../button/buttonEmptyViolet'
import styles from './card.module.css'
import { ButtonExit } from '../button/buttonExit'
import { ButtonBigViolet } from '../button/buttonBig'

interface CardTariffProps {
    title: string,
    description: string,
    price: number,
    minutes: number,
    sms: number,
    internet: number
}

export const CardTariffs = (props: CardTariffProps): JSX.Element => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => {
        setIsOpenModal(true)
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
                            onClick={() => setIsOpenModal(false)}
                        />
                        </div>

                    </div>


                </div>}
        </div>
    )
}