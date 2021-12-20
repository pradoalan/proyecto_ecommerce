import Button from 'react-bootstrap/Button'
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
            <Button variant="dark" onClick={sumarItem} disabled={count >= stock}>+</Button>
            <label>Cantidad: {count}</label>
            <Button variant="dark" onClick={restarItem} disabled={count <= initial}>-</Button>
            <br />
            <div  className="agregarItem">
            <Button variant="dark" onClick={() => onAdd(count)} disabled={stock === 0} >Agregar Item</Button>
            </div>
        </div>
    )
}

export default ItemCount
