import { useState, useEffect, useContext } from 'react';
import Mustache from 'mustache';
import UserContext from '../contexts/UserContext';
import CartDTO from '../dto/CartDTO';
import { GetUserCartsReturnType } from '../types/GetUserCartsReturnType';
import axios from 'axios';
import instance from '../config/axiosConfig';

export default function useGetUserCarts(): GetUserCartsReturnType {
  const [data, setData] = useState<Array<CartDTO> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setState, state } = useContext<{ setState: any; state: any }>(UserContext);
  const url = Mustache.render(process.env.REACT_APP_API_GET_USER_CARTS as string, { id: state.id });
  const axiosInstance = instance;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res);
        for (const cart of res.data.carts) {
          setData(cart.products);
          setLoading(false);
          setError(null);
          console.log('GetUserCarts successed!');
        }
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
