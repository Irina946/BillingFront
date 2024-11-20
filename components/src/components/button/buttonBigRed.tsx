import styles from './button.module.css'

interface ButtonBigRedProps {
    title: string,
    type?: "submit" | "reset" | "button",
    onClick?: () => void
}


export const ButtonBigRed = (props: ButtonBigRedProps): JSX.Element => {
    return (
        <button
        className={`${styles.buttonBigRed} ${styles.buttonBig}`}
        type={props.type}
        >
            {props.title}
        </button>
    )
}