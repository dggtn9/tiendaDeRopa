import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tienda from './Pages/Tienda';
import Navbar from '../src/Components/Navbar/Navbar';
import Categorias from './Pages/Categorias';
import Productos from './Pages/Productos'
import CarritoCompras from './Pages/CarritoCompras';
import LoginIniciarSesion from './Pages/LoginIniciarSesion'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Tienda />} />
        <Route path='/hombres' element={<Categorias categoria="hombres" />} />
        <Route path='/mujeres' element={<Categorias categoria="mujeres" />} />
        <Route path='/ninos' element={<Categorias categoria="ninos" />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productoId" element={<Productos />} />
        <Route path="/carritoCompras" element={<CarritoCompras />} />
        <Route path='/IniciarSesion' element={<LoginIniciarSesion />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
