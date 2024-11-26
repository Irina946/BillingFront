import { useState } from "react";
import { Row } from "../row/row";
import ArrowRight from "../../assets/arrowRight.svg?react";
import { ModalEdit } from "../modals/modalEdit";
import { useNavigate } from "react-router";
import { hashId } from "../../function/shifr/shifrId";

export interface ClientProps {
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
    const nanigate = useNavigate();

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

    const handleClickInfo = async (id: string) => {
        const idClient = await hashId(id);
        nanigate(`/${idClient}`, {state: {idClient}});
    }

    return (
        <div>
            {currentItems.map(client => (
                <Row
                    key={client.personalAccount}
                    {...client}
                    onClickInfo={ () => handleClickInfo(`${client.id}`)}
                    onClickEdit={() => handleOpenEditing(client)} />
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
            {isOpenEditing && <ModalEdit client={isOpenEditing.client} onClose={() => setIsOpenEditing(undefined)} />}
        </div>
    );
};

