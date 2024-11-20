import styles from './button.module.css'

interface ButtonEmptyRedProps {
    title: string,
    type?: "submit" | "reset" | "button",
    size?: 'small',
    onClick?: () => void
}


export const ButtonEmptyRed = (props: ButtonEmptyRedProps): JSX.Element => {
    const typeSize = props.size === 'small' ? styles.buttonSmall : styles.buttonMiddle
    return (
        <button
            className={`
            ${styles.buttonEmptyRed}
            ${typeSize}
        `}
            type={props.type}
        >
            {props.title}
        </button>
    )
}