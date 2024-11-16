import { declension } from "../../function/declension"
import { ButtonBigViolet } from "../button/buttonBig"
import styles from "./card.module.css"

interface cardBalanceProps {
    user: "operator" | "client",
    balance: number,
    payment: number,
    date: string,
    onClick: () => void

}

export const CardBalance = (props: cardBalanceProps): JSX.Element => {
    const stylesCard = props.user === "operator" ? styles.operator : styles.client
    const buttonHidden = props.user === "operator" ? "hidden" : ""
    return (
        <div className={stylesCard}>
            <div className="font-sans font-bold text-4xl leading-9 mb-[5px]">
                Баланс
            </div>
            <div className="font-sans font-bold mb-[5px]">{props.balance} ₽</div>
            <div className="
            font-sans
            font-medium 
            text-xl 
            text-blackGray
             mb-[50px]">Абонентская плата
                <span className="text-black font-bold">
                    {declension(props.payment)}
                </span>
                будет списана
                <span className="text-black font-bold">
                    {` ${props.date}`}
                </span>
            </div>
            <div className={`flex justify-center ${buttonHidden}`}><ButtonBigViolet
                title="Пополнить"
                type="button"
                onClick={props.onClick}
            /></div>
            
        </div>
    )
}