import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div className="menu">
           <div className="logoMenu">
               <p>Conchita Mistica</p>
           </div> 
           <div className="navegacion">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catalogo</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><CartWidget/></li>
                </ul>
           </div>
           
        </div>
    )
}

export default NavBar

