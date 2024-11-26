import Info from "../../assets/info.svg?react";
import styles from "./button.module.css"

interface ButtonInfoProps {
    onClick: () => void
}

export const ButtonInfo = (props: ButtonInfoProps): JSX.Element => {
    return (
        <div className={`${styles.button} ml-[15px]`}>
            <button className={`${styles.button} ${styles.tooltipTextInformation}`} onClick={props.onClick}>
                <Info />
            </button>
            <span className={styles.tooltipText}>
                Информация
            </span>
        </div>
    )
}