import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    console.log(cart)
  };

  const quantityItems = () =>{
    return 
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, quantityItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;