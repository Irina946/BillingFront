import { useState } from "react";
import styles from "./cardServices.module.css";
import { IAddition } from "../../request/interface";
import { deleteService, getAddition } from "../../request/requests";
import { ButtonExit } from "components/ButtonExit";
import { ButtonBigRed } from "components/ButtonBigRed";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonEmptyRed } from "components/ButtonEmptyRed";

interface CardServiceProps {
  id: number;
  name: string;
  description: string;
  price: number;
  number: string;
}

export const CardService = (props: CardServiceProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [addition, setAddition] = useState<IAddition | null>(null);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleOpenAlert = (): void => {
    setIsOpenAlert(true);
  };

  const handleCloseAlert = (): void => {
    setIsOpenAlert(false);
  };

  const handleOpenModal = async (): Promise<void> => {
    setAddition(await getAddition(props.id));
    setIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsOpen(false);
  };

  const handleDelete = (): void => {
    deleteService(props.id, props.number);
    setIsOpenAlert(false);
    setIsOpen(false)
  }


  return (
    <>
      <button className={styles.container} onClick={handleOpenModal}>
        <div className="text-xl">{props.name}</div>
        <div className="text-sm">{props.description}</div>
        <div className="text-2xl">{`${props.price} ₽`}</div>
      </button>
      {isOpen && (
        <>
          {addition === null ? (
            <div className={'flex justify-center items-center h-[90vh]'}>
            <div className="loader"></div>
          </div>
          ) : (
            <div className={styles.modalBG} onClick={handleOutsideClick}>
              <div className={`${styles.modal} h-[425px]`}>
                <div className="absolute top-5 right-5">
                  <ButtonExit onClick={handleCloseModal} />
                </div>
                <div className="text-4xl font-bold">{addition?.name}</div>

                <div className={styles.modalInner}>
                  Абонентска плата за {`${addition?.duration}`}
                  <p className="text-4xl font-bold text-black mt-[10px]">
                    {addition?.price} ₽
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-[10px]">Описание</div>
                  <div className="text-lg font-thin text-blackGray">
                    {addition?.description}
                  </div>
                </div>
                <div className="self-center mt-[30px]">
                  <ButtonBigRed title="Отключить" onClick={handleOpenAlert} />
                </div>
              </div>
              {isOpenAlert && (
                <div className={styles.modalAlert}>
                  <div
                    className="
                        text-xl 
                        font-medium 
                        text-black 
                        pb-[30px] 
                        text-center"
                  >
                    Вы уверны, что хотите отключить услугу?
                  </div>
                  <div className="flex justify-between">
                    <ButtonViolet
                      size="small"
                      title="Отключить"
                      onClick={handleDelete}
                    />
                    <ButtonEmptyRed
                      size="small"
                      title="Отменить"
                      onClick={handleCloseAlert}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
