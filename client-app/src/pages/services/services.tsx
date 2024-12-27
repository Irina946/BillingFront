import { useLocation, useNavigate } from "react-router"
import { ButtonViolet } from "components/ButtonViolet"
import { CardServices } from "components/CardService"
import styles from "./services.module.css"
import { getServicesList } from "../../request/requests";
import { useEffect, useState } from "react";
import { IServices } from "../../request/interface";


export const Services = (): JSX.Element => {

    const location = useLocation()
    const navigate = useNavigate()

    const title = location.state?.ru_title
    const id = location.state?.id

    const handleClickBack = () => {
        navigate(-1)
    }

    const [services, setServices] = useState<IServices[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const data = await getServicesList(id);
                console.log(data);
                setServices(data);
            } catch (error) {
                setError("Ошибка при получении тарифов");
                console.error("Error fetching tariffs:", error);
            }
        };

        fetchTariffs();
    }, []);


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
                    {services.length === 0 ? <div>Загрузка...</div> :
                        services.map((service, idx) => (
                            <CardServices
                                key={idx}
                                title={service.name}
                                description={''}
                                price={service.price}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}