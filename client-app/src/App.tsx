import { Authorization } from "./pages/authorization/authoritzation";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { PersonalAccaunt } from "./pages/personalAccaunt/personalAccaunt";
import { Header } from "./components/header/header";
import { Tariffs } from "./pages/tariffs/tariffs";
import { ServicesCategory } from "./pages/services/servicesCategory";
import { History } from "./pages/history/history";
import { Services } from "./pages/services/services";

const Navigate = () => {
  const navigateList = [
    {
      name: "Главная",
      path: "/personalAccaunt"
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
        <Route path="/personalAccaunt" element={<PersonalAccaunt />} />
        <Route path="/tariffs" element={<Tariffs />} />
        <Route path="/services" element={<ServicesCategory />} />
        <Route path="/history" element={<History />} />
        <Route path="/services/:id" element={<Services />} />
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
