import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
<div className='newsletter'>
<h1>Obten ofertas exclusivas en tu email</h1>
<p>Suscribete a nuestra newsletter</p>
<div>
    <input type='email' placeholder='Tu email'/>
    <button>Suscribirse</button>
</div>
 </div>

    )
}

export default Newsletter