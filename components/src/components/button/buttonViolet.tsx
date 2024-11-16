interface ButtonVioletProps {
    title: string,
    type?: "submit" | "reset" | "button"
}


export const ButtonViolet = (props: ButtonVioletProps): JSX.Element => {
    return (
        <button
        className="
            bg-violet
            text-white
            w-[150px]
            h-[50px]
            rounded-[10px]
            font-sans
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