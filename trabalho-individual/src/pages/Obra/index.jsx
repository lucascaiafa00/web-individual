import { useParams } from "react-router-dom";
import obras from "../../components/Obras";
import "./style.css";

export default function Obra() {
  const { obra } = useParams();
  const obraAtual = obras.find((item) => item.titulo === obra);

  console.log(obra);
  return (
    <main id="obra">
      <h2>{obraAtual.titulo}</h2>
      <h3>{obraAtual.artista}</h3>
      <img src={obraAtual.imagem} alt="" />
      <p>
        Criação: {obraAtual.criacao} <br />
        Período: {obraAtual.periodo} <br />
        Descrição: {obraAtual.descricao}
      </p>
    </main>
  );
}
