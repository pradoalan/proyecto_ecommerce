import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <Container>
            <Row>
        {
            products.map(prod => <Item prod={prod} key={prod.id} />)  
        }
          </Row>
        </Container>
    )
}

export default ItemList