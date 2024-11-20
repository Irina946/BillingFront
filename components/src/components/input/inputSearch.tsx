import React from "react";
import styles from './input.module.css'

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string,
    // register?: any,
    // value?: string,
    // message?: string,
    // requiredMessage?: string
}

export const InputSearch: React.FC<InputSearchProps> = ({ id }): JSX.Element => {
    return (
        <label htmlFor={id} className="font-sans font-medium text-xl color-black">
            Введите ФИО, номер телефона или лицевого счета
            <input
                id={id}
                type="text"
                placeholder="Поиск"
                className={styles.search}
            />
        </label>


    )
}

