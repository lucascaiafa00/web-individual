import { useState } from "react";
import { Link } from "react-router-dom";
import obras from "../Obras";

export default function Header() {
    const [pesquisa, setPesquisa] = useState("");
    const [resultado, setResultado] = useState([]);

    function handleChange(e) {
        const valorPesquisa = e.target.value;
        setPesquisa(valorPesquisa);

        const resultadoAtualizado = valorPesquisa === "" ? [] : obras.filter((item) => item.titulo.startsWith(valorPesquisa));
        setResultado(resultadoAtualizado);
    }

    return (
        <header>
            <h1>Galeria</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/slide-show">Slide Show</Link>
                    </li>
                </ul>
                <input
                    type="text"
                    value={pesquisa}
                    onChange={(e) => handleChange(e)}
                />
                <ul id="resultado-pesquisa">
                    {resultado.map((item) => (
                        <li key={item.titulo}>
                            <Link to={`/obras/${item.titulo}`}>{item.titulo}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
