import { useForm } from "react-hook-form"
import { Input } from "../input/input"
import { ButtonBigViolet } from "../button/buttonBig"

interface FormAuthorizationClientProps {
    onSubmit: () => {}
}

export const FormAuthorizationClient = (props: FormAuthorizationClientProps): JSX.Element => {
    const { register, handleSubmit } = useForm()
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <Input
                type="tel"
                id="tel"
                placeholder="Введите номер телефона"
                {...register('tel')}
            />
            <Input
                type="password"
                id="password"
                placeholder="Введите пароль"
                {...register('password')}
            />
            <ButtonBigViolet
                title="Войти"
                type="submit"
            />
        </form>
    )
}