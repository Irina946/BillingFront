import { CardServicesCategory } from 'components/CardServicesCategory';
import { useNavigate } from 'react-router-dom';
import styles from './services.module.css'
import { useEffect, useState } from 'react';
import { IServicesCategory } from '../../request/interface';
import { getServicesCategoryList } from '../../request/requests';


export const ServicesCategory = (): JSX.Element => {

    const navigate = useNavigate();

    const handleCardClick = (id: string, title: string, ru_title: string) => {
        navigate(`/services/${title}`, { state: { title, ru_title, id } });
    }

    const [servicesData, setServicesData] = useState<IServicesCategory[]>([]);

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const data = await getServicesCategoryList();
                setServicesData(data);
            } catch (error) {
                console.error("Error fetching tariffs:", error);
            }
        };

        fetchTariffs();
    }, []);

    return (
        <div className="flex flex-col items-center px-[70px] py-[30px] font-sans">
            <div className="font-bold text-4xl mb-[45px] self-start">Каталог</div>
            <div className={styles.servicesCategoryContainer}>
                {servicesData.map((service) => (
                    <CardServicesCategory
                        key={service.id}
                        title={service.ru_name}
                        count={service.count}
                        onClick={() => handleCardClick(service.id.toString(), service.name, service.ru_name)}
                    />
                ))}
            </div>
        </div>
    );
};