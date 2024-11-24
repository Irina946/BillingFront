import { useState } from "react";
import { ModalService } from "components/ModalService";
import styles from "./cardServices.module.css";

interface CardServiceProps {
    name: string,
    description: string,
    price: number
}

export const CardService = (props: CardServiceProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = (): void => setIsOpen(true);

    const handleCloseModal = (): void => setIsOpen(false);

    return (<>
        <button
            className={styles.container}
            onClick={handleOpenModal}
        >
            <div className="text-xl">
                {props.name}
            </div>
            <div className="text-sm">
                {props.description}
            </div>
            <div className="text-2xl">
                {`${props.price} ₽`}
            </div>
        </button>
        {isOpen && <ModalService
            onClose={handleCloseModal}
            title={props.name}
            description={props.description}
            price={props.price}
            isConnect={true}
            dateConnect={"01.01.2023"}
            date={"01.12.2024"}
            writeOffPeriod={"30 дней"}

        />}
    </>
    );
}