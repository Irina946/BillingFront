import styles from './card.module.css'
import Arrow from '../../assets/arrowLeft.svg?react';

interface CardTarifCategoryProps {
    title: string,
    count: string,
    onClick?: () => void
}



export const CardServicesCategory = (props: CardTarifCategoryProps): JSX.Element => {
    return (
        <button animate-gradient="true" className={styles.animateGradient} onClick={props.onClick}
        >
            <div className={styles.innerContent}>
                <p className='text-2xl text-black font-sans font-bold'>{props.title}</p>
                <div className='flex flex-row items-center justify-start align-middle w-[140px] ml-[12px]'>
                    <p className='
                text-2xl 
                text-blackGray 
                font-sans 
                font-bold'>{props.count} </p>
                    <p className='
                font-sans 
                font-medium 
                text-2xl 
                text-blackGray
                pl-[8px]
                '>услуг</p>
                    <Arrow className={`pl-[8px] w-[20px] h-[20px] ${styles.rotateArrow}`}/>
                </div>

            </div>

        </button>
    )
}