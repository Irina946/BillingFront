import { Input } from "components/Input";
import { ButtonBigViolet } from "components/ButtonBig";
import { SubmitHandler, useForm } from "react-hook-form";

import { login } from "../../auth/auth";
import { useNavigate } from "react-router";
import Logo from "../../assets/LogoAlfa.svg";


interface IForm {
    number: string
    password: string
}

export const Authorization = (): JSX.Element => {

    const { register, handleSubmit } = useForm<IForm>()

    let navigate = useNavigate();



    const handleLogin: SubmitHandler<IForm> = (formValue) => {

        login(formValue.number, formValue.password)
            .then(() => {
                navigate("/personalAccaunt");
                window.location.reload();
            },
                (error) => {
                    console.log(error);
                });
        
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit(handleLogin)}>
            <Input
                type="tel"
                id="number"
                placeholder="Введите номер телефона"
                register={register}
            />
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

