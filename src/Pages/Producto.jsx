import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ContextoTienda } from './ContextoTienda';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductoDisplay from '../Components/ProductoDisplay/ProductoDisplay';
import Descripcion from '../Components/Descripcion/Descripcion';
import ProductosRelacionados from '../Components/ProductosRelacionados/ProductosRelacionados';

const Producto =()=>{
    const {all_product}= useContext(ContextoTienda)
    const {productoId}= useParams();
    const producto = all_product.find((e)=>e.id === Number(productoId));
    return(
        <div>
        <BreadCrum producto={producto}/>
        <ProductoDisplay producto={producto}/>
        <Descripcion/>
        <ProductosRelacionados/>
        </div>
    )
}
export default Producto