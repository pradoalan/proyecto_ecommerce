import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

const CartVacio = () => {
    return (
        <>
            <h1>Carrito Vacio</h1>
            <h2>No hay productos seleccionados :(</h2>
            <br/>
            <Link to='/'><Button variant="dark">Comenza tu compra!</Button></Link>            
        </>
    )
}

export default CartVacio
