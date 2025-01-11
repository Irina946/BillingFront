import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Authorization } from './pages/authorization/authorization';
import { Lk } from './pages/lk/lk';
import { Header } from './components/header/header';
import { ClientPage } from './pages/client/client';
import { Tariffs } from './pages/tariffs/tariffs';
import { ServicesCategory } from './pages/services/servicesCategory';
import { Services } from './pages/services/services';
import PrivateRoute from './auth/PrivateRoute';

function Navigate() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/login" element={<Authorization />} />
        <Route path="/" element={<Authorization />} />
        <Route path='/profile'  element={<PrivateRoute component={Lk} />} />
        <Route path="/:id" element={<PrivateRoute component={ClientPage} />} />
        <Route path="/:id/tariffs" element={<PrivateRoute component={Tariffs} />} />
        <Route path="/:id/services" element={<PrivateRoute component={ServicesCategory} />} />
        <Route path="/:idClient/services/:title" element={<PrivateRoute component={Services} />} />
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
