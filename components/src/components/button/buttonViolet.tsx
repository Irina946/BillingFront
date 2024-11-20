import styles from './button.module.css'

interface ButtonVioletProps {
    title: string,
    type?: "submit" | "reset" | "button",
    onClick?: () => void,
    disabled?: boolean
}


export const ButtonViolet = (props: ButtonVioletProps): JSX.Element => {
    return (
        <button
        className={`${styles.buttonViolet} ${styles.buttonMiddle}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.title}
        </button>
    )
}