import { Logo } from "components/Logo";
import styles from "./header.module.css"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";



export const Header = (): JSX.Element => {
    const navigate = useNavigate();
    const [isClick, setIsClick] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Закрываем dropdown при клике вне его
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsClick(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.header}>
            <Logo size={75} />
            <button
                className="
            font-sans
            font-medium
            text-xl
            text-blackGray
            "
                onClick={() => setIsClick(true)}
            >
                Иванов И.И.
            </button>
            {isClick && (
                <div className="absolute 
            right-[35px] 
            top-[55px] 
            bg-white 
            border-[1px] 
            border-gray 
            w-[130px]
            h-[50px]
            p-[10px]
            flex 
            items-center 
            justify-center
            "
            ref={dropdownRef}
            >
                    <button className={styles.navigateLink} onClick={() => navigate("/")}>
                        Выход
                    </button>
                </div>
            )}

        </div>
    )
}