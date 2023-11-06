import { useState, useEffect } from "react";
import obras from "../../components/Obras";

export default function SlideShow() {
  const [classe, setClasse] = useState("");
  const [contador, setContador] = useState(0);

  const startSlideShow = () => {
    setTimeout(() => {
      if (contador + 1 >= obras.length) {
        setContador(0);
      } else {
        setContador(contador + 1);
      }
    }, 2500);
  };

  useEffect(() => {
    startSlideShow();
  }, [contador]);

  return (
    <main>
      <h2>Slide Show</h2>
      <button type="button" onClick={startSlideShow}>Start Slide Show</button>
      <img
        src={obras[contador].imagem}
        className={classe}
        alt=""
        srcSet=""
        onLoad={startSlideShow}
      />
    </main>
  );
}
