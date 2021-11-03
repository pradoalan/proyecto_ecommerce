import { useState } from "react";
import './ItemCount.css'

function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial)

    const sumarItem = () => {
            setCount(count + 1)
    }

    const restarItem = () => {
            setCount(count - 1)
    }

    const onAdd = () => {
        alert(`${count} productos seleccionados`)
    }

    return (
        <div className="contador">

            <button onClick={sumarItem} disabled={count >= stock}>+</button>
            <label>Cantidad: {count}</label>
            <button onClick={restarItem} disabled={count <= initial}>-</button>
            <br />
            <div  className="agregarItem">
            <button onClick={onAdd} >Agregar Item</button>
            </div>
        </div>
    )
}

export default ItemCount
