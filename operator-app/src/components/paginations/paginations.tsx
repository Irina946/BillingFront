import { useState } from "react";
import { Row } from "../row/row";
import ArrowRight from "../../assets/arrowRight.svg?react";
import { ModalEdit } from "../modals/modalEdit";
import { useNavigate } from "react-router";
import { hashId } from "../../function/shifr/shifrId";
import { IClient } from "../../requests/interface";

export interface PaginationProps {
  listClient: IClient[];
}

interface StateProps {
  open: boolean;
  client: IClient;
}

export const Pagination: React.FC<PaginationProps> = ({ listClient }) => {
  const [isOpenEditing, setIsOpenEditing] = useState<StateProps>();
  const [client, setClient] = useState<IClient>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

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

  const handleOpenEditing = (client: IClient) => {
    setClient(client)
    setIsOpenEditing({ open: true, client });
  };

  const handleClickInfo = async (id: string, number: string) => {
    const idClient = await hashId(id);
    navigate(`/${idClient}`, { state: { idClient, number }  });
  };

  return (
    <div>
      {currentItems.map((client) => (
        <Row
          key={client.id}
          client={client}
          onClickInfo={() => handleClickInfo(`${client.id}`, client.number)}
          onClickEdit={() => handleOpenEditing(client)}
        />
      ))}
      <div className="flex justify-center mt-4 items-center absolute bottom-[15px] left-[42%]">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2"
        >
          <ArrowRight
            className={`rotate-180 ${
              currentPage === 1 ? "opacity-50 stroke-none" : ""
            }`}
          />
        </button>
        <span className="mx-2 font-sans font-bold text-3xl text-blackGray leading-[50px] align-middle">
          {" "}
          {currentPage} из {totalPages}{" "}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2"
        >
          <ArrowRight
            className={`${
              currentPage === totalPages ? "opacity-50 stroke-none" : ""
            }`}
          />
        </button>
      </div>
      {isOpenEditing && (client !== undefined) && (
        <ModalEdit
          client={client}
          onClose={() => setIsOpenEditing(undefined)}
        />
      )}
    </div>
  );
};
