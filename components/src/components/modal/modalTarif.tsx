import { useState } from 'react'
import { ButtonBigViolet } from '../button/buttonBig'
import { ButtonExit } from '../button/buttonExit'
import styles from './modal.module.css'
import { ButtonViolet } from '../button/buttonViolet'
import { ButtonEmptyRed } from '../button/buttonEmptyRed'

interface ModalTarifProps {
    title: string,
    description: string,
    price: number,
    minute: number,
    sms: number,
    internet: number,
    isConnect: boolean,
    onClose: () => void
}

export const ModalTarif = (props: ModalTarifProps): JSX.Element => {
    const size = props.isConnect ? "h-[530px]" : "h-[640px]"
    const [isOpenAlert, setIsOpenAlert] = useState(false);

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) {
            props.onClose()
        }
    }

    const handleOpenAlert = (): void => {
        setIsOpenAlert(true)
    }

    const handleCloseAlert = (): void => {
        setIsOpenAlert(false)
    }

    return (
        <div className={styles.modalBG} onClick={handleOutsideClick}>
            <div className={`${styles.modal} ${size}`}>
                <div className="absolute top-5 right-5">
                    <ButtonExit onClick={props.onClose} />
                </div>
                <div className="text-4xl font-bold">
                    {props.title}
                </div>
                <div className='text-lg font-thin text-blackGray'>
                    {props.description}
                </div>
                <div className={styles.modalInner}>
                    Абонентска плата
                    <p className="text-6xl font-bold text-black">{props.price} ₽
                        <span className="text-4xl font-light"> в месяц</span></p>
                </div>
                <div className='text-4xl font-bold'>В тариф входит</div>
                <div className="text-3xl text-blackGray font-medium">{props.minute} минут</div>
                <div className="text-3xl text-blackGray font-medium">{props.internet} ГБ</div>
                <div className="text-3xl text-blackGray font-medium">{props.sms} СМС</div>
                {!props.isConnect &&
                    <div className='self-center mt-[30px]'>
                        <ButtonBigViolet
                            title={`Подключить за ${props.price} ₽`}
                            onClick={handleOpenAlert}
                        />
                    </div>
                }
            </div>
            {isOpenAlert &&
                <div className={styles.modalAlert}>
                    <div className='text-xl font-medium text-black pb-[30px] text-center'>Вы уверны, что хотите сменить тариф?</div>
                    <div className="flex justify-between">
                        <ButtonViolet
                            size="small"
                            title="Подключить"
                            onClick={props.onClose}
                        />
                        <ButtonEmptyRed
                            size="small"
                            title="Отменить"
                            onClick={handleCloseAlert}
                        />
                    </div>
                </div>
            }
        </div>
    )
}