import { InputModal } from "components/InputModal";
import { ButtonEmptyRed } from "components/ButtonEmptyRed";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonExit } from "components/ButtonExit";
import styles from "./modals.module.css";
import { ClientProps } from "../paginations/paginations";

interface ModalEditProps {
    client: ClientProps;
    onClose: () => void
}

export const ModalEdit = (props: ModalEditProps) => {

    const handleOutsideClose = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) {
            props.onClose()
        }
    }

    const client = props.client
    return (
        <div
            onClick={handleOutsideClose}
            className={styles.modalBG}>
            <div className={styles.modal}>
                <div className="absolute top-5 right-5">
                    <ButtonExit onClick={props.onClose} />
                </div>
                Редактирование пользователя
                <form>
                    <InputModal
                        type="text"
                        placeholder={client.name}
                        id="fullName"
                        title="ФИО клиента"
                    />
                    <InputModal
                        type="tel"
                        placeholder={client.number}
                        id="number"
                        title="Номер телефона"
                    />
                    <InputModal
                        type="text"
                        placeholder={client.tarif}
                        id="tariff"
                        title="Тариф"
                    />
                    <InputModal
                        type="text"
                        placeholder={client.personalAccount}
                        id="personalAccount"
                        title="Лицевой счет"
                    />
                </form>
                <div className="flex justify-around px-[15px] w-full">
                    <ButtonEmptyRed title="Удалить" />
                    <ButtonViolet title="Сохранить" />
                </div>
            </div>
        </div>
    )
}