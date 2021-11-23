
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const Cart = () => {

    const {cartList, borrarCart} = useCartContext() 
    console.log(cartList)
    return (
        <div>
            <h1>Este es nuestro Carrito de compras</h1>
            <br />
            {cartList.map(prod => <li key={prod.id}>{prod.nombre} - cantidad: {prod.agregado}</li>)}
            <br />
            <Link to='/'><button>Volver</button></Link>
            <button onClick={borrarCart}>Limpiar Carrito</button>
        </div>
    )
}

export default Cart
