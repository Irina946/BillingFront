import { ButtonBigViolet } from "components/ButtonBig";
import { InputModal } from "components/InputModal";
import { ButtonExit } from "components/ButtonExit";
import styles from "./modals.module.css";

interface ModalAppendProps {
    onClose: () => void
}

export const ModalsAppend = (props: ModalAppendProps): JSX.Element => {

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) {
            props.onClose()
        }
    }

    return (
        <div className={styles.modalBG} onClick={handleOutsideClick}>
            <div className={styles.modal} >
                <div className="absolute top-5 right-5">
                    <ButtonExit onClick={props.onClose} />
                </div>
                <div className="font-bold text-black text-3xl">Создать пользователя</div>
                <form>
                    <InputModal
                        type="text"
                        placeholder="Иванов Иван Иванович"
                        id="fullName"
                        title="ФИО клиента"
                    />
                    <InputModal
                        type="tel"
                        placeholder="+7 999 999 99 99"
                        id="number"
                        title="Номер телефона"
                    />
                    <InputModal
                        type="text"
                        placeholder="Не выбрано"
                        id="tariff"
                        title="Тариф"
                    />
                    <InputModal
                        type="text"
                        placeholder="11111-111-1-1111-1111111"
                        id="personalAccount"
                        title="Лицевой счет"
                    />
                </form>
                <ButtonBigViolet
                    title="Создать"
                    onClick={props.onClose}
                />
            </div>
        </div>
    )
}