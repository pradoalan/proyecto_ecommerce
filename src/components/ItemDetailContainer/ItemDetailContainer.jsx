
import { useEffect, useState } from 'react'
import { Container, Row} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../service/getFirestore'
import Loader from '../Loader/Loader'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setloading] = useState(true);
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()

        db.collection('productos').doc(id).get()
        .then(res => setItem({id: res.id, ...res.data()}))
        .catch(err => console.log(err))
        .finally(setTimeout(() => setloading(false), 2000),
         window.scrollTo(0, 0))        
    },[id])

    return (
        <Container fluid className="itemDetailStyle">
            <Row>
                 { loading ? <Loader/> : <ItemDetail item={item}/>}        
            </Row>
        </Container>
    )
}

export default ItemDetailContainer
