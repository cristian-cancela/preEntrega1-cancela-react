
import Item from "./Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loader from "../assets/Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import useDataWithDelay from './customHooks/useDataWithDelay';

const ItemList = () => {
  const { data: products, isLoading } = useDataWithDelay(async () => {
    const productosRef = collection(db, "productos");
    const querySnapshot = await getDocs(productosRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

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
