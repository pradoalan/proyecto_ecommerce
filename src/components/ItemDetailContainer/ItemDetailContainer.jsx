
import { useEffect, useState } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { productos } from '../Services/GetFetch'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const getItem = new Promise((resolve, reject)=>{
        const condition=true
        if (condition) {
            setTimeout(()=>{
                resolve(productos)
            },2000)
        }
        else{
            setTimeout(()=>{
                reject("404 error, not found")
            },2000)
        }
    })

    const [item, setItem] = useState([]);
    const [loading, setloading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
        getItem
        .then(res=> setItem(res.find(element => element.id === parseInt(id))))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
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
