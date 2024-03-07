import React from 'react'
import './CartItems.css'
import { ContextoTienda } from '../../Pages/ContextoTienda'
import foto1 from '../Assets/ropa1.jpg'
const CartItems = () => {
    const {getTotalAmount,all_products,CartItems,removeFromCart}=useContext(ContextoTienda);
    return (
        <div className='cartItems'>
<div className='cartItems-format-main'>
    <p>Productos</p>
    <p>Titulo</p>
    <p>Precio</p>
    <p>Cantidad</p>
    <p>Total</p>
    <p>Quitar</p>
</div>
<hr/>
{all_products.map((e)=>{
 if (CartItems[e.id]>0)
 {
return    <div>
 <div className="cartitems-format">
<img src={foto1} alt="" className='carticon-product-icon'/>
<p>{e.name}</p>
<p>${e.new_price}</p>
<button className='cartitems-quantity'></button>
<p>${e.new_price*cartItems[e.id]}</p>
<img src={foto1} onClick={()=>{removeFromCart()}}alt=""/>
</div>
<hr />
</div>
}
return null;
})}
<div className='cartitems-down'>
<div className='cartitems-down'>
    <h1>Total</h1>
    <div >
    <div className='cartitems-total-items'>
        <p>Subtotal</p>
        <p>${getTotalAmount}</p>
    </div>
    <hr />
    <div className='cartitems-total-items'></div>
<p>Envios gratis</p>
<p>Gratis</p>
</div>
<hr />
<div className='cartitems-total-items'></div>
<h3>Total</h3>
<h3>${getTotalCartAmount}</h3>
</div>   
</div>
<button>Procede a pagar</button>
<div className='cartitems-promocodigo'>
    <p>Codigo promo</p>
<div className='cartitems-promobox'>
    <input type='text' placehodler='codigo promo'/>
<button>Enviar</button>
</div> 
</div>
</div>

)
}

export default CartItems
