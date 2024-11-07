import Exit from '../../assets/exit.svg?react';

export const ButtonExit = (): JSX.Element => {
    return (
        <button
            className="
            bg-inherit
            w-max
        "
        >
            <Exit className='
            stroke-red
            hover:stroke-buttonRedFocus 
            focus:stroke-buttonRedFocus 
            active:stroke-red' />
        </button>
    )
}