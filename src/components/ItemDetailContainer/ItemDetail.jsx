

import { useState } from "react";
import { Card, Col} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState(0)
  const [click, setClick] = useState(false)

  const {cartList, agregarCarrito} = useCartContext()

  const handleAdd = (cant) => {
    setCantidad(cant)
    console.log(cant);
    agregarCarrito({...item, agregado: cant})
    setClick(true)
  }

  console.log(cartList)

  const PreClick = () => {
    return (<ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />)
  }

  const PostClick = () => {
    return (<><br/>Cantidad agregada al carrito: {cantidad} <Link to='/'><button>Volver</button></Link> <Link to='/cart'><button>Ir al carrito</button></Link></>)
  }
    return (
        <>

      { item &&     


          <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Img  className="detalleImagen" variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text className="detalleItem">{item.descripcion} <br />
              Precio: ${item.precio} <br /> Stock: {item.stock}
              <br />
              {click ? <PostClick/> : <PreClick/>}
              
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>

      }
        </>
        
    )
}

export default ItemDetail
