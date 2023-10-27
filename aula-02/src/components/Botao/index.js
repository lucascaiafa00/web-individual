import "./style.css"

export default function Botao({title}) {
    function mensagem(){
        console.log(`Botão: ${title}`)
    }
    return <button onClick={mensagem} className="botao">{title}</button>
}