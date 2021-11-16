

import { Card, Col} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
 


const ItemDetail = ({item}) => {

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
              <ItemCount initial={1} stock={item.stock} />
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>

      }
        </>
        
    )
}

export default ItemDetail
