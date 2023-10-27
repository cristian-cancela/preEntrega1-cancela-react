import React from 'react';
import { useCart } from '../../context/CartContext';
import EstiloBotonCart from './EstiloBotonCart';
import CartItems from  './CartItems';

const CartWidget = () => {
  const { getCartCount } = useCart();

  return (
    <div className="rounded-circle position-relative">
      <EstiloBotonCart />
      <CartItems count={getCartCount()} />
    </div>
  );
}

export default CartWidget;

