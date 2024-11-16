interface ButtonEmptyRedProps {
    title: string,
    type?: "submit" | "reset" | "button"
}


export const ButtonEmptyRed = (props: ButtonEmptyRedProps): JSX.Element => {
    return (
        <button
        className="
            bg-white
            text-red
            border-red
            border-[4px]
            w-[120px]
            h-[40px]
            rounded-[10px]
            font-sans
            text-[16px]
            text-center
            font-bold
            focus:bg-red
            focus:text-white
            hover:bg-red
            hover:text-white
            active:bg-buttonRedFocus
            active:border-buttonRedFocus
        "
        type={props.type}
        >
            {props.title}
        </button>
    )
}