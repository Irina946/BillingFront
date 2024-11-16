interface CardServiceProps {
    name: string,
    description: string,
    price: number
}

export const CardService = (props: CardServiceProps): JSX.Element => {
    return (
        <button
            className="
        bg-blue 
        text-white
        w-[30%] 
        h-[95%]
        p-[20px] 
        rounded-[10px] 
        font-sans
        font-medium 
        text-center
        flex
        flex-col
        justify-between
        items-center
        gap-[10px]
        shadow-[4px_4px_10px_rgba(0,0,0,0.25)]
        mb-[10px]
        "
        >
            <div className="text-xl">
                {props.name}
            </div>
            <div className="text-sm">
                {props.description}
            </div>
            <div className="text-2xl">
                {`${props.price} ₽`}
            </div>
        </button>
    );
}