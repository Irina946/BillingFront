import './gradient.css'
import Arrow from '../../assets/arrowLeft.svg?react';

interface CardTarifCategoryProps {
    title: string,
    count: string
}



export const CardTarifCategory = (props: CardTarifCategoryProps): JSX.Element => {
    return (
        <button className="
        animate-gradient
        ">
            <div className="
                inner-content
            ">
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
                pl-8
                '>услуг</p>
                    <Arrow className='pl-8 w-20 h-20'/>
                </div>

            </div>

        </button>
    )
}