import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";


const useProductDetails = () => {
  const { productoId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productoRef = doc(db, "productos", productoId);
        const productDoc = await getDoc(productoRef);

        if (productDoc.exists()) {
          setProduct({ ...productDoc.data(), id: productDoc.id });
        } else {
          throw new Error(`Producto con ID ${productoId} no encontrado.`);
        }
      } catch (error) {
        console.error("Error al cargar detalles del producto:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productoId]);

  return { product, isLoading };
};

export default useProductDetails;
