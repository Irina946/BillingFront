import React from "react";

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string,
    // register?: any,
    // value?: string,
    // message?: string,
    // requiredMessage?: string
}

export const InputSearch: React.FC<InputSearchProps> = ({ id }): JSX.Element => {
    return (
        <input
            id={id}
            type="text"
            placeholder="Поиск"
            className="
                    mb-[10px]
                    block
                    border-blackGray 
                    border-[2px] 
                    rounded-[8px] 
                    p-[16px]
                    w-[220px] 
                    h-[50px]
                    font-sans
                    font-bold
                    text-blackGray
                    placeholder:font-normal
                    "
        />


    )
}

