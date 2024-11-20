import React from "react";

interface InputModalProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string
    placeholder: string
    id: string,
    title: string
    // register?: any,
    // value?: string,
    // message?: string,
    // requiredMessage?: string
}

export const InputModal: React.FC<InputModalProps> = ({ type, placeholder, id, title, ...rest }): JSX.Element => {
    return (
        <div className="relative mb-6 font-sans">
            <label
                htmlFor={id}
                className="
                text-blackGray
                font-normal
                text-xl
                "
            >{title}
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className="
                    my-[10px]
                    block
                    border-blackGray 
                    border-[2px] 
                    rounded-[8px] 
                    p-[16px]
                    w-[400px] 
                    h-[50px]
                    font-medium
                    text-blackGray
                    text-lg
                    focus:border-[4px]
                    hover:border-[4px]
                    active:border-[4px]
                    placeholder:text-gray
                    placeholder:font-normal
                    "
                    required
                // {...register(id, {
                //     required: requiredMessage,
                //     pattern: {
                //         value: value,
                //         message: message,
                //     }
                // })}
                {...rest}
                />
            </label>
        </div>

    )
}

