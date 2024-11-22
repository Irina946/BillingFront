import { useState } from "react"
import { ButtonBigViolet } from "../button/buttonBig"
import { ButtonBigRed } from "../button/buttonBigRed"
import { ButtonExit } from "../button/buttonExit"
import styles from "./modal.module.css"
import { ButtonViolet } from "../button/buttonViolet"
import { ButtonEmptyRed } from "../button/buttonEmptyRed"

interface ModalServiceProps {
    title: string,
    description: string,
    isConnect: boolean,
    dateConnect?: string,
    date?: string,
    price: number,
    writeOffPeriod: string,
    onClose: () => void
}

export const ModalService = (props: ModalServiceProps): JSX.Element => {
    const size = props.isConnect ? "h-[500px]" : "h-[425px]"

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
                <div className="text-4xl font-bold">{props.title}</div>
                {props.isConnect &&
                    <>
                        <div className="text-xl font-medium text-blackGray mb-[15px]">
                            Услуга подключена {props.dateConnect}
                        </div>
                        <div className={styles.modalInner}>
                            Абонентска плата за {props.writeOffPeriod}
                            <p className="text-4xl font-bold text-black mt-[10px]">{props.price} ₽
                                <span className="text-xl font-light"> спишется {props.date}</span></p>
                        </div>
                    </>}
                <div>
                    <div className="text-2xl font-bold mb-[10px]">Описание</div>
                    <div className='text-lg font-thin text-blackGray'>{props.description}</div>
                </div>
                {!props.isConnect &&
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
                        border-gray">
                        <div className="text-xl font-light text-blackGray">Абонентская плата</div>
                        <div className="text-4xl font-bold text-black">{props.price} ₽</div>
                    </div>}
                <div className='self-center mt-[30px]'>
                    {props.isConnect ?
                        <ButtonBigRed
                            title="Отключить"
                            onClick={handleOpenAlert}
                        /> :
                        <ButtonBigViolet
                            title={`Подключить за ${props.price} ₽`}
                            onClick={handleOpenAlert}
                        />
                    }
                </div>
            </div>
            {isOpenAlert && props.isConnect &&
                <div className={styles.modalAlert}>
                    <div 
                    className='
                        text-xl 
                        font-medium 
                        text-black 
                        pb-[30px] 
                        text-center'>
                            Вы уверны, что хотите отключить услугу?</div>
                    <div className="flex justify-between">
                        <ButtonViolet
                            size="small"
                            title="отключить"
                            onClick={props.onClose}
                        />
                        <ButtonEmptyRed
                            size="small"
                            title="Отменить"
                            onClick={handleCloseAlert}
                        />
                    </div>
                </div> }
            {isOpenAlert && !props.isConnect &&
                <div className={styles.modalAlert}>
                    <div 
                    className='text-xl 
                        font-medium 
                        text-black 
                        pb-[30px] 
                        text-center'>
                            Вы уверны, что хотите подключить услугу?
                            </div>
                    <div className="flex justify-between">
                        <ButtonViolet
                            size="small"
                            title="Покдкючить"
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