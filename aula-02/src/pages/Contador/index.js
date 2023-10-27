import {useState} from "react"
import "./style.css";

export default function Contador(){
    const [numero, setNumero] = useState(0)

    function somar() {
        setNumero(numero + 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>{numero}</p>
            <button onClick={somar}>Somar</button>
        </div>    
    )
}