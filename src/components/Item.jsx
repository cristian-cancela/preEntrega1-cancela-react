
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'; 

const Item = ({ product }) => {
  const { id, nombre, img, precio, stock } = product;

  return (
    <Col md={4} className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} alt='imagen de un producto de ropa' />
        <Card.Body className="text-center">
          <Card.Text>{`nombre: ${nombre}`}</Card.Text>
          <Card.Text>{`Precio: $${precio}`}</Card.Text>
          <Card.Text>{`Stock: ${stock}`}</Card.Text>
          <Button variant="warning">
            <Link to={`/producto/${id}`}>Ver detalles</Link>
          </Button>
        </Card.Body>
      </Card>
    </Col >
  );
}

export default Item;
