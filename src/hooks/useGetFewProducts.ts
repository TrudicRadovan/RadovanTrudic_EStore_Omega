import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetAllDataReturnType } from '../types/GetAllDataReturnType';
import Mustache from 'mustache';

export default function useGetFewProducts(): GetAllDataReturnType {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = Mustache.render(process.env.REACT_APP_API_GET_FEW_PRODUCTS as string, { limit: '12', skip: '0' });
    axios
      .get(url)
      .then(res => {
        console.log(res.data.products);
        setData(res.data.products);
        setLoading(false);
        setError(null);
        console.log('GetFewProducts successed!');
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
