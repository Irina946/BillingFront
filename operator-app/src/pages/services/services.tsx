import styles from "./services.module.css"
import { useLocation, useNavigate } from "react-router"
import { ButtonViolet } from "components/ButtonViolet"
import { useEffect, useState } from "react";
import { IServices } from "../../requests/interface";
import { getServicesList } from "../../requests/requests";
import { CardServices } from "../../components/services/cardServiceNo";

export const Services = (): JSX.Element => {
    const location = useLocation()
    const navigate = useNavigate()
    const title = location.state?.ru_title
    const id = location.state?.idCategory

    const handleClickBack = () => {
        navigate(-1)
    }

    const [services, setServices] = useState<IServices[]>([]);

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const data = await getServicesList(id);
                setServices(data);
            } catch (error) {
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
                    {services.length === 0 ? <div className={'flex justify-center items-center h-[90vh]'}>
                        <div className="loader"></div>
                    </div> :
                        services.map((service, idx) => (
                            <CardServices
                                key={idx}
                                title={service.name}
                                price={service.price}
                                id={service.service_id}
                            />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}