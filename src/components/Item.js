
import { useState } from "react";

export default function Item(props) {

  const [stock , setStock] = useState(props.list_item.stock)
  const hacerCompra = () => {
    if(stock > 0){
    setStock(stock - 1)
    props.conteo()
    }
  }

  return (
    <div className='producto'>
      <h3>{props.list_item.producto.nombre}</h3>
      <p>{props.list_item.producto.descripcion}</p>
      <h5>En stock:{stock > 0 ? stock : <span>agotado</span>}</h5>
      <button onClick={hacerCompra}>{stock > 0 ? 'Comprar' : 'Sin stock'}</button>  
    </div>
  )
}