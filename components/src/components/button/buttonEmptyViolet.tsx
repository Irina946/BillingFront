import styles from './button.module.css'

interface ButtonEmptyVioletProps {
    title: string,
    type?: "submit" | "reset" | "button",
    onClick?: () => void,
    size?: 'small'
}


export const ButtonEmptyViolet = (props: ButtonEmptyVioletProps): JSX.Element => {
    const typeSize = props.size === 'small' ? styles.buttonSmall : styles.buttonMiddle
    return (
        <button
        className={`${styles.buttonEmptyViolet} ${typeSize}`}
        type={props.type}
        onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}