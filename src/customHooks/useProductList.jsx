import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function useProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading };
}

export default useProductList;
