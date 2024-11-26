import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Authorization } from './pages/authorization/authorization';
import { Lk } from './pages/lk/lk';
import { Header } from './components/header/header';
import { ClientPage } from './pages/client/client';
import { Tariffs } from './pages/tariffs/tariffs';
import { ServicesCategory } from './pages/services/servicesCategory';
import { Services } from './pages/services/services';

function Navigate() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/login" element={<Authorization />} />
        <Route path="/" element={<Authorization />} />
        <Route path='/lk'  element={<Lk />} />
        <Route path="/:id" element={<ClientPage />} />
        <Route path="/:id/tariffs" element={<Tariffs />} />
        <Route path="/:id/services" element={<ServicesCategory />} />
        <Route path="/:idClient/services/:idCategory" element={<Services />} />
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
