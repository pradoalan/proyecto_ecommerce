

import { useState } from "react";
import { Button, Card, Col} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState(0)
  const [click, setClick] = useState(false)

  const {cartList, agregarCarrito} = useCartContext()

  const handleAdd = (cant) => {
    setCantidad(cant)
    agregarCarrito(item, cant)
    setClick(true)
  }

  console.log(cartList)

  const PreClick = () => {
    return (<ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />)
  }

  const PostClick = () => {
    return (<><br/>Cantidad agregada al carrito: {cantidad} <Link to='/'><Button variant="dark">Volver</Button></Link> <Link to='/cart'><Button variant="dark">Ir al carrito</Button></Link></>)
  }
    return (
        <>

      { item &&     


          <Col sm={12} md={6} lg={4}>
          <Card style={{ width: '18rem' }} className="text-center">
              <Card.Header as="h5">{item.nombre}</Card.Header>
              <Card.Img variant="top" src={item.imagen} />
              <Card.Body>
                <Card.Text>{item.descripcion} <br />
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
