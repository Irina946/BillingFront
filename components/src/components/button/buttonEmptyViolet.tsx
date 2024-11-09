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
            border-[4px]
            w-[150px]
            h-[50px]
            rounded-[10px]
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