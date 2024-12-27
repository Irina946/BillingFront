import { IClient } from "../../requests/interface"
import { ButtonEditing } from "../button/editing"
import { ButtonInfo } from "../button/info"
import styles from "./row.module.css"

interface RowProps {
    client: IClient
    onClickInfo: () => void,
    onClickEdit: () => void
}

export const formatPhoneNumber = (number: string) => {
    return `+7 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8, 10)}`;

};

export const Row = (props: RowProps): JSX.Element => {
    const client = props.client
    return (
        <div className={styles.inside}>
            <div className="flex items-center"><ButtonEditing onClick={props.onClickEdit}/>{client.surname} {client.name} {client.patronymic}</div>
            <div className={styles.insideRight}>
                <div className="text-left">{formatPhoneNumber(client.number)}</div>
                <div className="text-right">{client.tarif_name}</div>
                <div className="flex items-center justify-end">{client.balance} ₽<ButtonInfo onClick={props.onClickInfo}/></div>
            </div>
        </div>
    )
}

