import {useState} from "react"
import "./style.css";

export default function Contador(){
    const [numero, setNumero] = useState(0)

    function somar() {
        setNumero(numero + 1)
    }

    return (
        <div className="container">
            <h1>Contador</h1>
            <p>{numero}</p>
            <button onClick={somar}>+1</button>
        </div>    
    )
}