import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Loader from '../assets/Loader';
import useFilteredProducts from '../customHooks/useFilteredProducts';
import Item from '../components/Item';

const CategoryFilter = ({ category }) => {
    const { products, isLoading } = useFilteredProducts(category);
  
    return (
      <Container>
        {isLoading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <div>
           <h1> Bienvenido a la sección de {category}</h1>
            <Row>
              {products.map((product) => (
                <Item key={product.id} product={product} />
              ))} 
            </Row>
          </div>
        )}
      </Container>
    );
  };
  
  export default CategoryFilter;
