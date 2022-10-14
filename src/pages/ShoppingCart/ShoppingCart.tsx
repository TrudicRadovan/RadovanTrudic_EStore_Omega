import React from 'react';
import ProductsDataGrid from '../../components/ProductsDataGrid/ProductsDataGrid';
import getAllData from '../../services/getAllData';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { data: products, loading, error } = getAllData(process.env.REACT_APP_API_GET_ALL_PRODUCTS as string);

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {products && <ProductsDataGrid products={products} />}
    </div>
  );
};

export default ShoppingCart;
