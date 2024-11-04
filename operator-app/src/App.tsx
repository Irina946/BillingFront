import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Authorization } from './pages/authorization/authorization';
import { Lk } from './pages/lk/lk';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authorization />} />
        <Route path='/lk'  element={<Lk />} />
        <Route path="*" element={<div>404... not found </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
