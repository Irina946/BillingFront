import { useState } from 'react'
import { ButtonEmptyViolet } from '../button/buttonEmptyViolet'
import styles from './card.module.css'
import { ButtonExit } from '../button/buttonExit'
import { ButtonBigViolet } from '../button/buttonBig'

interface CardTariffProps {
    title: string,
    description: string,
    price: number
}

export const CardTariffs = (props: CardTariffProps): JSX.Element => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    return (
        <div className={styles.cardTarif}>
            <div className='text-4xl font-bold'>
                {props.title}
            </div>
            <div className='text-sm font-bold text-gray'>
                {props.description}
            </div>
            <div className="text-2xl text-blackGray font-medium">300 минут</div>
            <div className="text-2xl text-blackGray font-medium">3000 ГБ</div>
            <div className="text-2xl text-blackGray font-medium">100 СМС</div>
            <div className='flex justify-between w-full items-center'>
                <div className='text-2xl font-bold'>{props.price} <span className="text-blackGray font-medium text-lg">руб/мес</span></div>
                <ButtonEmptyViolet
                    title='Подключить'
                    onClick={handleOpenModal}
                />
            </div>
            {isOpenModal &&
                <div className='
                    fixed
                    top-0
                    left-0
                    w-full
                    h-lvh
                    bg-[rgb(80,87,89,0.7)]
                    backdrop-blur-[2px]
                    flex
                    justify-center
                    items-center'
                    onClick={() => setIsOpenModal(false)}>
                    <div className='
                        w-[35vw] 
                        h-[80vh]
                        min-w-[500px]
                        min-h-[640px]
                        bg-white
                        flex
                        flex-col 
                        justify-between 
                        items-start 
                        py-[45px]
                        px-[30px] 
                        font-bold
                        relative
                        '>
                        <div className="absolute top-5 right-5">
                            <ButtonExit onClick={() => setIsOpenModal(false)} />
                        </div>
                        <div className='text-4xl font-bold'>
                            {props.title}
                        </div>
                        <div className='text-xl font-medium text-blackGray'>
                            {props.description}
                        </div>
                        <div className="
                        place-self-start
                        text-blackGray 
                        font-medium 
                        text-xl 
                        border-y-[3px] 
                        border-gray 
                        w-[calc(35vw-20px)] 
                        min-w-[480px] 
                        py-[15px] 
                        -ml-[20px] 
                        px-[20px]">
                            Абонентская плата
                            <p className="pt-[15px] text-6xl font-bold text-black">{props.price} ₽ <span className="text-4xl font-medium">в месяц</span></p>
                        </div>
                        <div className='text-4xl font-bold'>
                            В тариф входит
                        </div>
                        <div className="text-3xl text-blackGray font-medium">300 минут</div>
                        <div className="text-3xl text-blackGray font-medium">3000 ГБ</div>
                        <div className="text-3xl text-blackGray font-medium">100 СМС</div>
                        <div className='self-center'>
                            <ButtonBigViolet
                            title={`Подключить за ${props.price} ₽`}
                            onClick={() => setIsOpenModal(false)}
                        />
                        </div>

                    </div>


                </div>}
        </div>
    )
}