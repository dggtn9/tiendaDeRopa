import React from 'react'
import './BreadCrum.css'
import arrow_icon from'../Assets/ropa1.jpg'
const BreadCrum = (props) => {
    const{producto} =props;
    return(
        <div className='breadcrum'>
HOME<img src={arrow_icon} alt=""/>
SHOP<img src={arrow_icon} alt=""/>
{producto.categoria}
{producto.nombre}
        </div>
    )
}

export default BreadCrum