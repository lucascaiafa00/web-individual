import './App.css';
import Bio from './components/Bio';
import Botao from './components/Botao';

function App() {
  const pessoas = [ 
    {nome: "Lucas", idade: 19},
    {nome: "Regina", idade: 90},
    {nome: "Alex", idade: 29}
  ]

  const botoes = [
    {title: "Não sei"},
    {title: "Talvez eu saiba"},
    {title: "Eu sei"}
  ]

  return (
    <div className="App">
      <h1>Aula 2</h1>

      {pessoas.map((pessoa, index) => (
        <Bio key={index} nome={pessoa.nome} idade={pessoa.idade}/>
      ))}

      {botoes.map((botao, index) => (
        <Botao key={index} title={botao.title}/>   
      ))}
    </div>
  );
}

export default App;