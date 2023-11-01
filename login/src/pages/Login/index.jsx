import logo from "../../assets/Rock.png";
import { useState } from "react";
import "./style.css";

export default function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [classe, setClasse] = useState("");
  const [mensagem, setMensagem] = useState("");
    
  function login() {
    if (nome == "" || senha == "") {
        setClasse("outline")
        setMensagem("Preencha todos os campos!")
    }else{
        setClasse("")
        setMensagem("")
        const usuario = 
          {
            nome: nome,
            senha: senha,
          }
        
        console.log(usuario);
    }
    setNome("")
    setSenha("")
  }
  
  return (
    <div>
      <header>
        <img
          id="logo"
          src={logo}
          alt="Desenho de uma mão com o dedo indicador e mindinho levantados com a palavra Rock na esquerda"
        />
      </header>
      
      <form id="formulario-login" action="">
        <h1>Login</h1>
        <p>{mensagem}</p>
        <label htmlFor="username">Nome</label>
        <input
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          className={classe}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="password">Senha</label>
        <input
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
          className={classe}
          type="password"
          id="password"
          name="password"
        />
        <button type="button" onClick={login}>Entrar</button>
      </form>
    </div>
  );
}
