import Editing from "../../assets/editing.svg?react";
import styles from "./button.module.css"

interface ButtonEditingProps {
    onClick: () => void
}

export const ButtonEditing = (props: ButtonEditingProps): JSX.Element => {
    return (
        <div className={`${styles.button} mr-[15px]`}>
            <button className={styles.button} onClick={props.onClick}>
                <Editing />
            </button>
            <span className={`${styles.tooltipText} ${styles.tooltipTextEditing}`}>
                Редактировать
            </span>
        </div>
    )
}