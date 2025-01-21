import { ButtonViolet } from "components/ButtonViolet";
import { ButtonEmptyRed } from "components/ButtonEmptyRed";
import { InputModal } from "components/InputModal";
import { ButtonExit } from "components/ButtonExit";
import styles from "./card.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postPayment } from "../../request/requests";

interface IForm {
    number: string;
    cardNumber: string;
    amount: string;
}

export const NoMoneyCard = () => {
    const [isOpenPayment, setIsOpenPayment] = useState(false);

    const { register, handleSubmit } = useForm<IForm>();

    const numberId = Number(localStorage.getItem("number_id"));
    const number = localStorage.getItem("number");

    const handleOpenModalFormPayment = (): void => {
        setIsOpenPayment(true);
    };

    const handleOutsideClick = (
        event: React.MouseEvent<HTMLDivElement>
    ): void => {
        if (event.target === event.currentTarget) {
            setIsOpenPayment(false);
        }
    };

    const handleSubmitFormPayment = async (formValue: IForm) => {
        const amount = formValue.amount.slice(0, -2)
        await postPayment(numberId, Number(amount));
        setIsOpenPayment(false);
    };

    return (
        <div className={styles.modalBG}>
            <div className="bg-white text-xl p-5 rounded-xl">
                Недостаточно средств. Хотите пополнить баланс?
                <div className="flex justify-around mt-4">
                    <ButtonViolet title='Пополнить' onClick={handleOpenModalFormPayment} />
                    <ButtonEmptyRed title='Отмена' />
                </div>
            </div>
            {isOpenPayment && (
                <div className={styles.modalBG} onClick={handleOutsideClick}>
                    <div className="w-[475px]
                                    h-[500px]
                                    bg-white
                                    flex
                                    flex-col 
                                    justify-between 
                                    items-start 
                                    py-[45px]
                                    px-[30px] 
                                    font-bold
                                    relative">
                        <div className="absolute top-5 right-5">
                            <ButtonExit onClick={() => setIsOpenPayment(false)} />
                        </div>
                        <div className="text-3xl">Пополнение баланса</div>
                        <form onSubmit={handleSubmit(handleSubmitFormPayment)}>
                            <InputModal
                                title="Номер телефона"
                                type="tel"
                                placeholder="+7 (___) ___-__-__"
                                mask="+7 (999) 999-99-99"
                                valueInput={number}
                                register={register}
                                id="number"
                                name="number"
                            />

                            <InputModal
                                title="Номер карты"
                                type="string"
                                placeholder="0000 0000 0000 0000"
                                mask="9999 9999 9999 9999"
                                register={register}
                                id="cardNumber"
                                name="cardNumber"
                            />

                            <InputModal
                                title="Сумма пополнения"
                                type="string"
                                placeholder="0 "
                                mask="999 ₽"
                                register={register}
                                id="amount"
                                name="amount"
                            />
                            <div className="flex justify-center items-center w-full">
                                <ButtonViolet title="Пополнить" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
} 