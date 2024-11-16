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
            className="
        bg-violet 
        w-[30%] 
        h-[100%]
        p-[20px] 
        rounded-[10px] 
        font-sans
        font-medium 
        text-center
        flex
        flex-col
        justify-center
        items-center
        gap-[2rem]
        mb-[20px]
        shadow-[4px_4px_10px_rgba(0,0,0,0.25)]
        "
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