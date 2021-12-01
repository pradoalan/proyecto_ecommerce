import { useState } from "react";
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

    const sumarItem = () => {
            setCount(count + 1)
    }

    const restarItem = () => {
            setCount(count - 1)
    }

    return (
        <div className="contador">

            <button onClick={sumarItem} disabled={count >= stock}>+</button>
            <label>Cantidad: {count}</label>
            <button onClick={restarItem} disabled={count <= initial}>-</button>
            <br />
            <div  className="agregarItem">
            <button onClick={() => onAdd(count)} disabled={stock === 0} >Agregar Item</button>
            </div>
        </div>
    )
}

export default ItemCount
