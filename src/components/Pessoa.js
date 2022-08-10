function Pessoa({foto,idade,nome,ocupa}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <h3>Idade: {idade}</h3>
            <h4>Ocupação: {ocupa}</h4>
        </div>
    )
}

export default Pessoa