import React from 'react'
import { Button, Card, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({prod}) => {
    return (
            <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem' }} className="cardProducto">
                <Card.Img variant="top" src={prod.imagen} />
                <Card.Body>
                  <Card.Title className="tituloCard">{prod.nombre}</Card.Title>
                  <Card.Text>
                    Precio: ${prod.precio} <br />
                    Stock: {prod.stock}
                  </Card.Text>
                  <Card.Text>
                    <Link to={`/detail/${prod.id}`}><Button variant="outline-dark">
                    Ver Mas
                    </Button></Link>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
    )
    
}

export default Item

