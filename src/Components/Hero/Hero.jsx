import React from 'react'
import './Hero.css'
const Hero = () => {
    const hand_icon = './Assets/ropa4.jpg'
    const arrow_icon = 'Assets/ropa2.jpg'
    const hero_image = 'Assets/ropa3.jpg'
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Nueva Colección</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>Nuevo</p>
                        <img src={hand_icon} alt='colección' />
                    </div>
                    <p>Colección</p>
                    <p>para todos</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Ultima Colección</div>
                    <img src={arrow_icon} alt='colección' />
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image} alt="" />


            </div>

        </div>
    )
}

export default Hero