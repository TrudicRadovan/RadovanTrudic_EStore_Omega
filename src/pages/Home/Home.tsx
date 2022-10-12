import SearchBar from '../../components/SearchBar/SearchBar';
import ItemList from '../../components/ItemList/ItemList';
import React from 'react';
import './Home.css';
import getAllData from '../../services/getAllData';

const Home = () => {
  const { data: products, loading, error } = getAllData(process.env.REACT_APP_API_GET_ALL_PRODUCTS as string);

  return (
    <div className="home">
      <h1>Home</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {products && <SearchBar />}
      {products && <ItemList products={products} />}
    </div>
  );
};

export default Home;
