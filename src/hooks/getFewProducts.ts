import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetAllDataReturnType } from '../types/GetAllDataReturnType';
import Mustache from 'mustache';
import ProductDTO from '../dto/ProductDTO';

export default function getFewProducts(): { getProducts: () => Array<ProductDTO> | null } {
  let data: any;

  const getProducts = () => {
    const url = Mustache.render(process.env.REACT_APP_API_GET_FEW_PRODUCTS as string, { limit: '12', skip: '0' });
    axios
      .get(url)
      .then(res => {
        console.log(res.data.products);
        data = res.data.products;
        console.log('GetFewProducts successed!');
      })
      .catch(err => {
        data = null;
        console.log(err);
      });

    return data;
  };

  return { getProducts };
}
