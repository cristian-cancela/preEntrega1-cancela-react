import React from "react";
import Card from 'react-bootstrap/Card';

const CardDetail = ({ product, addToCart }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.img} alt={`Imagen de ${product.nombre}`} />
        <Card.Body>
          <Card.Title>{`Producto: ${product.nombre}`}</Card.Title>
          <Card.Text>{`Precio: $${product.precio}`}</Card.Text>
          <Card.Text>{`Descripción: ${product.descripcion}`}</Card.Text>
          <Card.Text>{`Stock: ${product.stock}`}</Card.Text>
          <button onClick={() => addToCart(product)}>agregar al carrito</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDetail;
