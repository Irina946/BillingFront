import Exit from '../../assets/exit.svg?react';

interface ButtonExitProps {
    onClick?: () => void
}


export const ButtonExit = (props: ButtonExitProps): JSX.Element => {
    return (
        <button
            className="
            bg-inherit
            w-max
        "
        onClick={props.onClick}
        >
            <Exit className='
            stroke-red
            hover:stroke-buttonRedFocus 
            focus:stroke-buttonRedFocus 
            active:stroke-red' />
        </button>
    )
}