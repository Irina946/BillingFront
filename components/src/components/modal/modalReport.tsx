import { ButtonBigViolet } from '../button/buttonBig';
import { ButtonExit } from '../button/buttonExit';
import { InputDate } from '../input/inputDate';
import styles from './modal.module.css'

interface ModalReportProps {
    onClose: () => void
}

export const ModalReport = (props: ModalReportProps): JSX.Element => {
    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) {
            props.onClose()
        }
    }
    return (
        <div className={styles.modalBG} onClick={handleOutsideClick}>
            <div className={`${styles.modal} ${styles.modalReport}`}>
                <div className="absolute top-5 right-5">
                    <ButtonExit onClick={props.onClose} />
                </div>
                <div className="text-4xl font-bold">Получить отчёт</div>
                <div>
                    Выберите период
                    <div className='flex justify-between items-center w-[490px] mt-[15px]'>
                        <InputDate
                            label='Начало'
                            id='startDate'
                        />
                        <div className="w-[20px] h-[2px] bg-blackGray mt-[40px]"></div>
                        <InputDate
                            label='Конец'
                            id='endDate'
                        />
                    </div>
                </div>
                <div className='self-center mt-[30px]'>

                    <ButtonBigViolet
                        title="Сформировать отчет"
                        onClick={props.onClose}
                    />

                </div>
            </div>
        </div>
    );
};