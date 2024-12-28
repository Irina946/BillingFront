import { CardTariffs } from "components/CardTariffs";
import { useEffect, useState } from "react";
import { ITariff } from "../../request/interface";
import { getTarifs } from "../../request/requests";

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

    return (
        <div className="px-[70px] py-[30px] font-sans">
            <div className="font-bold text-4xl mb-[45px]">Каталог</div>
            <div className="flex flex-wrap gap-[50px] justify-center">
                {tariffData.length === 0 ? <div className={'flex justify-center items-center h-[70vh]'}>
                    <div className="loader"></div>
                </div> :

                    tariffData.map((tariff, index) => (
                        <CardTariffs
                            key={`${tariff.id}-${index}`}
                            title={tariff.name}
                            description={''}
                            price={tariff.price}
                            minutes={tariff.minute}
                            sms={tariff.sms}
                            internet={tariff.internet}
                        />
                    ))

                }
            </div>
        </div>
    );
};