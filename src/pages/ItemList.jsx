
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loader from "../assets/Loader";
import Item from "../components/Item";
import useProductList from '../customHooks/useProductList'; 

const ItemList = () => {
  const { products, isLoading } = useProductList(); 

  return (
    <Container>
     {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <Row>
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ItemList;
