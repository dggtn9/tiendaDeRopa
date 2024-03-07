import React from 'react'
import './ProductosRelacionados.css'
import data_product from '../Assets/data'

const ProductosRelacionados = () => {
    return (
        <div className="productosrelacionados">
            <h1>Productos Relacionados</h1>
            <hr />
            <div className="items">
                {data_product().map((Item, i) => {
                    return <Item key={i} id={Item.id} name={Item.name} image={Item.image}
                        new_price={Item.new_price} old_price={Item.old_price} />
                })}
            </div>
        </div>
    )
}
export default ProductosRelacionados