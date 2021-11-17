import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div>
            <h1>Este es nuestro Carrito de compras</h1>
            <Link to='/'><button>Volver</button></Link>
        </div>
    )
}

export default Cart
