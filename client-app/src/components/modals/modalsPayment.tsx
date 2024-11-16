import { InputModal } from "components/InputModal";
import { ButtonViolet } from "components/ButtonViolet";
import { ButtonExit } from "components/ButtonExit";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface IForm {
    number: string
    cardNumber: string
    price: string
}

export const ModalPayment = ({ isOpen }: { isOpen: boolean }): JSX.Element => {
    const [isOpenPayment, setIsOpenPayment] = useState(isOpen);

    const { register, handleSubmit } = useForm<IForm>()

    const handleSubmitFormPayment = (formValue: IForm) => {
        console.log(formValue);
        setIsOpenPayment(false);
    }


    const handleOutsidaClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) {
            setIsOpenPayment(false);
        }
    }

    return (<>
        {isOpenPayment &&
            <div className={`
        absolute
        top-0
        left-0
        w-full
        h-full
        bg-[rgb(80,87,89,0.7)]
        backdrop-blur-[2px]
        flex
        justify-center
        items-center
        
    `
            }
                onClick={() => setIsOpenPayment(false)}>
                <div
                    className="
                w-[30vw] 
                h-[60vh]
                bg-white
                flex
                flex-col 
                justify-between 
                items-center 
                p-[30px] 
                font-bold
                relative">
                    <div className="absolute top-5 right-5">
                        <ButtonExit onClick={handleOutsidaClick} />

                    </div>

                    <div className="text-3xl">
                        Пополнение баланса
                    </div>
                    <form onSubmit={handleSubmit(handleSubmitFormPayment)}>
                        <InputModal
                            title="Номер телефона"
                            type="tel"
                            placeholder="+7 (___) ___-__-__"
                            register={register}
                            id="number"
                            name="number"
                        />

                        <InputModal
                            title="Номер карты"
                            type="number"
                            placeholder="0000 0000 0000 0000"
                            register={register}
                            id="cardNumber"
                            name="cardNumber"
                        />

                        <InputModal
                            title="Сумма пополнения"
                            type="number"
                            placeholder="0 ₽"
                            register={register}
                            id="price"
                            name="price"
                        />
                        <div className="flex justify-center items-center w-full">
                            <ButtonViolet
                                title="Пополнить"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        }
    </>
    )
}