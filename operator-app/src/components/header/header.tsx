import { Logo } from "components/Logo";
import styles from "./header.module.css"



export const Header = (): JSX.Element => {

    return (
        <div className={styles.header}>
            <Logo size={75} />
            <button
                className="
            font-sans
            font-medium
            text-xl
            text-blackGray
            ">
                Иванов И.И.
            </button>
        </div>
    )
}