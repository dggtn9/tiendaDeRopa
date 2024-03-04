import React from 'react'
import './offers.css'
import exclusive_image from './Assets/ropa11.jpg'
const Offers = () =>{
    return(
        <div className= 'offers'>
            <div  className='offers-left'>
                <h1>Exclusivo</h1>
                <h1>Ofertas para ti</h1>
                <p>Solo en productos BEST-SELLER</p>
                <button>Chequea ahora</button>
            </div>
<img src={exclusive_image} alt=""/>
        </div>
    )
}
export default Offers 