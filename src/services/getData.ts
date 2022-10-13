import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetDataReturnType } from '../types/GetDataReturnType';

export default function getData(url: string): GetDataReturnType {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        setData(res.data);
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
  }, [url]);

  return { data, loading, error };
}
