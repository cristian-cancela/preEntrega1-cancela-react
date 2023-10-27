import { useEffect, useState } from "react";


function useDataWithDelay(fetchDataFunction) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const data = await fetchDataFunction();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error al obtener los datos:", error);
          setIsLoading(false);
        }
      }, 2000); 
    };

    fetchData();
  }, [fetchDataFunction]);

  return { data, isLoading };
}

export default useDataWithDelay;
