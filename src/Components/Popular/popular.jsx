import React from 'react'
import './popular.css'
import data_Product from 'react'
const Popular = () => {
    return (
<div className='popular'>
<h1>Populares para mujeres:</h1>
<hr/>
<div className="popular-item">
    {data_Product.map((item,i)=>
    {return < item key={i} id={item.id} name={item.name} image={item.image} 
    new_price={item.new_price} old_price={item.old_price}/>})}
</div>
        </div>
    )
}

export default Popular;