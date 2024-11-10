import styles from './card.module.css'
import Arrow from '../../assets/arrowLeft.svg?react';

interface CardTarifCategoryProps {
    title: string,
    count: string
}



export const CardTarifCategory = (props: CardTarifCategoryProps): JSX.Element => {
    return (
        <button animate-gradient="true" className={styles.animateGradient}
        >
            <div className={styles.innerContent}>
                <p className='text-2xl text-black font-Styreneb-Bold font-bold'>{props.title}</p>
                <div className='flex flex-row items-center justify-center w-auto'>
                    <p className='
                text-2xl 
                text-blackGray 
                font-Styreneb-Bold 
                font-bold'>{props.count} </p>
                    <p className='
                font-Styreneb-Medium 
                font-medium 
                text-2xl 
                text-blackGray
                pl-[8px]
                '>услуг</p>
                    <Arrow className='pl-[8px] w-[20px] h-[20px]'/>
                </div>

            </div>

        </button>
    )
}