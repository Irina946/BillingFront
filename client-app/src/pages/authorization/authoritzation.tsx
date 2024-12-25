import { Input } from "components/Input";
import { ButtonBigViolet } from "components/ButtonBig";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./authorization.module.css";
import { login } from "../../auth/auth";
import { useNavigate } from "react-router";
import { Logo } from "components/Logo";
import { useState } from "react";


interface IForm {
    number: string
    password: string
}

interface User {
    id: number;
    login_number: string;
    name: string;
    patronymic: string;
    surname: string;
    role: string;
}

export const Authorization = (): JSX.Element => {

    const { register, handleSubmit, formState } = useForm<IForm>()

    const numberError = formState.errors["number"]?.message;

    let navigate = useNavigate();



    const handleLogin: SubmitHandler<IForm> = (formValue) => {

        login(formValue.number, formValue.password)
            .then((user) => {
                navigate("/personalAccaunt", {state: {user} });
            },
                (error) => {
                    console.log(error);
                });

    }

    return (
        <div className={styles.container}>
            <div className="absolute top-[20px] left-[20px]">
                <Logo size={125} />
            </div>
            <div className="font-Styreneb-Bold font-bold text-3xl mb-10">
                Войдите в личный кабинет
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-[10px]">
                <Input
                    type="tel"
                    id="number"
                    placeholder="Введите номер телефона"
                    register={register}
                    value="/^7[0-9]{10}$/"
                    message="Номер телефона должен начинаться с 7 и состоять из 11 цифр"
                    requiredMessage="Введите номер телефона"
                />
                {numberError && <p>{numberError}</p>}
                <Input
                    type="password"
                    id="password"
                    placeholder="Введите пароль"
                    register={register}
                />
                <ButtonBigViolet
                    title="Войти"
                    type="submit"
                />
            </form>
        </div>
    )
}

