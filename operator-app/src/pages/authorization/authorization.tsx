import { Input } from "components/Input";
import { ButtonBigViolet } from "components/ButtonBig";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login } from "../../auth/auth";

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
        <form onSubmit={handleSubmit(handleLogin)}>
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
    )
}