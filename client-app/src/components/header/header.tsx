import { Link, useLocation } from "react-router-dom"
import { Logo } from "components/Logo";
import styles from "./header.module.css"

interface navigatePath {
    name: string,
    path: string
}

interface HeaderProps {
    navigatePath: navigatePath[]
}

export const Header = (props: HeaderProps): JSX.Element => {
    const navigatePath = props.navigatePath

    const location = useLocation();

    return (
        <div className={`${styles.header} h-[90px] w-full flex justify-between items-center pl-[15px] pr-[40px]`}>
            <Logo size={75} />
            <div
                className="flex 
            justify-between 
            items-center 
            w-[40%] 
            font-Styreneb-Medium 
            font-medium
            text-xl
            text-blackGray
            ">
                {navigatePath
                    .map((item, index) =>
                        <Link
                            to={item.path}
                            key={index}
                            className={`${styles.navigatiLink} ${location.pathname === item.path ? styles.activeLink : ''}`}
                        >
                            {item.name}
                        </Link>
                    )}
            </div>
        </div>
    )
}