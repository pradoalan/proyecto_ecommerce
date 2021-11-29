
import { useEffect, useState } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../service/getFirestore'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setloading] = useState(true);
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()

        db.collection('productos').doc(id).get()
        .then(res => setItem({id: res.id, ...res.data()}))
        .catch(err => console.log(err))
        .finally(setTimeout(() => setloading(false), 2000))        
    },[id])

    return (
        <Container fluid>
            <Row>
                 { loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : <ItemDetail item={item}/>}        
            </Row>
        </Container>
    )
}

export default ItemDetailContainer
