interface ButtonEmptyVioletProps {
    title: string,
    type?: "submit" | "reset" | "button"
}


export const ButtonEmptyViolet = (props: ButtonEmptyVioletProps): JSX.Element => {
    return (
        <button
        className="
            bg-white
            text-violet
            border-violet
            border-4
            w-150
            h-50
            rounded-10
            font-Styreneb-Bold
            font-bold
            text-lg
            align-middle
            focus:bg-violet
            focus:text-white
            hover:bg-violet
            hover:text-white
            active:bg-buttonVioletFocus
            active:border-buttonVioletFocus
        "
        type={props.type}
        >
            {props.title}
        </button>
    )
}