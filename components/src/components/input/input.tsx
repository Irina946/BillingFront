import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string
    placeholder: string
    id: string,
    register?: any,
    value?: string,
    message?: string,
    requiredMessage?: string
}

export const Input: React.FC<InputProps> = ({ type, placeholder, id, register, value, message, requiredMessage, ...rest }): JSX.Element => {
    return (
        <div className="relative mb-6">
            <input
                id={id}
                type={type}
                placeholder=""
                className="
                    mb-[10px]
                    block
                    border-blackGray 
                    border-[2px] 
                    rounded-[8px] 
                    p-[16px]
                    w-[325px] 
                    h-[50px]
                    font-sans
                    font-bold
                    text-blackGray
                    text-lg
                    focus:border-[4px]
                    hover:border-[4px]
                    active:border-[4px]
                    placeholder:text-gray
                    placeholder-transparent
                    peer
                    "
                required
                {...register(id, {
                    required: requiredMessage,
                    pattern: {
                        value: value,
                        message: message,
                    }
                })}
                {...rest}
            />
            <label
                htmlFor={id}
                className="
                absolute
                left-4
                -top-1.5
                text-gray
                font-sans
                font-medium
                text-lg
                transition-all
                duration-200
                transform
                -translate-y-6
                peer-placeholder-shown:top-9
                peer-placeholder-shown:left-4
                peer-placeholder-shown:text-gray
                peer-focus:-translate-y-8
                peer-focus:text-blackGray
                peer-focus:top-0
                "
            >{placeholder}</label>
        </div>

    )
}

