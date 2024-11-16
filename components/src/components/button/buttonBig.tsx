interface ButtonBigVioletProps {
    title: string,
    type?: "submit" | "reset" | "button",
    onClick?: () => void
}


export const ButtonBigViolet = (props: ButtonBigVioletProps): JSX.Element => {
    return (
        <button
        className="
            bg-violet
            text-white
            w-[325px]
            h-[50px]
            rounded-[10px]
            font-sans
            font-bold
            text-lg
            align-middle
            focus:bg-buttonVioletFocus
            hover:bg-buttonVioletFocus
            active:bg-violet
        "
        type={props.type}
        onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}