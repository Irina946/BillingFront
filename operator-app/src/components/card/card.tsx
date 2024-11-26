import { useState } from 'react'
import styles from './card.module.css'
import { ModalService } from 'components/ModalService'
import { useNavigate, useParams } from 'react-router'

interface Teriff {
    name: string,
    description: string,
    price: number,
    minutes: number,
    sms: number,
    internet: number,
    id: number
}

interface Service {
    title: string,
    description: string,
    dateConnect: string,
    date: string,
    price: number,
    writeOffPeriod: string,
    id: number
}

interface CardProps {
    tariff: Teriff,
    services: Service[]
}

interface ModalServicesProps {
    services: Service,
    open: boolean
}

export const Card = (props: CardProps): JSX.Element => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [isOpenModalServices, setIsOpenModalServices] = useState<ModalServicesProps | null>()

    const handleOpenModalServices = (service: Service) => {
        setIsOpenModalServices({
            services: service,
            open: true
        })
    }
    const handleCloseModalServices = () => {
        setIsOpenModalServices(null)
    }

    const handleClickAddTarif = () => {
        navigate(`/${id}/tariffs`);
    }

    const handleClickAddService = () => {
        navigate(`/${id}/services`);
    }

    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.insideContainer} ${styles.insideContainerLeft}`}>
                <div className='font-bold text-blackGray text-3xl mb-[15px]'>
                    Тариф:
                </div>
                <div className='font-bold text-black text-2xl mb-[5px]'>
                    {props.tariff.name}
                </div>
                <div className='font-medium text-blackGray text-xs leading-[16px] h-[100px]'>
                    {props.tariff.description}
                </div>
                <div className='font-bold text-black text-xl mb-[10px]'>
                    {props.tariff.price} руб/мес
                </div>
                <div className='font-medium text-blackGray text-xl leading-[30px] mb-[15px]'>
                    <div>
                        {props.tariff.minutes} минут
                    </div>
                    <div>
                        {props.tariff.sms} СМС
                    </div>
                    <div>
                        {props.tariff.internet} ГБ
                    </div>
                </div>
                <button className='text-left border-b-[1px] border-blacrGray text-blackGray' onClick={handleClickAddTarif}>
                    Сменить тариф
                </button>
            </div>
            <div className={`${styles.insideContainer} ${styles.insideContainerRight}`}>
                <div className='font-bold text-blackGray text-3xl'>
                    Услуги:
                </div>
                <ul className={styles.servicesContainer}>
                    {props.services.map((service) => (
                        <li className='font-medium text-black text-base leading-4 pb-[10px]' key={service.id}>
                            <button className='text-left'
                                onClick={() => handleOpenModalServices(service)}>{service.title}</button>

                        </li>
                    ))}
                </ul>
                <button className='text-left border-b-[1px] border-blacrGray text-blackGray'
                    onClick={handleClickAddService}>
                    Добавить услугу
                </button>
            </div>
            {isOpenModalServices && <ModalService
                isConnect={true}
                title={isOpenModalServices.services.title}
                description={isOpenModalServices.services.description}
                price={isOpenModalServices.services.price}
                onClose={handleCloseModalServices}
            />}
        </div>
    )
}