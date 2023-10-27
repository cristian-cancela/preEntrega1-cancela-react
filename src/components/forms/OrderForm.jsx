import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import FormularioCompra from './FormularioCompra';
import { db } from '../../firebase/config'; 

function OrderForm({ cart, getCartTotal, clearCart }) {
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        aceptaTerminos: false,
    });

    const [pedidoId, setPedidoId] = useState("");

    const handleCompra = (event) => {
        event.preventDefault();
        const pedido = {
            cliente: data,
            productos: cart,
            total: getCartTotal(),
        };

        const pedidosRef = collection(db, 'pedidos'); 

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
            });

        clearCart();

        console.log('Pedido:', pedido);
    };

    if (pedidoId) {
        return (
            <div>
                <h1>¡Muchas gracias por tu compra!</h1>
                <p>Tu número de pedido es: {pedidoId} </p>
            </div>
        );
    }

    return (
        <FormularioCompra data={data} onDataChange={setData} onCompra={handleCompra} />
    );
}

export default OrderForm;
