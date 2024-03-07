import React from 'react'
import './ProductoDisplay.css'
const ProductoDisplay=(props)=>{
    const {producto} = props;
    return(
        <div className='productodisplay'>
<div className='productodisplay-left'>
    <div className='productodisplay-img-list'>
       <img src={producto.imagen} alt=""/> 
       <img src={producto.imagen} alt=""/> 
       <img src={producto.imagen} alt=""/> 
       <img src={producto.imagen} alt=""/> 
</div>
<div className='productodisplayimg'>
    <img className='productodisplay-main-img' src={producto.imagen} alt=""/>
</div>
</div>
        <div className='productodisplay-right'>
<h1>{producto.nombre}</h1>
<div className="productodisplay-right-star">
    <img src="" alt=""/>
    <img src="" alt=""/>
    <img src="" alt=""/>
    <img src="" alt=""/>
    <img src="" alt=""/>
<p>(122)</p>
</div>
<div className="productodisplay-right-precios">
    <div className='productodisplay-right-price-old'>${producto.old_price}</div>
<div className="product-display-right-price-new">${producto.new_price}</div></div>
</div>
<div className='productodisplay-right-descripcion'>
    descripcion del producto
</div>
<div className='productodisplay-right-size'>
    <h1>Selecciona tamano</h1>
    <div className='productodisplay-right-size'>
       <div>S</div> 
       <div>M</div> 
       <div>L</div> 
       <div>xl</div> 
    </div>
</div>
<button>Agregar al carrito</button>
<p className='productodisplay-right-category'><span>Categoria:</span>Mujer,camiseta,crop</p>
</div>

    )
}

export default ProductoDisplay