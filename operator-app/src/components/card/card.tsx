import { useState } from "react";
import styles from "./card.module.css";
import { ModalService } from "components/ModalService";
import { useNavigate, useParams } from "react-router";

interface Tariff {
  name: string;
  price: number;
  minutes: number;
  sms: number;
  internet: number;
  id: number;
}

interface Service {
  activated_id: number;
  activated_date: string;
  expiration_date: string;
  service: {
    name: string;
    price: number;
    amount: number;
    is_unlimited: boolean;
    id: number;
  };
}

interface CardProps {
  tariff: Tariff;
  services: Service[];
}

interface ModalServicesProps {
  services: Service;
  open: boolean;
}

export const Card = (props: CardProps): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isOpenModalServices, setIsOpenModalServices] =
    useState<ModalServicesProps | null>();

  const handleOpenModalServices = (service: Service) => {
    setIsOpenModalServices({
      services: service,
      open: true,
    });
  };
  const handleCloseModalServices = () => {
    setIsOpenModalServices(null);
  };

  const handleClickAddTarif = () => {
    navigate(`/${id}/tariffs`);
  };

  const handleClickAddService = () => {
    navigate(`/${id}/services`);
  };

  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.insideContainer} ${styles.insideContainerLeft}`}
      >
        <div className="font-bold text-blackGray text-3xl mb-[15px]">
          Тариф:
        </div>
        <div className="font-bold text-black text-2xl mb-[5px]">
          {props.tariff.name}
        </div>
        <div className="font-bold text-black text-xl mb-[10px]">
          Плата {props.tariff.price} руб/мес
        </div>
        <div className="font-medium text-blackGray text-xl leading-[30px] mb-[15px]">
          <div>{props.tariff.minutes} минут</div>
          <div>{props.tariff.sms} СМС</div>
          <div>{props.tariff.internet} ГБ</div>
        </div>
        <button
          className="text-left border-b-[1px] border-blacrGray text-blackGray w-[120px]"
          onClick={handleClickAddTarif}
        >
          Сменить тариф
        </button>
      </div>
      <div
        className={`${styles.insideContainer} ${styles.insideContainerRight}`}
      >
        <div className="font-bold text-blackGray text-3xl">Услуги:</div>
        <ul className={styles.servicesContainer}>
          {props.services.map((service) => (
            <li
              className="font-medium text-black text-base leading-4 pb-[10px]"
              key={service.activated_id}
            >
              <button
                className="text-left"
                onClick={() => handleOpenModalServices(service)}
              >
                {service.service.name}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="text-left border-b-[1px] border-blacrGray text-blackGray"
          onClick={handleClickAddService}
        >
          Добавить услугу
        </button>
      </div>
      {isOpenModalServices && (
        <ModalService
          isConnect={true}
          title={isOpenModalServices.services.service.name}
          description=''
          price={isOpenModalServices.services.service.price}
          onClose={handleCloseModalServices}
        />
      )}
    </div>
  );
};
