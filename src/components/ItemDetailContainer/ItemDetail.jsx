
import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Modal } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
 


const ItemDetail = ({item}) => {

    const [smShow, setSmShow] = useState(false);

    return (
        <>

            <Button onClick={() => setSmShow(true)}>Ver detalle</Button>{' '}
      <Modal

        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Sex-shop
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="detalleImagen"><img src={item.imagen} alt="imagen"></img></Modal.Body>
        <Modal.Body className="detalleItem">{item.descripcion} <br />
        Precio: ${item.precio} <br />
        <ItemCount initial={1} stock={item.stock} />
        <br />
        Stock: {item.stock}
        </Modal.Body> 
      </Modal>
        </>
    )
}

export default ItemDetail
