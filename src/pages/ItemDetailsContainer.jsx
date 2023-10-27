import React from "react";
import Container from 'react-bootstrap/Container';
import Loader from "../assets/Loader";
import { useCart } from '../context/CartContext';
import useProductDetails from '../customHooks/useProductDetails';
import CardDetail from '../components/CardDetail'; 

const ItemDetailContainer = () => {
  const { product, isLoading } = useProductDetails();
  const { addToCart } = useCart();

  return (
    <Container>
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : product ? (
        <CardDetail product={product} addToCart={addToCart} /> 
      ) : (
        <p>Producto no encontrado</p>
      )}
    </Container>
  );
}

export default ItemDetailContainer;
