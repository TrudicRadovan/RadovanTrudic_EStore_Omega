import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetAllDataReturnType } from '../types/GetAllDataReturnType';

export default function getAllData(): GetAllDataReturnType {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=96&skip=0')
      .then(res => {
        console.log(res.data.products);
        setData(res.data.products);
        setLoading(false);
        setError(null);
        console.log('GetAllData successed!');
      })
      .catch(err => {
        setData(null);
        setLoading(false);
        setError(err.message);
        console.log(err);
      });
  }, []);

  return { data, loading, error };
}
