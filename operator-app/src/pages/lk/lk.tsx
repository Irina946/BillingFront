import { ButtonBigViolet } from "components/ButtonBig";
import styles from "./lk.module.css";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/paginations/paginations";
import { ModalsAppend } from "../../components/modals/modalsAppend";
import { IClient } from "../../requests/interface";
import { getClients } from "../../requests/requests";

export const Lk = (): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [clients, setClients] = useState<IClient[]>([]);
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const hendleOpenModal = () => setIsOpenModal(true);
  const hendleCloseModal = () => setIsOpenModal(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (error) {
        setError("Ошибка при получении клиентов");
        console.error(error);
      }
    };

    fetchClients();
  }, []);

  const filteredClients = clients.filter(client => {
    const searchText = search.toLowerCase();
    return (
      client.name.toLowerCase().includes(searchText) ||
      client.surname.toLowerCase().includes(searchText) ||
      client.number.includes(search) ||
      client.tarif_name.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className={`py-[45px] px-[70px] font-sans ${styles.customScrollbar}`}>
      <div className="flex justify-between items-end mb-[45px]">
        <label htmlFor="search" className="font-sans font-medium text-xl color-black">
          Введите ФИО, номер телефона или названия тарифа
          <input
            id="search"
            type="text"
            placeholder="Поиск"
            className={styles.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Установка состояния поиска
          />
        </label>
        <ButtonBigViolet
          title="Добавить пользователя"
          onClick={hendleOpenModal}
        />
      </div>
      <div className={`${styles.tableBg} relative`}>
        <div className="border-b-[5px] px-[70px] py-[30px] flex justify-between border-violet text-black text-2xl font-bold">
          <div>ФИО</div>
          <div className="flex justify-between w-[50%]">
            <div>Номер</div>
            <div>Тариф</div>
            <div>Баланс</div>
          </div>
        </div>
        <div className="p-[45px] pt-[15px]">
          {error && <div>{error}</div>}
          <Pagination listClient={filteredClients} />
        </div>
      </div>

      {isOpenModal && <ModalsAppend onClose={hendleCloseModal} />}
    </div>
  );
};