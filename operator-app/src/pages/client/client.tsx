import { ButtonEmptyViolet } from "components/ButtonEmptyViolet"
import { CardBalance } from "components/CardBalance"
import { ButtonBigViolet } from "components/ButtonBig"
import styles from "./client.module.css"
import { RowHistory } from "../../components/row/rowHistory"
import { Card } from "../../components/card/card"
import { useNavigate } from "react-router"

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
        name: "Услуга бесплатная подписка Кион",
        date: "22.09.2024",
        count: "120 дней",
        sum: -623.59,
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

const internetServices = [
    {
        id: 1,
        title: "Оптоволоконный интернет",
        description: "Высокоскоростное подключение через оптоволоконные линии. Идеален для крупных семей и офисов с интенсивным использованием интернета.",
        price: 1000,
        dateConnect: "22.09.2024",
        date: "22.12.2024",
        writeOffPeriod: "30 дней"
    },
    {
        id: 2,
        title: "Мобильный интернет 4G",
        description: "Доступ к интернету в любом месте с помощью мобильной сети 4G. Отличный выбор для людей, часто находящихся в движении.",
        price: 800,
        dateConnect: "12.09.2024",
        date: "22.12.2024",
        writeOffPeriod: "Месяц"
    },
    {
        id: 3,
        title: "Безлимитный интернет",
        description: "Подключение без ограничений по объему трафика. Забудьте о лимитах и пользуйтесь интернетом без забот.",
        price: 1200,
        dateConnect: "01.10.2024",
        date: "01.01.2025",
        writeOffPeriod: "Месяц"
    },
    {
        id: 4,
        title: "Интернет для дома",
        description: "Идеальный тариф для пользователей, которые проводят много времени дома. Высокая скорость и стабильное соединение.",
        price: 900,
        dateConnect: "15.10.2024",
        date: "15.01.2025",
        writeOffPeriod: "3 месяца"
    },
    {
        id: 5,
        title: "Суперскоростной интернет",
        description: "Максимальная скорость подключения до 1 Гбит/с. Подходит для геймеров и стримеров.",
        price: 1500,
        dateConnect: "20.09.2024",
        date: "20.12.2024",
        writeOffPeriod: "6 месяцев"
    },
    {
        id: 6,
        title: "Семейный интернет-пакет",
        description: "Неограниченный интернет для всей семьи с адаптивной настройкой под ваши потребности.",
        price: 1300,
        dateConnect: "25.09.2024",
        date: "25.12.2024",
        writeOffPeriod: "Месяц"
    },
    {
        id: 7,
        title: "Интернет + телевидение",
        description: "Комплексное предложение, включающее高速 интернет и доступ к цифровому телевидению с множеством каналов.",
        price: 1600,
        dateConnect: "30.09.2024",
        date: "30.12.2024",
        writeOffPeriod: "Месяц"
    },
    {
        id: 8,
        title: "Роуминг-интернет",
        description: "Специальный тариф для пользователей, часто выезжающих за границу. Позволяет оставаться на связи с минимальными затратами.",
        price: 2000,
        dateConnect: "28.09.2024",
        date: "28.12.2024",
        writeOffPeriod: "Месяц"
    }
];

export const ClientPage = (): JSX.Element => {
    const navigate = useNavigate();
    return (<div className="m-[45px]">
        <div className="flex justify-between items-center mb-[60px]">
            <ButtonEmptyViolet title="Назад" onClick={() => navigate(-1)}/>
            <div className="flex gap-[30px] text-4xl font-bold relative">
                <div>
                    Иванов Иван Иванович
                </div>
                <div>
                    +7 999 999 99 01
                </div>
                <p className="absolute text-xl font-normal text-blackGray -bottom-[30px] right-0">Лицевой счет: 12345-678-9-1011-1213141</p>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="grid gap-[30px]">
                <CardBalance
                    user="operator"
                    balance={10000}
                    payment={1000}
                    date="01.01.2025"

                />
                <Card
                    tariff={
                        {
                            name: "Стандарт",
                            description: "Стандартный тариф. Нормально минут, нормально СМС, нормально интернета. Нормальная цена. Всё стандартно.",
                            price: 100,
                            minutes: 300,
                            sms: 300,
                            internet: 300,
                            id: 14567
                        }}
                    services={internetServices}
                />
            </div>
            <div className={styles.tableBg}>
                <div className={styles.tableHeader}>
                    <div>
                        Наименование
                    </div>
                    <div className="text-center">
                        Дата
                    </div>
                    <div className="text-center">
                        Сумма
                    </div>
                </div>
                <div className="pr-[15px] py-[15px]">
                    <div className={styles.customScrollbar}>
                        {rows.map(row => <RowHistory key={row.id} {...row} />)}
                    </div>
                    <div className="flex justify-center items-center pt-[15px] border-t-[1px] border-blackGray h-[80px]">
                        <ButtonBigViolet
                            title="сформировать отчет"
                        />
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}