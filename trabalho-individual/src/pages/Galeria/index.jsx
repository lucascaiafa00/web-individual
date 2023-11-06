import obras from "../../components/Obras";
import { Link } from "react-router-dom";
import "./style.css";

export default function Galeria() {
  return (
    <main id="galeria">
      <div className="container-imagens">
        {obras.map((obra) => (
          <div key={obra.titulo} className="container-imagem">
            <Link to={`/obras/${obra.titulo}`}>
              <img className="obra" src={obra.imagem} alt={obra.titulo} />
            </Link>
            <h3>{obra.titulo}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
