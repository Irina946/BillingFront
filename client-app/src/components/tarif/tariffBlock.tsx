import React, { useState, useEffect } from 'react';

const TariffBlock = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Блок исчезнет через 3 секунды

        return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }, []);

    return (
        <>
            {isVisible && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-60 bg-gray'>
                    <div className='p-[25px] bg-blue rounded-md absolute top-[50%] right-[33%] w-[500px] h-[100px] text-center text-3xl'>
                        Тариф подключен
                    </div>
                </div>
            )}
        </>
    );
};

export default TariffBlock;