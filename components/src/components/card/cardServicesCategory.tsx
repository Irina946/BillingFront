import styles from './card.module.css'
import Arrow from '../../assets/arrowLeft.svg?react';

interface CardTarifCategoryProps {
    title: string,
    count: number,
    onClick?: () => void
}

const selectedEnding = (amount: number) => {
    const lastDigit = amount % 10 // Последняя цифра
  const lastTwoDigits = amount % 100 // Последние две цифры

  if (lastTwoDigits >= 11 && lastTwoDigits <= 20) {
    return "услуг"
  }

  switch (lastDigit) {
    case 1:
      return "услуга"
    case 2:
    case 3:
    case 4:
      return "услуги"
    default:
      return "услуг"
  }
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
                '>{selectedEnding(props.count)}</p>
                    <Arrow className={`pl-[8px] w-[20px] h-[20px] ${styles.rotateArrow}`}/>
                </div>

            </div>

        </button>
    )
}