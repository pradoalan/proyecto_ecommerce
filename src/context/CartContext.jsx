import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarCarrito(item, cant) {
        if(isIncart(item)){
            let newCartList = cartList
            newCartList.forEach(cartItem => {
                if(cartItem.id === item.id){
                    cartItem.cant += cant
                }
            } )
            setCartList(newCartList)
        }

        else{
            setCartList([...cartList, {...item, cant}])
        }
        
    }

    const borrarCart= () =>{
        setCartList([])
    }

    const isIncart = (item) =>{
        return cartList.some(cartItem => cartItem.id === item.id)
    }
    

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito, 
            borrarCart,
            isIncart 
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
