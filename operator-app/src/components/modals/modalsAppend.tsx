import { ButtonBigViolet } from "components/ButtonBig";
import { InputModal } from "components/InputModal";
import { ButtonExit } from "components/ButtonExit";
import styles from "./modals.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { IClientInfo, IRegisterClient } from "../../requests/interface";
import { InputModalNoMask } from "../input/input";
import { postRegisterClient } from "../../requests/requests";
import { useState } from "react";
import { useNavigate } from "react-router";

interface ModalAppendProps {
    onClose: () => void;
}

const generateContractNumber = (): string => {
    const min = BigInt("11111111111111111111");
    const max = BigInt("99999999999999999999");
    const range = max - min + BigInt(1);
    const randomBigInt = BigInt(Math.floor(Math.random() * Number(range))) + min;
    return randomBigInt.toString();
};

export const ModalsAppend = (props: ModalAppendProps): JSX.Element => {
    const { register, handleSubmit } = useForm<IClientInfo>();
    const [newClient, setNewClient] = useState<IRegisterClient | null>()
    const navigate = useNavigate()

    const handleOutsideClick = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    };

    const handleClient: SubmitHandler<IClientInfo> = async (
        formValue: IClientInfo
    ) => {
        try {
            const data = await postRegisterClient(formValue);
            setNewClient(data);
            window.location.reload();

              navigate(`/:${newClient?.id}`)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.modalBG} onClick={handleOutsideClick}>
            <div className={`${styles.modal} justify-center`}>
                <div className="absolute top-5 right-5">
                    <ButtonExit onClick={props.onClose} />
                </div>
                <div className="font-bold text-black text-3xl mb-[10px]">
                    Создать пользователя
                </div>
                <form
                    className="flex flex-wrap justify-between w-[400px]"
                    onSubmit={handleSubmit(handleClient)}
                >
                    <InputModalNoMask
                        type="text"
                        placeholder="Иванов"
                        id="surname"
                        title="Фамилия"
                        register={register}
                        width="small"
                    />
                    <InputModalNoMask
                        type="text"
                        placeholder="Иван"
                        id="name"
                        title="Имя"
                        register={register}
                        width="small"
                    />
                    <InputModalNoMask
                        type="text"
                        placeholder="Иванович"
                        id="patronymic"
                        title="Отчетво"
                        register={register}
                    />

                    <InputModal
                        type="tel"
                        placeholder="9999999999"
                        id="number"
                        title="Номер телефона"
                        register={register}
                        width="small"
                        mask="9999999999"
                    />
                    <InputModal
                        type="text"
                        placeholder="1111 111111"
                        id="passport"
                        title="Паспорт"
                        register={register}
                        width="small"
                        mask="9999 999999"
                    />
                    <InputModal
                        type="text"
                        placeholder="11111-111-1-1111-1111111"
                        id="contract_number"
                        title="Лицевой счет"
                        register={register}
                        mask="99999-999-9-9999-9999999"
                        valueInput={generateContractNumber()}
                    />
                    <InputModalNoMask
                        type="password"
                        placeholder=""
                        id="password"
                        title="Пароль"
                        register={register}
                        name="password"
                    />
                    <div className="ml-[35px]"><ButtonBigViolet title="Создать" type="submit" /></div>

                </form>
            </div>
        </div>
    );
};
