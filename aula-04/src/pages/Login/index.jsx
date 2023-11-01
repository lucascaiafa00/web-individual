import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./style.css";

export default function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  const loginValido = 
    {
      nome: "Shrek",
      senha: 40028922
    }
    const {naosei} = useParams()

  function login() {
    const usuario = {
      nome: nome,
      senha: senha,
    };
    if (nome == "" || senha == "") {
      setMensagem("Preencha todos os campos!");
    }else if(loginValido.nome != usuario.nome || loginValido.senha != usuario.senha){
      setMensagem("Nome e/ou senha inválidos")
    } else {
      setMensagem("");

      localStorage.setItem("usuario", JSON.stringify(usuario));

      navigate(`/${usuario.nome}`);

      console.log(usuario);
    }
    setNome("");
    setSenha("");
  }

  return (
    <>
      <p>{naosei}</p>
      <form id="formulario-login" action="">
        <h1>Login</h1>
        <p>{mensagem}</p>
        <label htmlFor="username">Nome</label>
        <input
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="password">Senha</label>
        <input
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
          type="password"
          id="password"
          name="password"
        />
        <button type="button" onClick={login}>
          Entrar
        </button>
      </form>
    </>
  );
}
