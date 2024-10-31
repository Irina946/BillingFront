import './App.css'
import { ButtonBigViolet } from './components/button/buttonBig'
import { Input } from './components/input/input'

function App() {

  return (
    <>
      <Input 
        type='string' 
        placeholder='Введите номер телефона'
      />
      <ButtonBigViolet 
        title='Войти'
      />
    </>
  )
}

export default App
