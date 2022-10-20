import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { GetDataReturnType } from '../types/GetDataReturnType';
import ProductDTO from '../dto/ProductDTO';

export default function getData(id: string): GetDataReturnType {
  const [data, setData] = useState<ProductDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_GET_PRODUCT + id)
      .then(({ data }: AxiosResponse<ProductDTO>) => {
        console.log(data);
        setData(data);
        setLoading(false);
        setError(null);
        console.log('GetData successed!');
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
