import { Link } from "react-router-dom"

const CartVacio = () => {
    return (
        <>
            <h1>Carrito Vacio</h1>
            <h2>No hay productos seleccionados :(</h2>
            <br/>
            <Link to='/'><button>Comenza tu compra!</button></Link>            
        </>
    )
}

export default CartVacio
