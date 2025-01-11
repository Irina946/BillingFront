import { ButtonBigViolet } from "components/ButtonBig";
import styles from "./history.module.css";
import { Row } from "../../components/row/row";
import { useEffect, useState } from "react";
import { getHistory } from "../../request/requests";
import { IHistory } from "../../request/interface";
import { formatData, formatPhoneNumber } from "../../function/function";

export const History = (): JSX.Element => {
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

  const downloadHTML = () => {
    const htmlContent = `
      <html>
        <head>
          <title>Отчёт</title>
          <style>
            body { font-family: Arial, sans-serif; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #eee; }
          </style>
        </head>
        <body>
          <h1>Отчет по номеру ${number ? formatPhoneNumber(number) : ''} за месяц</h1>
          <table>
            <thead>
              <tr>
                <th>Наименование</th>
                <th>Дата</th>
                <th>Количество</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              ${history.length === 0 ? `<tr><td colspan="4">Нет данных</td></tr>` :
        history.slice().reverse().map(row => `
                <tr>
                  <td>${row.name}</td>
                  <td>${formatData(row.date)}</td>
                  <td>${row.name === "Пополнение" ? "" : row.amount}</td>
                  <td>${row.name === "Пополнение" ? row.amount : row.price}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </body>
      </html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'report.html';
    link.click();
    URL.revokeObjectURL(link.href);  // очищаем объект URL
  };

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
          onClick={downloadHTML}
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
                {error ? error : "Нет данных"}
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
    </div>
  );
};