interface ButtonBigRedProps {
    title: string,
    type?: "submit" | "reset" | "button"
}


export const ButtonBigRed = (props: ButtonBigRedProps): JSX.Element => {
    return (
        <button
        className="
            bg-red
            text-white
            w-[325px]
            h-[50px]
            rounded-[10px]
            font-sans
            font-bold
            text-lg
            align-middle
            focus:bg-buttonRedFocus
            hover:bg-buttonRedFocus
            active:bg-red
        "
        type={props.type}
        >
            {props.title}
        </button>
    )
}