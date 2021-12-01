import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const FormCart = ({generarOrden, cliente, setCliente, mail, setMail, tel, setTel, clickModal}) => {

    return (
        <div>
            <Form onSubmit={generarOrden}>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre completo" value={cliente} onChange={(e) => setCliente(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un numero de telefono" value={tel} onChange={(e) => setTel(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese un mail de contacto" value={mail} onChange={(e)=> setMail(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" onClick={clickModal}>
                    Terminar Compra
                </Button>
            </Form>
        </div>
    )
}

export default FormCart
