import styles from './button.module.css'

interface ButtonVioletProps {
    title: string,
    type?: "submit" | "reset" | "button",
    onClick?: () => void,
    size?: 'small',
    disabled?: boolean
}


export const ButtonViolet = (props: ButtonVioletProps): JSX.Element => {
    const typeSize = props.size === 'small' ? styles.buttonSmall : styles.buttonMiddle
    return (
        <button
        className={`${styles.buttonViolet} ${typeSize}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        >
            {props.title}
        </button>
    )
}