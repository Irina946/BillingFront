import { ButtonEditing } from "../button/editing"
import { ButtonInfo } from "../button/info"
import styles from "./row.module.css"

interface RowProps {
    name: string,
    number: string,
    tarif: string,
    balance: string,
    onClickInfo: () => void,
    onClickEdit: () => void
}

export const Row = (props: RowProps): JSX.Element => {
    return (
        <div className={styles.inside}>
            <div className="flex items-center"><ButtonEditing onClick={props.onClickEdit}/> {props.name}</div>
            <div className={styles.insideRight}>
                <div>{props.number}</div>
                <div className="text-right">{props.tarif}</div>
                <div className="flex items-center justify-end">{props.balance} ₽<ButtonInfo onClick={props.onClickInfo}/></div>
            </div>
        </div>
    )
}

