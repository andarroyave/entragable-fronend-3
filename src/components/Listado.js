import React from 'react'
import List from './data.json'
import Item from './Item'

export default function Listado({sumarCompra}) {
  return (
    <div className='container'>   

        {List.map(list_item => {
          
          
          return (<Item key={list_item.id} list_item={list_item} conteo={sumarCompra}/>)
        }
        )
        }       
        
    </div>
  )
}
