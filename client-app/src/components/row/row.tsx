import styles from "./row.module.css"

interface RowProps {
    name: string,
    date: string,
    count: string,
    sum: number,
}

export const Row = (props: RowProps): JSX.Element => {
    return (
        <div className={styles.inside}>
            <div className="pl-[15px]">{props.name}</div>
            <div className={styles.insideRight}>
                <div>{props.date}</div>
                <div className="text-center">{props.count}</div>
                <div className="text-right pr-[45px]">{props.sum} ₽</div>
            </div>
        </div>
    )
}