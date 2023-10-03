import { useEffect, useState } from "react";
import Item from "./Item"; 
import AsyncMock from "./mock/AsyncMock";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loader from "../assets/Loader";


const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncMock()
      .then((data) => {
        console.log("Datos recibidos:", data);
        setProducts(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setIsLoading(false); 
      });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <div className="loader-container">
          <Loader/>
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
