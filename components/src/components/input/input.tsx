import React from "react";
import styles from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string
    placeholder: string
    id: string,
    register?: any,
    value?: string,
    message?: string,
    requiredMessage?: string
}

export const Input: React.FC<InputProps> = (
    { type,
        placeholder,
        id,
        value,
        register,
        message,
        requiredMessage,
        ...rest }): JSX.Element => {
    return (
        <div className="relative mb-6">
            <input
                id={id}
                type={type}
                placeholder=""
                className={`${styles.inputEntry} peer`}
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
                className={styles.labelEntry}
            >{placeholder}</label>
        </div>

    )
}

