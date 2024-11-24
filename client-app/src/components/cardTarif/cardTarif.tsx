import styles from "./cardTarif.module.css"

interface CardTarifProps {
    name: string,
    remains: number
    full: number
}

export const CardTarif = (props: CardTarifProps): JSX.Element => {
    const longFillBar = Math.floor((props.remains / props.full) * 100)
    const gradientStyle = {
        background: `linear-gradient(to right, #07E2E2 ${longFillBar}%, white ${longFillBar}%)`
    };
    return (
        <div
            className={styles.container}
        >
            <div
                className="
            text-white 
            text-2xl 
            ">
                {props.name}
            </div>
            <div
                className="
            text-gray
            text-xl
            "
            >
                {`${props.remains} из ${props.full}`}
            </div>
            <div className="w-[75%] h-[20px] rounded-[15px]" style={gradientStyle}>
            </div>
        </div>
    )
}