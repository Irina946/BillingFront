import { useLocation, useNavigate } from "react-router"
import { ButtonViolet } from "components/ButtonViolet"
import { CardServices } from "components/CardService"
import styles from "./services.module.css"

const internetServices = [
    {
        id: 1,
        title: "Оптоволоконный интернет",
        description: "Высокоскоростное подключение через оптоволоконные линии. Идеален для крупных семей и офисов с интенсивным использованием интернета.",
        price: 1000,
    },
    {
        id: 2,
        title: "Мобильный интернет 4G",
        description: "Доступ к интернету в любом месте с помощью мобильной сети 4G. Отличный выбор для людей, часто находящихся в движении.",
        price: 800,
    },
    {
        id: 3,
        title: "Безлимитный интернет",
        description: "Подключение без ограничений по объему трафика. Забудьте о лимитах и пользуйтесь интернетом без забот.",
        price: 1200,
    },
    {
        id: 4,
        title: "Интернет для дома",
        description: "Идеальный тариф для пользователей, которые проводят много времени дома. Высокая скорость и стабильное соединение.",
        price: 900,
    },
    {
        id: 5,
        title: "Суперскоростной интернет",
        description: "Максимальная скорость подключения до 1 Гбит/с. Подходит для геймеров и стримеров.",
        price: 1500,
    },
    {
        id: 6,
        title: "Семейный интернет-пакет",
        description: "Неограниченный интернет для всей семьи с адаптивной настройкой под ваши потребности.",
        price: 1300,
    },
    {
        id: 7,
        title: "Интернет + телевидение",
        description: "Комплексное предложение, включающее高速 интернет и доступ к цифровому телевидению с множеством каналов.",
        price: 1600,
    },
    {
        id: 8,
        title: "Роуминг-интернет",
        description: "Специальный тариф для пользователей, часто выезжающих за границу. Позволяет оставаться на связи с минимальными затратами.",
        price: 2000,
    },
    {
        id: 9,
        title: "Частный интернет для бизнеса",
        description: "Индивидуальные решения для бизнеса с гарантированной скоростью и поддержкой. Безопасное и надежное подключение.",
        price: 2500,
    },
    {
        id: 10,
        title: "Адаптивный тариф интернет-план",
        description: "Тариф, который автоматически подстраивается под ваши интернет-потребности на основе использования.",
        price: 1100,
    },
];

export const Services = (): JSX.Element => {

    const location = useLocation()
    const navigate = useNavigate()

    const title = location.state?.title

    const handleClickBack = () => {
        navigate(-1)
    }

    return (
        <div className="px-[70px] py-[30px]">
            <div className="flex items-center gap-[45px]">
                <ButtonViolet
                    title="Назад"
                    onClick={handleClickBack}
                />
                <div
                    className="font-sans 
                        font-bold 
                        text-4xl 
                        text-black">
                    {title}
                </div>
            </div>
            <div className="pt-[15px]">
                <div className={styles.servicesContainer}>
                    {internetServices.map((service) => (
                        <CardServices
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            price={service.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}