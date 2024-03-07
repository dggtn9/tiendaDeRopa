import React from 'react'
import './Footer.css'

const Footer =()=>{
    const footer_logo = '../Assets/ropa2.jpg'
    const instagram_icon = '../Assets/ropa2.jpg'
    const x_icon = '../Assets/ropa2.jpg'
    const whatsapp_icon = '../Assets/ropa2.jpg'
    return(
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt=""/>
                <p>Compras</p>
                </div>
                <ul className='footer-links'>
                    <li>Empresa</li>
                    <li>Productos</li>
                    <li>Oficinas</li>
                    <li>Sobre nosotros</li>
                    <li>Contacto</li>
                </ul>
                <div className='footer-social-icon'>
                    <div className='footer-icons-container'>
                        <img src={instagram_icon} alt="" />
                    </div>
                    <div className='footer-icons-container'>
                        <img src={x_icon} alt="" />
                    </div>
                    <div className='footer-icons-container'>
                        <img src={whatsapp_icon}alt="" />
                    </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright Daniela 2024</p>
                </div>
                </div>
    )
}

export default Footer;