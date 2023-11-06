import React, { useState, useEffect } from "react";
import obras from "../../components/Obras";
import "./style.css";

export default function SlideShow() {
  const [contador, setContador] = useState(0);
  const [slideAtivo, setSlideAtivo] = useState(false);

  let slideShow;

  useEffect(() => {
    if (slideAtivo) {
      slideShow = setInterval(() => {
        console.log(obras[contador]);
        const proximo = contador + 1;
        if (proximo >= obras.length) {
          setContador(0);
        } else {
          setContador(proximo);
        }
      }, 2500);
    } else {
      clearInterval(slideShow);
    }

    return () => clearInterval(slideShow);
  }, [slideAtivo, contador]);

  function startSlideShow() {
    setSlideAtivo(!slideAtivo);
  }

  return (
    <main id="slides-container">
      <button type="button" onClick={startSlideShow}>
        Start/Stop Slide Show
      </button>
      <img src={obras[contador].imagem} className="slide" alt="" srcSet="" />
      <h2>{obras[contador].titulo}</h2>
    </main>
  );
}
