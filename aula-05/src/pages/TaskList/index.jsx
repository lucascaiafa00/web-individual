import { useState } from "react";
import "./style.css"

const TaskList = () => {
  const  [novaTarefa, setNovaTarefa]  = useState("");
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa() {
    if (novaTarefa != "") {
        setTarefas([...tarefas, novaTarefa])
        setNovaTarefa("")        
    }
  }

  function removerTarefa(ind){
    const novaLista = tarefas.filter((tarefa, index) => index != ind)
    setTarefas(novaLista)
  }

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <section>
        <input
          type="text"
          placeholder="Nova Tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="button" onClick={adicionarTarefa}>
          +
        </button>
      </section>
      <section>
        <h2>Tarefas</h2>
        <ul>
            {tarefas.map((tarefa,index)=>(
                <li key={index}>
                    <input type="checkbox" name="checkbox" id={index} />
                    <label htmlFor={index}>{tarefa}</label>
                    <button type="button" onClick={() => removerTarefa(index)}>X</button>
                </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default TaskList;
