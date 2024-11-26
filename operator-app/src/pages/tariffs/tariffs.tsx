import styles from "./tariffs.module.css"
import { ButtonEmptyViolet } from "components/ButtonEmptyViolet";
import { CardTariffs } from "components/CardTariffs";
import { useNavigate } from "react-router";

const tariffs = [
    {
        id: 1,
        title: "МегаТариф+",
        description: "Описание тарифа. Тариф самый лучший. Можно с ним сделать всё.",
        price: 200
    },
    {
        id: 2,
        title: "0 за 0",
        description: "Описание тарифа. Тариф самый лучший. Можно с ним сделать всё.",
        price: 0
    },
    {
        id: 3,
        title: "Всё включено",
        description: "Описание тарифа. Тариф самый лучший. Можно с ним сделать всё. Много всего за не самую большую сумму.",
        price: 2000
    },
    {
        id: 4,
        title: "СуперТариф",
        description: "СуперТариф - идеальный выбор для всех. Премиум-услуги по доступной цене.",
        price: 1500
    },
    {
        id: 5,
        title: "Экономный Тариф",
        description: "Экономный Тариф для тех, кто хочет сэкономить. Все необходимые услуги по низкой цене.",
        price: 100
    },
    {
        id: 6,
        title: "ПремиумТариф",
        description: "ПремиумТариф - лучшее решение для бизнесменов и активных пользователей.",
        price: 3000
    },
    {
        id: 7,
        title: "Тариф на пробу",
        description: "Попробуйте наш сервис с Тарифом на пробу. Временный тариф для новых пользователей на месяц.",
        price: 50
    },
    {
        id: 8,
        title: "Безлимитный Тариф",
        description: "Безлимитный Тариф для тех, кто не хочет себя ничем ограничивать. Никаких лимитов!",
        price: 2500
    },
    {
        id: 9,
        title: "Семейный Тариф",
        description: "Семейный Тариф с выгодами для всей семьи. Пакет услуг для всех.",
        price: 1200
    },
    {
        id: 10,
        title: "Корпоративный Тариф",
        description: "Корпоративный Тариф для больших компаний и организаций. Максимальные возможности.",
        price: 5000
    },
    {
        id: 11,
        title: "Стандартный Тариф",
        description: "Стандартный Тариф, который включает все базовые услуги. То, что нужно каждому.",
        price: 800
    },
    {
        id: 12,
        title: "Тариф на выходные",
        description: "Специальный Тариф на выходные дни. Идеально для отдыха и развлечений.",
        price: 300
    }
];

export const Tariffs = (): JSX.Element => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1)
    }

    return (
        <div className="pl-[70px] pr-[15px] pt-[15px]">
            <div className={styles.container}>
                <div className="flex items-center gap-[30px] mb-[45px]"> <ButtonEmptyViolet title="Назад" onClick={handleClickBack}/>
                <div className="font-bold text-4xl">Каталог</div></div>
                <div className="flex flex-wrap gap-[50px] justify-center">
                    {tariffs.map((tariff) => (
                        <CardTariffs
                            key={tariff.id}
                            title={tariff.title}
                            description={tariff.description}
                            price={tariff.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};