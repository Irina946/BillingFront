import { ButtonBigViolet } from './components/button/buttonBig'
import { ButtonBigRed } from './components/button/buttonBigRed'
import { ButtonEmptyRed } from './components/button/buttonEmptyRed'
import { ButtonEmptyViolet } from './components/button/buttonEmptyViolet'
import { ButtonExit } from './components/button/buttonExit'
import { ButtonViolet } from './components/button/buttonViolet'
import { CardTarifCategory } from './components/card/cardTarifCategory'
import { Logo } from './components/logo/logo'

function App() {

  return (
    <div className='grid gap-8 grid-cols-1 text-start'>

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
        <CardTarifCategory
          title='Интернет'
          count='12'
        />
      </div>
      <div>
        <p className='text-2xl text-left'>Логотип</p>
        <Logo size={80}/>
      </div>
    </div>

  )
}

export default App
