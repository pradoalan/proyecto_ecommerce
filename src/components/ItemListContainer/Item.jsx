import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({prod}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="sm={4}>sm=4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.imagen} />
                <Card.Body>
                  <Card.Title className="tituloCard">{prod.nombre}</Card.Title>
                  <Card.Text>
                    {prod.descripcion}
                  </Card.Text>
                  <Card.Text>
                    <ItemCount initial={1} stock={prod.stock}/>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
              </div>
        </div>
    )
}

export default Item

