import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
    return (
        <>
            <h1>{greeting}</h1> 
            <ItemCount initial={1} stock={5}/>   
        </>
    )
}

export default ItemListContainer
