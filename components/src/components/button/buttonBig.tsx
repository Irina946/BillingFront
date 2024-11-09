interface ButtonBigVioletProps {
    title: string,
    type?: "submit" | "reset" | "button"
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
            font-bold
            text-lg
            align-middle
            focus:bg-buttonVioletFocus
            hover:bg-buttonVioletFocus
            active:bg-violet
        "
        type={props.type}
        >
            {props.title}
        </button>
    )
}