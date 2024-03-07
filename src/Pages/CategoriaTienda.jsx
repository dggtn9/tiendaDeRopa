import React from 'react'
import './CategoriaTienda';
import { useContext } from 'react';
import { ContextoTienda } from './ContextoTienda'
import dropdown_icon from '../Components/Assets/ropa11.jpg'
import Item from '../Components/Item/Item'

const CategoriaTienda = (props) => {
    const { all_product } = useContext(ContextoTienda);
    return (
        <div className="tienda-categoria-banner">
            <img src={props.banner} alt="" />
            <div className='categoriaTienda-indexSalida'>
                <p>
                    <span>1-12</span>de 36 productos
                </p>
                <div className="CategoriaTienda-sort">
                    De <img src={dropdown_icon} alt='' />
                </div>
            </div>
            <div className='categoriaTienda-productos'>
                {all_product.map((item, index) => {
                    if (props.categoria === item.categoria) {
                        return <Item key={item} id={item.id} name={item.name} image={item.image}
                            new_price={item.new_price} old_price={item.old_price} />

                    }
                    else {
                        return null;

                    }
                })}
            </div>
            <div className="tiendaCategoria-cargaMas">
            </div>
        </div>
    )
}
export default CategoriaTienda