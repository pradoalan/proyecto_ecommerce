import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom' 

const NavBar = () => {
    return (
        <div className="menu">
           <div className="logoMenu">
               <p>Conchita Mistica</p>
           </div> 
           <div className="navegacion">
                <ul>
                    <li><Link to='/'>Catalogo completo</Link></li>
                    <li><Link to='/categoria/dildo'>Dildo</Link></li>
                    <li><Link to='/categoria/parejas'>Parejas</Link></li>
                    <li><Link to='/categoria/gel'>Gel</Link></li>
                    <Link to='/detail'><li><CartWidget/></li></Link>
                </ul>
           </div>
           
        </div>
    )
}

export default NavBar

