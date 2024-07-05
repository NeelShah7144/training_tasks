import { useEffect, useState } from 'react';
import axios from 'axios';

const useProductList = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setMyData(response.data);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { myData, loading, error };
};

export default useProductList;
