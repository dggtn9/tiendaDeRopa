import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tienda from './Pages/Tienda';
import Navbar from '../src/Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer';
import CategoriaTienda from './Pages/CategoriaTienda';
import Producto from './Pages/Producto'
import CarritoCompras from './Pages/CarritoCompras';
import LoginIniciarSesion from './Pages/LoginIniciarSesion'
import hombre_banner from './Components/Assets/ropa2.jpg'
import mujer_banner from './logo.svg'
import ninos_banner from './logo.svg'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Tienda />} />
        <Route path='/hombres' element={<CategoriaTienda banner={hombre_banner}categoria="hombres" />} />
        <Route path='/mujeres' element={<CategoriaTienda banner={mujer_banner} categoria="mujeres" />} />
        <Route path='/ninos' element={<CategoriaTienda banner={ninos_banner}categoria="ninos" />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/productoId" element={<Producto />} />
        <Route path="/carritoCompras" element={<CarritoCompras />} />
        <Route path='/IniciarSesion' element={<LoginIniciarSesion />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App;
