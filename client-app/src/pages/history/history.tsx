import { ButtonBigViolet } from "components/ButtonBig";
import { ModalReport } from "components/ModalReport";
import styles from "./history.module.css";
import { Row } from "../../components/row/row";
import { useEffect, useState } from "react";
import { getHistory } from "../../request/requests";
import { IHistory } from "../../request/interface";
import { formatData, formatPhoneNumber } from "../../function/function";

export const History = (): JSX.Element => {
  const [isOpenreportModal, setIsOpenreportModal] = useState(false);
  const [history, setHistory] = useState<IHistory[]>([]);
  const [error, setError] = useState<string>("");

  const numberId = localStorage.getItem("number_id");
  const number = localStorage.getItem("number");

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const data = await getHistory(Number(numberId));
        setHistory(data);
      } catch (error) {
        setError("Ошибка при получении тарифов");
        console.error("Error fetching tariffs:", error);
      }
    };

    fetchTariffs();
  }, []);

  return (
    <div className="px-[70px] pt-[30px] pb-[75px] font-sans flex flex-col justify-center items-center">
      <div className="font-bold text-4xl mb-[45px] text-start w-[90vw]">
        История
      </div>
      <div className="flex justify-between items-center mb-[45px] w-[90vw]">
        <div className="text-3xl font-bold">{number ? formatPhoneNumber(number) : ''}</div>
        <ButtonBigViolet
          title="Сформировать отчёт"
          type="button"
        />
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div>Наименование</div>
          <div className={styles.headerRight}>
            <div>Дата</div>
            <div>Количество</div>
            <div className="text-right">Сумма</div>
          </div>
        </div>
        <div className={styles.tableBody}>
          <div className={styles.scrollBarTable}>
            {history.length === 0 ? (
              <div className="text-3xl w-full h-full text-center">
                Нет данных
              </div>
            ) : (
              <>
                {history.slice().reverse().map((row, idx) => (
                  <Row
                    key={idx}
                    name={row.name}
                    date={formatData(row.date)}
                    count={row.name === "Пополнение" ? "" : row.amount.toString()}
                    sum={row.name === "Пополнение" ? row.amount : row.price}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {isOpenreportModal && <ModalReport onClose={() => setIsOpenreportModal(false)} />}
    </div>
  );
};