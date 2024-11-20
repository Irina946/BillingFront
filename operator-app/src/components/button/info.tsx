import Info from "../../assets/info.svg?react";

interface ButtonInfoProps {
    onClick: () => void
}

export const ButtonInfo = (props: ButtonInfoProps): JSX.Element => {
    return (
        <button className="ml-[15px]"
        onClick={props.onClick}>
            <Info />
        </button>
    )
}