import styles from "./tariffs.module.css"
import { ButtonEmptyViolet } from "components/ButtonEmptyViolet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ClientInfo, ITariff } from "../../requests/interface";
import { getTarifs } from "../../requests/requests";
import { CardTariffs } from "../../components/tarif/tarif";



export const Tariffs = (): JSX.Element => {
    const [tariffData, setTariffData] = useState<ITariff[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const data = await getTarifs();
                setTariffData(data);
            } catch (error) {
                setError("Ошибка при получении тарифов");
                console.error("Error fetching tariffs:", error);
            }
        };

        fetchTariffs();
    }, []);

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate(-1)
    }

    const client: ClientInfo = JSON.parse(localStorage.getItem("client") || "")

    return (
        <div className="pl-[70px] pr-[15px] pt-[15px]">
            <div className={styles.container}>
                <div className="flex items-center gap-[30px] mb-[45px]"> <ButtonEmptyViolet title="Назад" onClick={handleClickBack}/>
                <div className="font-bold text-4xl">Каталог</div></div>
                <div className="flex flex-wrap gap-[50px] justify-center">
                    {error && <div>{error}</div>}
                    {tariffData.filter((tarif) => client?.number_info.activated_tarif?.service?.id !== Number(tarif)).map((tariff, idx) => (
                        <CardTariffs
                            key={idx}
                            title={tariff.name}
                            description=''
                            price={tariff.price}
                            minutes={tariff.minute}
                            sms={tariff.sms}
                            internet={tariff.internet}
                            service_id={tariff.service_id}
                            phone={client.client_info.number}
                            number_info={client.number_info}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};