
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { getFirestore } from '../../service/getFirestore';
import { useCartContext } from '../../context/CartContext'
import CartVacio from './CartVacio'
import FormCart from './FormCart'
import { useState } from 'react'
import CartModal from './CartModal';

const Cart = () => {

    const {cartList, borrarItem, borrarCart, precioTotal} = useCartContext() 

    const [cliente, setCliente] = useState('')
    const [mail, setMail] = useState('')
    const [tel, setTel] = useState('')
    const [ordenId, setOrdenId] = useState()
    const [showModal, setShowModal] = useState(false)

    
    const generarOrden = (e) =>{
        e.preventDefault();

        const orden = {}
        orden.buyer = {cliente, mail, tel}
        orden.total = precioTotal()
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.nombre
            const cantidad = cartItem.agregado
            const precio = cartItem.precio * cartItem.agregado
            return {id, nombre, cantidad, precio}
        })

        const dbQuery = getFirestore()
        dbQuery.collection('ordenes').add(orden)
        .then(res => setOrdenId(res.id))
        .catch(err => console.log(err))             
    

        const itemsToUpdate = dbQuery.collection('productos').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.id)
        )

        const batch = dbQuery.batch();

        itemsToUpdate.get()
        .then(collection=> {
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).agregado
                })
            })
            batch.commit()
            .then(res => {
                console.log("El stock fue actualizado");
            })
        })
    }

    const clickModal = () =>{
        setShowModal(true)
    }

    const cerrarModal = () =>{
        setShowModal(false)
        borrarCart()
    }

    console.log(ordenId);

    return (
        <div>
            {cartList.length === 0 ? <CartVacio/> : 
            <>
            <h1>Carrito de compras</h1>
            <br />
            {cartList.map(prod => <li key={prod.id}>{prod.nombre} - cantidad: {prod.agregado} - Precio Unitario:${prod.precio} - Subtotal: ${prod.precio * prod.agregado} <button onClick={() => borrarItem(prod.id)}>Borrar Item</button></li>)}
            <br />
            Total de compra: ${precioTotal()}
            <br/>
            <Link to='/'><button>Volver</button></Link>
            <button onClick={borrarCart}>Limpiar Carrito</button>
            <br/>
            <br/>
            <strong>Check-Out</strong> 
            <br />
            <FormCart generarOrden={generarOrden} cliente={cliente} setCliente={setCliente} mail={mail} setMail={setMail} tel={tel} setTel={setTel} clickModal={clickModal}/>
            <CartModal show={showModal} onHide={cerrarModal} ordenId={ordenId} cliente={cliente}/>
            </>  
            }
        </div>
    )
}

export default Cart
