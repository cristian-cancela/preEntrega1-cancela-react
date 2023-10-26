import React from 'react';

function CartTotal({ cart }) {
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (const item of cart) {
            totalPrice += item.precio * item.cantidad;
        }
       
        return totalPrice.toFixed(2);
    };

    return (
        <p className="d-flex justify-content-center" >Precio Total: ${calculateTotalPrice()}</p>
    );
}

export default CartTotal;
