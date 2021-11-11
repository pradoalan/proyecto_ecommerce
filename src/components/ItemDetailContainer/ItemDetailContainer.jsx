
import { useEffect, useState } from 'react'
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

    useEffect(() => {
        getItem
        .then(res=> {setItem(res)})
        .catch(err => console.log(err))
    })

    return (
        <>
            <ItemDetail item={item[0]}/>
        </>
    )
}

export default ItemDetailContainer
