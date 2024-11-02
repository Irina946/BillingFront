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
            w-325
            h-50
            rounded-10
            font-bold
            text-lg
            align-middle
            focus:bg-buttonVioletFocus
            hover:bg-buttonVioletFocus
            active:bg-violet
            active:w-300
            active:h-45
        "
        type={props.type}
        >
            {props.title}
        </button>
    )
}