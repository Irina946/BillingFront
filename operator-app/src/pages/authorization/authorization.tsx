import { Input } from "components/Input";
import { ButtonBigViolet } from "components/ButtonBig";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login } from "../../auth/auth";
import { Logo } from "components/Logo";
import { useState } from "react";
import { AxiosError } from "axios";

interface IForm {
    email: string,
    password: string
}

export const Authorization = (): JSX.Element => {
    const { register, handleSubmit } = useForm<IForm>()
    const [error, setError] = useState<number | undefined>(undefined);


    let navigate = useNavigate();

    const handleLogin: SubmitHandler<IForm> = (formValue) => {

        login(formValue.email, formValue.password)
            .then(() => {
                navigate("/profile");
                window.location.reload();
            },
                (error: AxiosError) => {
                    setError(error.response?.status);
                })
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <div className="absolute top-[20px] left-[20px]">
                <Logo size={125} />
            </div>
            <div className="fons-sans font-bold text-3xl mb-[30px]">
                Войдите в личный кабинет
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-[10px]">
                <Input
                    type="email"
                    id="email"
                    placeholder="Введите email"
                    register={register}
                />
                <Input
                    type="password"
                    id="password"
                    placeholder="Введите пароль"
                    register={register}
                />
                {error === 422 && <div className="text-red text-center font-bold -mt-[30px] mb-[10px] text-2xl">Такого пользователя не существует</div>}
                {error === 400 && <div className="text-red text-center font-bold -mt-[30px] mb-[10px] text-2xl">Неправильный пароль</div>}
                <ButtonBigViolet
                    title="Войти"
                    type="submit"
                />
            </form>
        </div>
    )
}