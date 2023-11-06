import "./App.css";
import { Routes, Route } from "react-router-dom";
import Galeria from "./pages/Galeria";
import SlideShow from "./pages/SlideShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Obra from "./pages/Obra";

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/slide-show" element={<SlideShow />} />
        <Route path="/obras/:obra" element={<Obra />} />
      </Routes>
      <Footer />
    </>
  );
}
