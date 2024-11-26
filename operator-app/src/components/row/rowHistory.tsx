import styles from "./row.module.css"

interface RowHistoryProps {
    name: string,
    date: string,
    sum: number,
    count: string
}

export const RowHistory = (props: RowHistoryProps): JSX.Element => {
    return (
        <div className={styles.rowHistory}>
            <div>{props.name} {props.count !== "" ? `(${props.count})` : ""}</div>
            <div className="text-center">{props.date}</div>
            <div className="text-center">{props.sum} ₽</div>
        </div>
    )
}