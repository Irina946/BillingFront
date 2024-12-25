import { ButtonBigViolet } from "components/ButtonBig";
import { ModalReport } from "components/ModalReport";
import styles from "./history.module.css";
import { Row } from "../../components/row/row";
import { useEffect, useState } from "react";
import { getHistory } from "../../request/requests";
import { set } from "react-hook-form";
import { IHistory } from "../../request/interface";

const rows = [
    {
        name: "Снятие",
        date: "22.09.2024",
        count: "",
        sum: -300.00,
        id: 1
    },
    {
        name: "Пополнение",
        date: "21.09.2024",
        count: "",
        sum: 3000.00,
        id: 2
    },
    {
        name: "Услуга пакет минут",
        date: "20.09.2024",
        count: "300 минут",
        sum: -150.00,
        id: 3
    },
    {
        name: "Снятие",
        date: "20.09.2024",
        count: "",
        sum: -300.00,
        id: 4
    },
    {
        name: "Снятие",
        date: "20.09.2024",
        count: "",
        sum: -1000.00,
        id: 5
    },
    {
        name: "Услуга пакет ГБ",
        date: "19.09.2024",
        count: "300 КБ",
        sum: -300.00,
        id: 6
    },
    {
        name: "Снятие",
        date: "22.09.2024",
        count: "",
        sum: -300.00,
        id: 7
    },
    {
        name: "Пополнение",
        date: "22.08.2024",
        count: "",
        sum: 1300.00,
        id: 8
    },
    {
        name: "Снятие",
        date: "22.09.2024",
        count: "300 минут",
        sum: -300.00,
        id: 9
    },
    {
        name: "Снятие",
        date: "22.09.2024",
        count: "300 минут",
        sum: -300.00,
        id: 10
    },
    {
        name: "Снятие",
        date: "22.09.2024",
        count: "300 минут",
        sum: -300.00,
        id: 11
    },
    {
        name: "Снятие",
        date: "22.09.2024",
        count: "300 минут",
        sum: -300.00,
        id: 12
    },
    {
        name: "Снятие",
        date: "22.09.2024",
        count: "300 минут",
        sum: -300.00,
        id: 13
    }
]

export const History = (): JSX.Element => {
    const [isOpenreportModal, setIsOpenreportModal] = useState(false);

    const handleOpenReportModal = () => setIsOpenreportModal(true);

    const handleCloseReportModal = () => setIsOpenreportModal(false);

    const numberId = localStorage.getItem("number_id");


    const [history, setHistory] = useState<IHistory[]>([]);
    const [error, setError] = useState<string>("");

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
            <div className="font-bold text-4xl mb-[45px] text-start w-[90vw]">История</div>
            <div className="flex justify-between items-center mb-[45px] w-[90vw]">
                <div className="text-3xl font-bold">+7 900 900 90 90</div>
                <ButtonBigViolet
                    title="Сформировать отчёт"
                    type="button"
                    onClick={handleOpenReportModal}
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
                        {history.length === 0 ? <div className="text-3xl w-full h-full text-center">Нет данных</div> :
                            (<>{history.map((row, idx) => <Row key={idx} name={"name"} date={row.date} count={row.amount.toString()} sum={1} />)}</>)
                        }
                    </div>
                </div>
            </div>
            {isOpenreportModal && <ModalReport onClose={handleCloseReportModal} />}
        </div>
    );
};