import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contato(){
  const [naosei, setNaosei] = useState("");
  const navigate = useNavigate()

  function login(){
    navigate(`/login/${naosei}`);
  }
    return (
        <>
          <h1>Contato</h1>
          <input onChange={(e) => setNaosei(e.target.value)} type="text" value={naosei} />
          <button type="button" onClick={login}>seila</button>
        </>
    );
}