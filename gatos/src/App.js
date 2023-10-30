import { useState } from "react";
import "./App.css";
import Gatinho from "./components/Gatinho";

function App() {
  const gatos = [
    {
      id: "2nm",
      url: "https://cdn2.thecatapi.com/images/2nm.jpg",
      width: 500,
      height: 332,
    },
    {
      id: "3to",
      url: "https://cdn2.thecatapi.com/images/3to.jpg",
      width: 500,
      height: 378,
    },
    {
      id: "8gk",
      url: "https://cdn2.thecatapi.com/images/8gk.gif",
      width: 219,
      height: 300,
    },
    {
      id: "8to",
      url: "https://cdn2.thecatapi.com/images/8to.jpg",
      width: 600,
      height: 600,
    },
    {
      id: "asu",
      url: "https://cdn2.thecatapi.com/images/asu.jpg",
      width: 980,
      height: 735,
    },
    {
      id: "bio",
      url: "https://cdn2.thecatapi.com/images/bio.jpg",
      width: 500,
      height: 333,
    },
    {
      id: "cho",
      url: "https://cdn2.thecatapi.com/images/cho.jpg",
      width: 480,
      height: 360,
    },
    {
      id: "dga",
      url: "https://cdn2.thecatapi.com/images/dga.jpg",
      width: 846,
      height: 520,
    },
    {
      id: "Dm0H1zSK1",
      url: "https://cdn2.thecatapi.com/images/Dm0H1zSK1.jpg",
      width: 1024,
      height: 768,
    },
    {
      id: "yCd1pVi7Y",
      url: "https://cdn2.thecatapi.com/images/yCd1pVi7Y.jpg",
      width: 1800,
      height: 2000,
    },
  ];

  let [contador, mudarSlide] = useState(0);
  let slideAtivo = false;

  function proximoSlide(proximo) {
    //verificar se o slide ja está ativo para não quebrar a transição
    if (!slideAtivo) {
      slideAtivo = true

      //seta um timeout para a transição
      setTimeout(() => {
        //verifica se é o próximo ou anterior
        if (proximo) {
          //verifica se existe um elemento posterior na lista
          gatos[contador + 1] ? mudarSlide(contador + 1) : mudarSlide((contador = 0));
        } else {
          //verifica se existe um elemento anterior na lista
          gatos[contador - 1] ? mudarSlide(contador - 1) : mudarSlide((contador = gatos.length - 1));
        }

      }, 600);

    } else {
      slideAtivo = false;
    }
  }

  let gato = gatos[contador]

  return (
    <div className="App">
      <header className="App-header">
        <h1>GATOS</h1>
      </header>
      <div className="container">
        <Gatinho gatoAtual={gato}/>
      </div>
      <button className="botao" onClick={() => proximoSlide(false)}>
        Anterior
      </button>
      <button className="botao" onClick={() => proximoSlide(true)}>
        Próximo
      </button>
    </div>
  );
}

export default App;