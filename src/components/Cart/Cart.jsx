
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const Cart = () => {

    const {cartList, borrarItem, borrarCart, precioTotal} = useCartContext() 
    console.log(cartList)

    const CarritoVacio = () =>{
        return (
            <>
                <h1>Carrito Vacio</h1>
                <h2>No hay productos seleccionados :(</h2>
                <br/>
                <Link to='/'><button>Comenza tu compra!</button></Link>
            </>
        )
    }

    return (
        <>
            {cartList.length === 0 ? <CarritoVacio/> : 
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
