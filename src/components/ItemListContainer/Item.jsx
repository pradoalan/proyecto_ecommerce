import React from 'react'
import { Card, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({prod}) => {
    return (
                <Col xs={4} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.imagen} />
                <Card.Body>
                  <Card.Title className="tituloCard">{prod.nombre}</Card.Title>
                  <Card.Text>
                    Precio: ${prod.precio} <br />
                    Stock: {prod.stock}
                  </Card.Text>
                  <Card.Text>
                    <Link to={`/detail/${prod.id}`}><button>
                    Ver Mas
                    </button></Link>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
    )
    
}

export default Item

