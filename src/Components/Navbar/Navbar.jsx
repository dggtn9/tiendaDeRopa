import React from "react"
import { useState } from "react"
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart_icon from '../Assets/carrito.png'

const Navbar = () => {
    const [menu, setMenu] = useState("tienda")
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt='logo' />
                <p>Tienda De Ropa en Linea</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("tienda") }}><link style={{ textDecoration: 'none' }} to='/'>Tienda</link>{menu === 'tienda' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('hombres') }}><link style={{ textDecoration: 'none' }} to='/hombres'>Hombre</link>{menu === 'hombres' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('mujeres') }}><link style={{ textDecoration: 'none' }} to='/mujeres'>Mujer</link>{menu === 'mujeres' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('ninos') }}><link style={{ textDecoration: 'none' }} to='/ninos'>Ninos</link>{menu === 'ninos' ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <link to='/login'><button>Login</button></link>
                <link to='/carrito'><img src={cart_icon} alt="" /></link>
                <div className="nav-cart-count">0</div>

            </div>
        </div>
    )
}
export default Navbar