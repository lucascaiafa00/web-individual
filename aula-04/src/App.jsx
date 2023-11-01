import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/:naosei" element={<Login />} />
      <Route path="/:nome" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
    </>
  );
}

export default App;
