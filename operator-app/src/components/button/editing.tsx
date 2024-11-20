import Editing from "../../assets/editing.svg?react";

interface ButtonEditingProps {
    onClick: () => void
}

export const ButtonEditing = (props: ButtonEditingProps): JSX.Element => {
    return (
        <button className="mr-[15px]"
        onClick={props.onClick}>
            <Editing />
        </button>
    )
}