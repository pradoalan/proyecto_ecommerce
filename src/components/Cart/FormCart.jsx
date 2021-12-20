
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './FormCart.css'

const FormCart = ({generarOrden, cliente, setCliente, mail, setMail, tel, setTel, clickModal}) => {

    return (
        <div>
            <Container>
            <Form onSubmit={generarOrden}>
                <Row className="mb-3 formEstilo">
                <Form.Group as={Col} controlId="formGridName" lg={7}>
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre completo" value={cliente} onChange={(e) => setCliente(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNumber" lg={7}>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un numero telefonico" value={tel} onChange={(e) => setTel(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail" lg={7}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese un mail de contacto" value={mail} onChange={(e)=> setMail(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Button variant="dark" type="submit" onClick={clickModal}>
                    Terminar Compra
                </Button>
            </Form>
            </Container>
        </div>
    )
}

export default FormCart
