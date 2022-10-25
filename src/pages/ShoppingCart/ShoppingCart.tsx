import React, { useContext, useEffect } from 'react';
import ProductsDataGrid from '../../components/ProductsDataGrid/ProductsDataGrid';
import './ShoppingCart.css';
import useGetUserCarts from '../../hooks/useGetUserCarts';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const ShoppingCart = () => {
  const { setState, state } = useContext<{ setState: any; state: any }>(UserContext);
  const { data: products, loading, error } = useGetUserCarts();
  const navigate = useNavigate();

  useEffect(() => {
    if (state == null) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {products && <ProductsDataGrid products={products} />}
    </div>
  );
};

export default ShoppingCart;
