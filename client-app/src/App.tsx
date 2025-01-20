import { Authorization } from "./pages/authorization/authoritzation";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { PersonalAccaunt } from "./pages/personalAccaunt/personalAccaunt";
import { Header } from "./components/header/header";
import { Tariffs } from "./pages/tariffs/tariffs";
import { ServicesCategory } from "./pages/services/servicesCategory";
import { History } from "./pages/history/history";
import { Services } from "./pages/services/services";
import PrivateRoute from "./auth/PrivateRoute";

const Navigate = () => {
  const navigateList = [
    {
      name: "Главная",
      path: "/profile"
    },
    {
      name: "Тарифы",
      path: "/tariffs"
    },
    {
      name: "Услуги",
      path: "/services"
    },
    {
      name: "История",
      path: "/history"
    }
  ]

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== '/login' && location.pathname !== '*' && <Header navigatePath={navigateList} />}
      <Routes>
        <Route path="/login" element={<Authorization />} />
        <Route path='/' element={<Authorization />} />
        <Route path="/profile" element={<PrivateRoute component={PersonalAccaunt} />} />
        <Route path="/tariffs" element={<PrivateRoute component={Tariffs} />} />
        <Route path="/services" element={<PrivateRoute component={ServicesCategory} />} />
        <Route path="/history" element={<PrivateRoute component={History} />} />
        <Route path="/services/:title" element={<PrivateRoute component={Services} />} />
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
