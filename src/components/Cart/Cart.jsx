
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import CartVacio from './CartVacio'

const Cart = () => {

    const {cartList, borrarItem, borrarCart, precioTotal} = useCartContext() 
    console.log(cartList)

    return (
        <>
            {cartList.length === 0 ? <CartVacio/> : 
            <>
            <h1>Carrito de compras</h1>
            <br />
            {cartList.map(prod => <li key={prod.id}>{prod.nombre} - cantidad: {prod.agregado} - Precio Unitario:${prod.precio} - Subtotal: ${prod.precio * prod.agregado} <button onClick={() => borrarItem(prod.id)}>Borrar Item</button></li>)}
            <br />
            Total de compra: ${precioTotal()}
            <br/>
            <Link to='/'><button>Volver</button></Link>
            <button onClick={borrarCart}>Limpiar Carrito</button>
            <br/>
            <br/>
            <button>Terminar Compra</button>
            </>
            }
        </>
    )
}

export default Cart
