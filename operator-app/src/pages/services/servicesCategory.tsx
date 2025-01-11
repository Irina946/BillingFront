import { CardServicesCategory } from 'components/CardServicesCategory';
import { ButtonEmptyViolet } from 'components/ButtonEmptyViolet';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './services.module.css'
import { useEffect, useState } from 'react';
import { getServicesCategoryList } from '../../requests/requests';
import { IServicesCategory } from '../../requests/interface';

export const ServicesCategory = (): JSX.Element => {
    const {id} = useParams();
    const [servicesData, setServicesData] = useState<IServicesCategory[]>([]);
    const [error, setError] = useState<string>("");


    const navigate = useNavigate();

    const handleCardClick = (idCategory: string, title: string, ru_title: string) => {
        navigate(`/${id}/services/${title}`, { state: { title, ru_title, id, idCategory }});
    }

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const data = await getServicesCategoryList();
                setServicesData(data);
            } catch (error) {
                setError("Ошибка при получении сервисов");
                console.error("Error fetching tariffs:", error);
            }
        };

        fetchTariffs();
    }, []);

    return (
        <div className="flex flex-col items-center px-[70px] py-[30px] font-sans">
            <div className='flex items-center gap-[30px] mb-[45px] self-start'> <ButtonEmptyViolet title="Назад" onClick={() => navigate(-1)}/>
                <div className="font-bold text-4xl ">Каталог</div>
            </div>
            
            <div className={styles.servicesCategoryContainer}>
                {error && <div>{error}</div>}
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



