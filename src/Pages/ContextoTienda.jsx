import React, { createContext, useState } from 'react'
import getAllProducts from '../Components/Assets/allProducts'

export const ContextoTienda = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < getAllProducts().length+1;index++){
      cart[index] = 0;
    }
    return cart;

}

const ContextoTiendaProvider = (props) => {
    const[cartItems,setCartItems]= useState(getDefaultCart());
    const contextValue = { getAllProducts};

    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})
        )}

    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let iteminfo = getAllProducts().find((product)=>product.id===Number(item))
           totalAmount +=iteminfo.new_Price * cartItems[item];
            }
            return totalAmount;
        }
    }   
    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
    }
    const ContextValue = {getTotalCartItems,getTotalAmount,getAllProducts,cartItems,addToCart} 
    return (
        <ContextoTienda.Provider value={contextValue}>
            {props.children}
        </ContextoTienda.Provider>
    )
}

export default ContextoTiendaProvider;
