import { Input } from "components/Input";
import './App.css'
import { Authorization } from "./pages/authorization/authoritzation";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersonalAccaunt } from "./pages/personalAccaunt/personalAccaunt";

const App = observer(() => {
  useEffect(() => {
    
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authorization />} />
        <Route path="/personalAccaunt" element={<PersonalAccaunt />} />
        <Route path="*" element={<div>404... not found </div>} />
      </Routes>

    </BrowserRouter>
  )
})

export default App
