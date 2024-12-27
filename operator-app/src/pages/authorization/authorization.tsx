import { Input } from "components/Input";
import { ButtonBigViolet } from "components/ButtonBig";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login } from "../../auth/auth";
import { Logo } from "components/Logo";

interface IForm {
    email: string,
    password: string
}

export const Authorization = (): JSX.Element => {
    const { register, handleSubmit } = useForm<IForm>()

    let navigate = useNavigate();

    const handleLogin: SubmitHandler<IForm> = (formValue) => {

        login(formValue.email, formValue.password)
            .then(() => {
                navigate("/lk");
                window.location.reload();
            },
                (error) => {
                    console.log(error);
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
                <ButtonBigViolet
                    title="Войти"
                    type="submit"
                />
            </form>
        </div>
    )
}