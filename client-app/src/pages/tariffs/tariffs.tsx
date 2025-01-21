
import { useEffect, useState } from "react";
import { ITariff } from "../../request/interface";
import { changeTariff, getTarifs } from "../../request/requests";
import { CardTariffs } from "../../components/tarif/tarif";

export const Tariffs = (): JSX.Element => {
    const [tariffData, setTariffData] = useState<ITariff[]>([]);
    const phoneNumber = localStorage.getItem("number");

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const data = await getTarifs();
                setTariffData(data);
            } catch (error) {
                console.error("Error fetching tariffs:", error);
            }
        };

        fetchTariffs();
    }, []);


    return (
        <div className="px-[70px] py-[30px] font-sans">
            <div className="font-bold text-4xl mb-[45px]">Каталог</div>
            <div className="flex flex-wrap gap-[50px] justify-center">
                {tariffData.length === 0 ? <div className={'flex justify-center items-center h-[70vh]'}>
                    <div className="loader"></div>
                </div> :

                    tariffData.filter((tarif) => tarif.service_id !== Number(localStorage.getItem('tarif'))).map((tariff) => (
                        <CardTariffs
                            key={tariff.service_id}
                            title={tariff.name}
                            description={''}
                            price={tariff.price}
                            minutes={tariff.minute}
                            sms={tariff.sms}
                            internet={tariff.internet}
                            service_id={tariff.service_id}
                            phone={phoneNumber || ''}
                        />
                    ))

                }
            </div>
        </div>
    );
};