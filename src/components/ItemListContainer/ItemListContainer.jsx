import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getFetch } from '../Services/GetFetch';
import ItemList from './ItemList';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);

    const {categoryID} = useParams()

    useEffect(() => {
        if(categoryID){
            getFetch
            .then(res => {
                setproducts(res.filter(prod => prod.categoria === categoryID))
            })
            .catch(err => console.log(err))
            .finally(()=> setloading(false))
        }
        else{
            getFetch
            .then(res => {
                setproducts(res)
            })
            .catch(err => console.log(err))
            .finally(()=> setloading(false))
        }
    }, [categoryID])

    return (
        <div /*style={{height: '600px'}}*/>
            <h1>{greeting}</h1> <br />
            { loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : <ItemList products={products}/>} 
        </div>
    )
}

export default ItemListContainer
