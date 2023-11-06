import { useState } from "react";
import { Link } from "react-router-dom";
import obras from "../Obras";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const [pesquisa, setPesquisa] = useState("");
  const [resultado, setResultado] = useState([]);

  function handleChange(e) {
    const valorPesquisa = e.target.value;
    setPesquisa(valorPesquisa);

    const resultadoAtualizado =
      valorPesquisa === ""
        ? []
        : obras.filter((item) => item.titulo.startsWith(valorPesquisa));
    setResultado(resultadoAtualizado);
  }

  return (
    <header>
      <h1>Galeria</h1>

      <nav>
        <ul id="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/slide-show">Slide Show</Link>
          </li>
        </ul>
        <div id="barra-pesquisa">
          <AiOutlineSearch className="icone" />
          <input
            on={console.log("oi")}
            type="text"
            value={pesquisa}
            onChange={(e) => handleChange(e)}
          />
          <ul id="container-resultado">
            {resultado.map((item) => (
              <li key={item.titulo}>
                <Link className="link-obra" to={`/obras/${item.titulo}`}>
                  {item.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
