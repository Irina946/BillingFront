import './App.css'
import { ButtonBigViolet } from './components/button/buttonBig'
import { FormAuthorizationClient } from './components/form/formAuthorizationClient'
import { Input } from './components/input/input'

function App() {

  return (
    <>

        <Input 
        type='string' 
        placeholder='Введите номер телефона'
        id='tel'
      />

        <ButtonBigViolet 
        title='Войти'
      />

      <FormAuthorizationClient onSubmit={function (): {} {
        throw new Error('Function not implemented.')
      } } />

      
    </>
   
  )
}

export default App
