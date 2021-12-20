import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom' 
import { useCartContext } from '../../context/CartContext'


const NavBar = () => {

    const {cantidadItem} = useCartContext()

    return (
        <div className="menu">
           <div className="logoMenu">
               <p>Conchita Mistica</p>
           </div> 
           <div className="navegacion">
                <ul>
                    <li><Link to='/'>Catalogo completo</Link></li>
                    <li><Link to='/categoria/consoladores'>Consoladores</Link></li>
                    <li><Link to='/categoria/parejas'>Parejas</Link></li>
                    <li><Link to='/categoria/lubricacion'>Lubricacion</Link></li>
                    <Link to='/Cart'><li className="carrito"><CartWidget/>{cantidadItem() !== 0 && cantidadItem()}</li></Link>
                </ul>
           </div>
           
        </div>
    )
}

export default NavBar

