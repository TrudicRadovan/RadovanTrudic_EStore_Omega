import React, { useContext, useEffect, useState } from 'react';
import ProductsDataGrid from '../../components/ProductsDataGrid/ProductsDataGrid';
import UserContext from '../../contexts/UserContext';
import CartDTO from '../../dto/CartDTO';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [products, setProducts] = useState(new Array<CartDTO>());

  const { setState, state } = useContext<{ setState: any; state: any }>(UserContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${state.id}/carts`)
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(res => {
        console.log(res);
        for (const cart of res.carts) {
          setProducts(cart.products);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {products && <ProductsDataGrid products={products} />}
    </div>
  );
};

export default ShoppingCart;
