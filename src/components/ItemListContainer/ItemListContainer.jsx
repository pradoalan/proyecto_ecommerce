import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { getFetch } from '../Services/GetFetch';
import ItemList from './ItemList';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getFetch
        .then(res => {
            setproducts(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
    }, [])

    return (
        <>
            <h1>{greeting}</h1> 
            { loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : <ItemList products={products}/>} 
        </>
    )
}

export default ItemListContainer
