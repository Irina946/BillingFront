import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Authorization } from './pages/authorization/authorization';
import { Lk } from './pages/lk/lk';
import { Header } from './components/header/header';

function Navigate() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/login" element={<Authorization />} />
        <Route path="/" element={<Authorization />} />
        <Route path='/lk'  element={<Lk />} />
        <Route path="*" element={<div>404... not found </div>} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>
  )
}

export default App
