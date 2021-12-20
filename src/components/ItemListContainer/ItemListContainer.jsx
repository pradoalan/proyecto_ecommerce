import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getFirestore } from '../../service/getFirestore';
import Loader from '../Loader/Loader';
import ItemList from './ItemList';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    const {categoryID} = useParams()

    useEffect(() => {

        const db = getFirestore()

        const dbQuery = categoryID ? db.collection('productos').where('categoria', '==', categoryID) : db.collection('productos')

        dbQuery.get()
        .then(res => setproducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) )))
        .catch(err => console.log(err))
        .finally(setTimeout(() => setloading(false), 2000),
        window.scrollTo(0, 0))        

    }, [categoryID])

    return (
        <>
            <h1 className="paginaPrincipal">{greeting}</h1>
            { loading ? <Loader/> : <ItemList products={products}/>} 
        </>
    )
}

export default ItemListContainer
