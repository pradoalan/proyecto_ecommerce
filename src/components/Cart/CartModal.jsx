import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CartModal = ({show, onHide, ordenId, cliente}) => {
    return (
        <>
        <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>Compra Finalizada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cliente}, gracias por tu compra! Tu numero de orden es: <strong>{ordenId}</strong>. Mandanos un mail a <strong> conchitamistica@gmail.com</strong> con el numero generado para ponernos en contacto con vos. Muchas gracias!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={onHide}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default CartModal
