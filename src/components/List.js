import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
               <Item marca= "Chevrolet" lancamento= {1999}/>
               <Item marca="Mercedes" lancamento={1985}/>
               <Item/>
               <Item marca="Meu saco"/>
            </ul>
        </>
    )
}

export default List