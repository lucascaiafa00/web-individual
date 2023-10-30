const Gatinho = ({gatoAtual}) =>{
    return(
        <img key={gatoAtual.id} className="imagem" alt="gato" src={gatoAtual.url} />
    )
}

export default Gatinho