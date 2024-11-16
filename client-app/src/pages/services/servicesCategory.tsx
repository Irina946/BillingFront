import { CardServicesCategory } from 'components/CardServicesCategory';

const services = [
    {
        title: "Услуга 1",
        count: 10,
        id: 1
    },
    {
        title: "Услуга 2",
        count: 20,
        id: 2
    },
    {
        title: "Услуга 3",
        count: 30,
        id: 3
    },
    {
        title: "Услуга 4",
        count: 3,
        id: 4
    },
    {
        title: "Услуга 5",
        count: 13,
        id: 5
    },
    {
        title: "Услуга 6",
        count: 17,
        id: 6
    },
    {
        title: "Услуга 7",
        count: 2,
        id: 7
    },
    {
        title: "Услуга 8",
        count: 9,
        id: 8
    }
]

export const ServicesCategory = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center px-[70px] py-[30px] font-sans">
            <div className="font-bold text-4xl mb-[45px] self-start">Каталог</div>
            <div className="flex flex-wrap gap-[50px] items-start justify-center w-[1150px]">
                {services.map((service) => (
                    <CardServicesCategory
                        key={service.id}
                        title={service.title}
                        count={service.count}
                    />
                ))}
            </div>
        </div>
    );
};