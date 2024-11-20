import { InputSearch } from "components/InputSearch";
import { ButtonBigViolet } from "components/ButtonBig";
import { InputModal } from "components/InputModal";
import { ButtonExit } from "components/ButtonExit";
import styles from "./lk.module.css"
import { useState } from "react";
import { Pagination } from "../../components/paginations/paginations";

const listClient = [
    { 
        name: "Иванов Иван Иванович", 
        number: "+7 999 999 99 01", 
        tarif: "Тариф",
        balance: "100,01",
        personalAccount: "12345-678-9-1011-1213141",
        id: 547831
    },
    {
        name: "Иванова Мария Сергеевна",
        number: "+7 999 999 99 02",
        tarif: "Тариф+",
        balance: "-200,34",
        personalAccount: "54345-978-9-1321-1289641",
        id: 547832
    },
    {
        name: "Иванов Петр Петрович",
        number: "+7 999 999 99 03",
        tarif: "МагеТариф",
        balance: "300,54",
        personalAccount: "22345-678-9-1011-1213142",
        id: 547833
    },
    {
        name: "Иванова Татьяна Алексеевна",
        number: "+7 999 999 99 04",
        tarif: "0 за 0",
        balance: "400,78",
        personalAccount: "97345-978-9-1321-1289642",
        id: 547834
    },
    {
        name: "Иванов Алексей Владимирович",
        number: "+7 999 999 99 05",
        tarif: "Всё включено",
        balance: "500,54",
        personalAccount: "18345-678-9-1011-1213143",
        id: 547835
    },
    {
        name: "Иванова Светлана Николаевна",
        number: "+7 999 999 99 06",
        tarif: "Дайте 2,11",
        balance: "600",
        personalAccount: "98765-678-9-1011-1213144",
        id: 547836
    },
    {
        name: "Иванов Дмитрий Юрьевич",
        number: "+7 999 999 99 07",
        tarif: "50/50",
        balance: "-330,09",
        personalAccount: "65432-678-9-1011-1213145",
        id: 547837
    },
    {
        name: "Иванова Наталья Андреевна",
        number: "+7 999 999 99 08",
        tarif: "Тариф+",
        balance: "80,00",
        personalAccount: "32123-678-9-1011-1213146",
        id: 547838
    },
    {
        name: "Иванов Сергей Викторович",
        number: "+7 999 999 99 09",
        tarif: "Тариф",
        balance: "900,34",
        personalAccount: "45678-678-9-1011-1213147",
        id: 547839
    },
    {
        name: "Иванова Ольга Борисовна",
        number: "+7 999 999 99 10",
        tarif: "Тариф+",
        balance: "111,11",
        personalAccount: "78912-678-9-1011-1213148",
        id: 547840
    },
    {
        name: "Иванов Андрей Игоревич",
        number: "+7 999 999 99 11",
        tarif: "Тариф",
        balance: "1100,12",
        personalAccount: "11223-678-9-1011-1213149",
        id: 547841
    },
    {
        name: "Иванова Людмила Федоровна",
        number: "+7 999 999 99 12",
        tarif: "Тариф+",
        balance: "46,01",
        personalAccount: "18913-678-9-1011-1213150",
        id: 547842
    },
    {
        name: "Иванов Даниил Васильевич",
        number: "+7 999 999 99 13",
        tarif: "Тариф",
        balance: "1300,12",
        personalAccount: "43432-678-9-1011-1213151",
        id: 547843
    },
    {
        name: "Иванова Кристина Ильинична",
        number: "+7 999 999 99 14",
        tarif: "Тариф+",
        balance: "1400,44",
        personalAccount: "56789-678-9-1011-1213152",
        id: 547844
    },
    {
        name: "Иванов Виктор Андреевич",
        number: "+7 999 999 99 15",
        tarif: "Тариф",
        balance: "1500,12",
        personalAccount: "67890-678-9-1011-1213153",
        id: 547845
    },
    {
        name: "Иванова Анастасия Андреевна",
        number: "+7 999 999 99 16",
        tarif: "Тариф+",
        balance: "1600,45",
        personalAccount: "78901-678-9-1011-1213154",
        id: 547846
    },
    {
        name: "Иванов Михаил Дмитриевич",
        number: "+7 999 999 99 17",
        tarif: "Тариф",
        balance: "1700,44",
        personalAccount: "89012-678-9-1011-1213155",
        id: 547847
    },
    {
        name: "Иванова Елена Валерьевна",
        number: "+7 999 999 99 18",
        tarif: "Тариф+",
        balance: "1800,12",
        personalAccount: "90123-678-9-1011-1213156",
        id: 547848
    },
    {
        name: "Иванов Тимур Сергеевич",
        number: "+7 999 999 99 19",
        tarif: "Тариф",
        balance: "1900,67",
        personalAccount: "11234-678-9-1011-1213157",
        id: 547849
    }
];

export const Lk = (): JSX.Element => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const hendleOpenModal = () => setIsOpenModal(true);

    const hendleCloseModal = () => setIsOpenModal(false);

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) {
            setIsOpenModal(false);
        }
    }

    return (
        <div className={`py-[45px] px-[70px] font-sans ${styles.customScrollbar}`}>
            <div className="flex justify-between items-end mb-[45px]">
                <InputSearch />
                <ButtonBigViolet title="Добавить пользователя"
                    onClick={hendleOpenModal}
                />
            </div>
            <div className={`${styles.tableBg} relative`}>
                <div className="border-b-[5px] px-[70px] py-[30px] flex justify-between border-violet text-black text-2xl font-bold">
                    <div>ФИО</div>
                    <div className="flex justify-between w-[50%]">
                        <div>Номер</div>
                        <div>Тариф</div>
                        <div>Баланс</div>

                    </div>

                </div>
                <div className="p-[45px] pt-[15px]">

                    <Pagination listClient={listClient} />
                    </div>
            </div>

            {isOpenModal && <div className={styles.modalBG} onClick={handleOutsideClick}>
                <div className={styles.modal} >
                    <div className="absolute top-5 right-5">
                        <ButtonExit onClick={() => setIsOpenModal(false)} />
                    </div>
                    <div className="font-bold text-black text-3xl">Создать пользователя</div>
                    <form>
                        <InputModal
                            type="text"
                            placeholder="Иванов Иван Иванович"
                            id="fullName"
                            title="ФИО клиента"
                        />
                        <InputModal
                            type="tel"
                            placeholder="+7 999 999 99 99"
                            id="number"
                            title="Номер телефона"
                        />
                        <InputModal
                            type="text"
                            placeholder="Не выбрано"
                            id="tariff"
                            title="Тариф"
                        />
                        <InputModal
                            type="text"
                            placeholder="11111-111-1-1111-1111111"
                            id="personalAccount"
                            title="Лицевой счет"
                        />



                    </form>
                    <ButtonBigViolet
                        title="Создать"
                        onClick={hendleCloseModal}
                    />

                </div>


            </div>}

        </div>
    )
}

