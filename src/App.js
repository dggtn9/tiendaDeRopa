import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter />
      <Navbar />
      <Routes />
      <Route path='/' element={<tienda />} />
      <Route path='/hombres' element={<categorias categoria="hombres" />} />
      <Route path='/mujeres' element={<tienda categoria="mujeres" />} />
      <Route path='/ninos' element={<tienda categoria="ninos" />} />
      <Route path="/productos" element={<producto />} />
      <Route path="/productoId" element={<producto />} />
      <Route path="/carritoCompras" element={<carritoCompras />} />
      <Route path='/IniciarSesion' element={<iniciarSesion />} />
      <Routes />
      <BrowserRouter />
    </div>
  )
}


export default App;
