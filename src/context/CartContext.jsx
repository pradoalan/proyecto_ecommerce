import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarCarrito = (item, agregado) => {
        
        let isInCart = cartList.find((cartItem) => cartItem.id === item.id);

        if (isInCart){
            isInCart.agregado += agregado
            setCartList([...cartList])
        }
        else{
            setCartList([...cartList, {...item, agregado}])
        }
        
    }

    const borrarItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    }

    const borrarCart= () =>{
        setCartList([])
    }

    const cantidadItem = () =>{
        return cartList.reduce((acum, item)=> acum = acum + item.agregado, 0)
    }  

    const precioTotal = () => {
        return cartList.reduce((acum, item) => (acum += item.precio * item.agregado), 0)
    }
    

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            borrarItem,
            borrarCart,
            cantidadItem,
            precioTotal
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
