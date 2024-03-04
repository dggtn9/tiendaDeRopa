import React from "react"
import { useState } from "react"
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart_icon from '../Assets/carrito.png'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menu, setMenu] = useState("Tienda")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt='logo' />
                <p>Tienda De Ropa en Linea</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("Tienda") }}><Link style={{ textDecoration: 'none' }} to='/'>Tienda</Link>{menu === 'Tienda' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('hombres') }}><Link style={{ textDecoration: 'none' }} to='/hombres'>Hombre</Link>{menu === 'hombres' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('mujeres') }}><Link style={{ textDecoration: 'none' }} to='/mujeres'>Mujer</Link>{menu === 'mujeres' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('ninos') }}><Link style={{ textDecoration: 'none' }} to='/ninos'>Ninos</Link>{menu === 'ninos' ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button><Link to='/login'>Button</Link></button>
                <img src={cart_icon} alt="" /><link to='/carrito'></link>
                <div className="nav-cart-count">0</div>

            </div>
        </div>
    )
}
export default Navbar