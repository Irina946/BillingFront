import { ButtonBigViolet } from './components/button/buttonBig'
import { ButtonBigRed } from './components/button/buttonBigRed'
import { ButtonEmptyRed } from './components/button/buttonEmptyRed'
import { ButtonEmptyViolet } from './components/button/buttonEmptyViolet'
import { ButtonExit } from './components/button/buttonExit'
import { ButtonViolet } from './components/button/buttonViolet'
import { CardBalance } from './components/card/cardBalance'
import { CardServicesCategory } from './components/card/cardServicesCategory'
import { CardTariffs } from './components/card/cardTariffs'
import { InputSearch } from './components/input/inputSearch'
import { Logo } from './components/logo/logo'

function App() {

  return (


    <div className='grid gap-8 grid-cols-1 text-start ml-[38%] mt-[50px] custom-scrollbar'>
      {/* <div>
        <p className='text-2xl text-left mb-[30px]'>Input</p>
        <Input
          type='text'
          placeholder='Placeholder' 
          id='id'
        />
      </div> */}
      <div>
        <p className='text-2xl text-left'>Большая фиолетовая кнопка</p>
        <ButtonBigViolet
          title='Войти'
        />
      </div>
      <div>
        <p className='text-2xl text-left'>Фиолетовая кнопка</p>
        <ButtonViolet
          title='Подключено'
        /></div>
      <div>
        <p className='text-2xl text-left'>Пустая фиолетовая кнопка</p>
        <ButtonEmptyViolet
          title='Отключено'
        /></div>
      <div>
        <p className='text-2xl text-left'>Большая красная кнопка</p>
        <ButtonBigRed
          title='Войти'
        /></div>
      <div>
        <p className='text-2xl text-left'>Пустая красная кнопка</p>
        <ButtonEmptyRed
          title='Отмена'
        /></div>
      <div>
        <p className='text-2xl text-left'>Кнопка выхода</p>
        <ButtonExit />
      </div>
      <div>
        <p className='text-2xl text-left'>Карточка категории тарифа</p>
        <CardServicesCategory
          title='Интернет'
          count='12'
        />
      </div>
      <div>
        <p className='text-2xl text-left'>Логотип</p>
        <Logo size={80} />
      </div>
      <div>
        <p className='text-2xl text-left'>Карточка баланса</p>
        <CardBalance
          user='operator'
          balance={1005.56}
          payment={200}
          date='29.11.2024'
          onClick={() => { }}
        />
      </div>

      <div>
        <p className='text-2xl text-left'>Input</p>
        <InputSearch
          id="1"
        />
      </div>
      <div>
        <p className='text-2xl text-left'>Карточка тарифа</p>
        <CardTariffs
          title='МегаТариф+'
          description='Описание  тарифа. Тариф самый лучший. Можно с ним сделать всё'
          price={100}
        />
      </div>

    </div>

  )
}

export default App
