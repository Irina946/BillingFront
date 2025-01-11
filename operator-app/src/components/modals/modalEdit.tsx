import { InputModal } from "components/InputModal";
import { ButtonEmptyRed } from "components/ButtonEmptyRed";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonExit } from "components/ButtonExit";
import styles from "./modals.module.css";
import { IClient } from "../../requests/interface";
import { useForm } from "react-hook-form";

interface ModalEditProps {
  client: IClient;
  onClose: () => void;
}

export const ModalEdit = (props: ModalEditProps) => {
  const { register } = useForm();

  const handleOutsideClose = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  const client = props.client;
  return (
    <div onClick={handleOutsideClose} className={styles.modalBG}>
      <div className={styles.modalMini}>
        <div className="absolute top-5 right-5">
          <ButtonExit onClick={props.onClose} />
        </div>
        <div className="text-3xl">Редактирование пользователя</div>
        <form className="">
          <InputModal
            type="text"
            placeholder={client.name}
            id="fullName"
            title="ФИО клиента"
            register={register}
          />
          <InputModal
            type="tel"
            placeholder={client.number}
            id="number"
            title="Номер телефона"
            register={register}
          />
          <InputModal
            type="text"
            placeholder={client.tarif_name}
            id="tariff"
            title="Тариф"
            register={register}
          />
          <InputModal
            type="text"
            placeholder={client.id}
            id="personalAccount"
            title="Лицевой счет"
            register={register}
          />
          <div className="flex justify-around px-[15px] w-full">
            <ButtonEmptyRed title="Удалить" />
            <ButtonViolet title="Сохранить" />
          </div>
        </form>
      </div>
    </div>
  );
};
