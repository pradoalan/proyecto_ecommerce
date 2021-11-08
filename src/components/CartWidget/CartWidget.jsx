import CartImg from './cart3.svg'
import '../CartWidget/CartWidget.css'

const CartWidget = () => {
    return (
        <>
            <img className="carrito" src={CartImg} alt="Logo Carrito" />
        </>
    )
}

export default CartWidget
