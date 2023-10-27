export default function Bio({nome, idade}){
    console.log(nome, idade)
    return (
        <div>
            <hr/>
            <h2>Bio</h2>
            <h3>Nome: {nome}</h3>
            <h3>Idade: {idade}</h3>
        </div>
    )
}