import SearchBar from '../../components/SearchBar/SearchBar';
import ItemList from '../../components/ItemList/ItemList';
import React, { useState } from 'react';
import './Home.css';
import getAllData from '../../hooks/useGetAllData';
import useGetFewProducts from '../../hooks/useGetFewProducts';
import FilterSelect from '../../components/FilterSelect/FilterSelect';

const Home = () => {
  const { data: products, loading, error } = getAllData(); //useGetFewProducts();
  const [filteredData, setFilteredData] = useState(products);

  return (
    <div className="home">
      <h1>Home</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {products && <SearchBar setFilteredData={setFilteredData} products={products} />}
      {products && <FilterSelect />}
      {products && !filteredData && <ItemList products={products} />}
      {products && filteredData && <ItemList products={filteredData} />}
    </div>
  );
};

export default Home;
