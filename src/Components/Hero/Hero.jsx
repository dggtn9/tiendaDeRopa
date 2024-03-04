import React from 'react'
import './Hero.css'
import hand_icon from './Assets/ropa1.jpg'
import arrow_icon from './Assets/ropa2.jpg'
import hero_image from './Assets/ropa3.jpg'
const Hero = ()=>{
    return(
        <div className='hero'>
        <div classNmae="hero-left">
            <h2>Nueva Colección</h2>
            <div>
                <div className= "hand-hand-icon">
                    <p>Nuevo</p>
                    <img src={hand_icon} alt='colección'/>
                </div>
                <p>Colección</p>
                <p>para todos</p>
            </div>
            <div classNmae="hero-latest-btn">
                <div>Ultima Colección</div>
                <img src={arrow_icon} alt='colección'/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt=""/>
        

        </div>

        </div>
    )
}

export default Hero