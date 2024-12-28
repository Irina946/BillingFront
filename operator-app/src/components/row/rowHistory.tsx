import { formatDate } from "../../pages/client/client"
import { IHistory } from "../../requests/interface"
import styles from "./row.module.css"

export const RowHistory = (props: IHistory): JSX.Element => {
    return (
        <div className={styles.rowHistory}>
            <div>{props.name} {props.amount !== 0 && props.price ? `(${props.amount})` : ""}</div>
            <div className="text-center">{formatDate(props.date)}</div>
            <div className="text-center">{props.price ? props.price : props.amount} ₽</div>
        </div>
    )
}