import { useState } from "react";
import { Row } from "../row/row";
import { InputModal } from "components/InputModal";
import { ButtonEmptyRed } from "components/ButtonEmptyRed";
import { ButtonViolet } from "components/ButtonViolet";
import ArrowRight from "../../assets/arrowRight.svg?react";
import styles from "./paginations.module.css"

interface ClientProps {
    name: string;
    number: string;
    tarif: string;
    balance: string;
    personalAccount: string;
    id: number;
}

interface ListClientProps {
    listClient: ClientProps[];
}

interface StateProps {
    open: boolean,
    client: ClientProps
}

export const Pagination: React.FC<ListClientProps> = ({ listClient }) => {
    const [isOpenEditing, setIsOpenEditing] = useState<StateProps>();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listClient.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(listClient.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleOpenEditing = (client: ClientProps) => setIsOpenEditing({ open: true, client });


    // const handleOutsideCloseEditing = (event: React.MouseEvent<HTMLDivElement>): void => {
    //     if (event.target === event.currentTarget) {
    //         setIsOpenEditing(false);
    //     }
    // }

    return (
        <div>
            {currentItems.map(client => (
                <Row key={client.personalAccount} {...client} onClickInfo={() => handleOpenEditing(client)} onClickEdit={() => handleOpenEditing(client)} />
            ))}
            <div className="flex justify-center mt-4 items-center absolute bottom-[15px] left-[42%]">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="mx-2"
                >
                    <ArrowRight className={`rotate-180 ${currentPage === 1 ? 'opacity-50 stroke-none' : ''}`} />
                </button>
                <span className="mx-2 font-sans font-bold text-3xl text-blackGray leading-[50px] align-middle"> {currentPage} из {totalPages} </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="mx-2"
                >
                    <ArrowRight className={`${currentPage === totalPages ? 'opacity-50 stroke-none' : ''}`} />
                </button>
            </div>
            {isOpenEditing &&
                <div
                    // onClick={handleOutsideCloseEditing}
                    className={styles.modalBG}>
                    <div className={styles.modal}>
                        Редактирование пользователя
                        <form>
                            <InputModal
                                type="text"
                                placeholder={isOpenEditing.client.name}
                                id="fullName"
                                title="ФИО клиента"
                            />
                            <InputModal
                                type="tel"
                                placeholder={isOpenEditing.client.number}
                                id="number"
                                title="Номер телефона"
                            />
                            <InputModal
                                type="text"
                                placeholder={isOpenEditing.client.tarif}
                                id="tariff"
                                title="Тариф"
                            />
                            <InputModal
                                type="text"
                                placeholder={isOpenEditing.client.personalAccount}
                                id="personalAccount"
                                title="Лицевой счет"
                            />




                        </form>
                        <div className="flex justify-around px-[15px] w-full">
                            <ButtonEmptyRed title="Удалить" />
                            <ButtonViolet title="Сохранить" />
                        </div>
                    </div>
                </div>}
        </div>
    );
};

