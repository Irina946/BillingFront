import styles from './button.module.css'

interface ButtonBigVioletProps {
    title: string,
    type?: "submit" | "reset" | "button",
    onClick?: () => void
}


export const ButtonBigViolet = (props: ButtonBigVioletProps): JSX.Element => {
    return (
        <button
        className={`${styles.buttonBigViolet} ${styles.buttonBig}`}
        type={props.type}
        onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}