import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config'; 

const useFilteredProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const categoryMappings = {
      hombres: "hombres",
      mujeres: "mujeres",
      sale: "sale"
    };

    const fetchData = async () => {
      const productosRef = collection(db, "productos");

      try {
        const querySnapshot = await getDocs(productosRef);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredProducts = data.filter((product) => {
          return category === categoryMappings[product.categoryId] || category === categoryMappings[product.categorySale];

        });

        setProducts(filteredProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [category]);

  return { products, isLoading };
};

export default useFilteredProducts;
