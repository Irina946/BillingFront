import { CardServicesCategory } from 'components/CardServicesCategory';
import { useNavigate } from 'react-router-dom';
import styles from './services.module.css'

const services = [
    {
        title: "Интернет",
        count: 10,
        id: "service-internet"
    },
    {
        title: "Мобильная связь",
        count: 20,
        id: "service-mobile-communication"
    },
    {
        title: "Смс-услуги",
        count: 15,
        id: "service-sms"
    },
    {
        title: "Мобильные приложения",
        count: 25,
        id: "service-mobile-apps"
    },
    {
        title: "Техническая поддержка",
        count: 5,
        id: "service-technical-support"
    },
    {
        title: "Мобильный интернет",
        count: 50,
        id: "service-mobile-internet"
    },
    {
        title: "Доп услуги",
        count: 12,
        id: "service-additional-services"
    },
    {
        title: "Пакеты услуг",
        count: 18,
        id: "service-service-packages"
    },
    {
        title: "Консультации",
        count: 8,
        id: "service-consultations"
    }
];

export const ServicesCategory = (): JSX.Element => {

    const navigate = useNavigate();

    const handleCardClick = (id: string, title: string) => {
        navigate(`/services/${id}`, { state: { title }});
    }

    return (
        <div className="flex flex-col items-center px-[70px] py-[30px] font-sans">
            <div className="font-bold text-4xl mb-[45px] self-start">Каталог</div>
            <div className={styles.servicesCategoryContainer}>
                {services.map((service) => (
                    <CardServicesCategory
                        key={service.id}
                        title={service.title}
                        count={service.count}
                        onClick={() => handleCardClick(service.id, service.title)}
                    />
                ))}
            </div>
        </div>
    );
};