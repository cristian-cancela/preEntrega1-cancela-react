import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import AsyncMock from "./mock/AsyncMock";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ItemDetails from "./ItemDetails"; 
import Loader from "../assets/Loader";

const ItemDetailContainer = () => {
    const { productoId } = useParams(); 
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AsyncMock()
            .then((data) => {
                const foundProduct = data.find((product) => product.id === parseInt(productoId));

                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    console.error(`Producto con ID ${productoId} no encontrado.`);
                }

                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener los productos:", error);
                setIsLoading(false);
            });
    }, [productoId]);

    return (
        <Container>
            {isLoading ? (
                <div className="loader-container">
                    <Loader/>
                </div>
            ) : product ? (
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img} alt={`Imagen de ${product.nombre}`} />
                        <Card.Body>
                            <Card.Title>{`Producto: ${product.nombre}`}</Card.Title>
                            <Card.Text>{`Precio: $${product.precio}`}</Card.Text>
                            <Card.Text>{`Descripción: ${product.descripcion}`}</Card.Text>
                            <Card.Text>{`Stock: ${product.stock}`}</Card.Text>
                            <ItemDetails stock={product.stock} />
                        </Card.Body>
                    </Card>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </Container>
    );
}

export default ItemDetailContainer;
