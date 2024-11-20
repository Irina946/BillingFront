import styles from './button.module.css'

interface ButtonBigRedProps {
    title: string,
    type?: "submit" | "reset" | "button",
    onClick?: () => void,
    disabled?: boolean
}


export const ButtonBigRed = (props: ButtonBigRedProps): JSX.Element => {
    return (
        <button
        className={`${styles.buttonBigRed} ${styles.buttonBig}`}
        type={props.type}
        disabled={props.disabled}
        onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}