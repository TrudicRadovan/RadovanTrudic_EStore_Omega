import { useState, useEffect } from 'react';
import axios from 'axios';

export default async function getAllData(): Promise<string[]> {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return data;
}
