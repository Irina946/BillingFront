import styles from './button.module.css'

interface ButtonVioletProps {
    title: string,
    type?: "submit" | "reset" | "button"
}


export const ButtonViolet = (props: ButtonVioletProps): JSX.Element => {
    return (
        <button
        className={`${styles.buttonViolet} ${styles.buttonMiddle}`}
        type={props.type}
        >
            {props.title}
        </button>
    )
}