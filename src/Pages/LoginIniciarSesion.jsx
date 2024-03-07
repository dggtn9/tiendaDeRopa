import React from 'react'
import { useTransition } from 'react';
const LoginIniciarSesion = () => {
    return (
        <div className="loginIniciarSesion">
            <div className='LoginIniciarSesion-conatiner'>
<h1>Iniciar Sesión</h1>
<div className='LoginIniciarSesionCampos'>
    <input type='text' placeholder='Tu nombre'/>
    <input type='email'placeholder='Email'/>
    <input type='password' placeholder='Contrasena'></input>
    </div>
<button>Continuar</button>
   <p className='Login-Registrarse-IniciarSesion'>Ya tienes una cuenta?</p>        

<div className='loginIniciarSesion-acuerdo'></div>
<input type="checkbox" name='' id=''/>
<p className=''>Estoy de acuerdo con los terminos de privacidad del sitio</p>
</div>
        </div>

    )
}

export default LoginIniciarSesion