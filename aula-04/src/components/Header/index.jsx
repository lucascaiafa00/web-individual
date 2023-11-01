import logo from "../../assets/Rock.png";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <img
        id="logo"
        src={logo}
        alt="Desenho de uma mão com o dedo indicador e mindinho levantados com a palavra Rock na esquerda"
      />
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="link" to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
