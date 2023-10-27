import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {

    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      if (existingItem.cantidad < existingItem.stock) {
      
        const updatedCart = cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, cantidad: cartItem.cantidad + 1 };
          } else {
            return cartItem;
          }
        });
        setCart(updatedCart);
      }
    } else {
      if (item.stock >= 1) {
     
        setCart([...cart, { ...item, cantidad: 1 }]);
      }
    }
  
  };
  
    
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const updateItemQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (newQuantity <= item.stock && newQuantity >= 1) {
          return { ...item, cantidad: newQuantity };
        }
      }
      return item;
    });
    setCart(updatedCart);
  };
  
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.cantidad * item.precio, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateItemQuantity, getCartCount, getCartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
