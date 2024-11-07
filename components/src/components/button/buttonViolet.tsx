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
            w-150
            h-50
            rounded-10
            font-Styreneb-Medium
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