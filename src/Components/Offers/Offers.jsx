import React from 'react'
import './Offers.css'
 

const Offers = () => {
      const exclusive_image = '../Components/Assets/ropa1.jpg'
           
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