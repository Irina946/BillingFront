import React from "react";
import styles from './input.module.css'

interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string,
    label: string
    // register?: any,
    // value?: string,
    // message?: string,
    // requiredMessage?: string
}

export const InputDate: React.FC<InputDateProps> = ({ id, label }): JSX.Element => {
    return (
        <label htmlFor={id} className="font-sans font-medium text-xl color-black">
            {label}
            <input
                id={id}
                type="date"
                placeholder="Поиск"
                className={styles.InputDate}
            />
        </label>


    )
}

