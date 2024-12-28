import { useState } from "react";
import { ButtonEmptyViolet } from "../button/buttonEmptyViolet";
import styles from "./card.module.css";
import { ModalService } from "../modal/modalService";

interface CardServicesProps {
    title: string,
    description: string,
    price: number,
}

export const CardServices = (props: CardServicesProps): JSX.Element => {

    const [isOpenModal, setIsOpenModal] = useState(false)

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
                <div className="font-normal text-blackGray text-lg">
                    {props.description}
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center py-[15px] border-gray border-t-[2px] px-[45px]">
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
                <ModalService
                    isConnect={false}
                    title={props.title}
                    description={props.description}
                    price={props.price}
                    onClose={handleCloseModal}
                />
            }
        </div>
    );
};