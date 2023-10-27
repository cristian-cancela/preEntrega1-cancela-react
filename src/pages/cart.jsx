import React from 'react';
import { useCart } from '../context/CartContext';
import CartTotal from '../components/cartComponent/CartTotal';
import IncrementButton from '../components/IncrementButton';
import DecrementButton from '../components/DecrementButton';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateItemQuantity, getCartTotal,clearCart } = useCart();

    return (
        <div> 
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src={item.img} alt={item.nombre} style={{ width: '100px', height: '100px' }} />
                                        <div>
                                            <p>{item.nombre}</p>
                                            <p>Precio por unidad: ${item.precio}</p>
                                            <p>Precio total: ${parseFloat(item.precio * item.cantidad).toFixed(2)}</p>
                                            <p>Stock: {item.stock}</p>
                                            <DecrementButton id={item.id} cantidad={item.cantidad} onDecrement={updateItemQuantity} />
                                            <span>{item.cantidad}</span>
                                            <IncrementButton
                                                id={item.id}
                                                stock={item.stock}
                                                onIncrement={(id, stock) => {
                                                    const cartItem = cart.find((cartItem) => cartItem.id === id);
                                                    if (cartItem.cantidad < stock) {
                                                        updateItemQuantity(id, cartItem.cantidad + 1);
                                                    }
                                                }}
                                            />
                                            <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <CartTotal cart={cart} total={getCartTotal()} />
                    <button onClick={clearCart} className="btn btn-danger">Vaciar Carrito</button>
                    <Link to="/FinalizarCompra"> 
                        <button className="btn btn-primary">
                            Finalizar Compra
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
