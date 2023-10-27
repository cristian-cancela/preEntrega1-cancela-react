import React from 'react';
import { useCart } from '../context/CartContext';
import OrderForm from '../components/forms/OrderForm'

function FinalizarCompra() {
    const { cart, getCartTotal, clearCart } = useCart();

    return (
        <div className='container'>
            <OrderForm cart={cart} getCartTotal={getCartTotal} clearCart={clearCart} />
        </div>
    );
}

export default FinalizarCompra;